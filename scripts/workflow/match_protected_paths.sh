#!/usr/bin/env bash
set -euo pipefail

# Print stdin lines (file paths) that match any of the glob
# patterns passed as positional arguments. Pattern semantics:
#
#   **    matches any sequence of characters, including the path
#         separator `/`. Use for "this directory and everything
#         under it" (e.g. `.github/**`).
#   *     matches any sequence of characters NOT crossing a `/`.
#         Bounded to a single path segment so `src/*` matches
#         `src/foo.ts` but not `src/auth/secret.ts`.
#   ?     matches any single character except `/`.
#   any other character is treated as a literal (regex-escaped).
#
# Usage:
#   printf '%s\n' file1 file2 ... | scripts/workflow/match_protected_paths.sh <pattern>...
#
# Example:
#   $ printf '%s\n' .github/workflows/foo.yml src/main.ts README.md \
#       | scripts/workflow/match_protected_paths.sh '.github/**' 'src/auth/**'
#   .github/workflows/foo.yml
#
# Implementation note: an earlier version of this script used
# `[[ "$file" == $pattern ]]` and relied on bash's built-in
# `[[ ]]` pattern matching. That has the right behavior for `**`
# (because bash `*` already matches `/`) but the wrong behavior
# for single `*`: `src/*` would match `src/auth/secret.ts` and
# silently widen the protected-paths surface. The earlier inline
# sed-based glob-to-regex pipeline in `pr-review-policy.yml` had
# the opposite bug — `**` silently failed to match nested paths
# because `*` was rewritten twice. See #54 for the original post-
# mortem and the validation comment on issue #43 for the single-
# `*` regression. This implementation translates each glob to a
# regex in a single pass (handling `**` before `*`), so it gets
# both cases right.

if [ "$#" -eq 0 ]; then
  echo "match_protected_paths.sh: at least one pattern required" >&2
  echo "usage: printf '%s\\n' <files...> | match_protected_paths.sh <pattern>..." >&2
  exit 1
fi

# The script is passed via `-c` (not a heredoc on stdin) so that
# stdin remains the piped file list. Patterns are forwarded as
# positional argv to the inline Python program.
exec python3 -c '
import re
import sys


def glob_to_regex(pattern):
    out = []
    i = 0
    n = len(pattern)
    while i < n:
        if pattern[i:i + 2] == "**":
            out.append(".*")
            i += 2
        elif pattern[i] == "*":
            out.append("[^/]*")
            i += 1
        elif pattern[i] == "?":
            out.append("[^/]")
            i += 1
        else:
            out.append(re.escape(pattern[i]))
            i += 1
    return re.compile("^" + "".join(out) + "$")


regexes = [glob_to_regex(p) for p in sys.argv[1:]]
for raw in sys.stdin:
    path = raw.rstrip("\n")
    if not path:
        continue
    if any(r.match(path) for r in regexes):
        print(path)
' "$@"
