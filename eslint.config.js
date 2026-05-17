// eslint.config.js (CommonJS variant)
//
// Auto-generated from nathanjohnpayne/mergepath's templated source
// at examples/eslint.config.cjs.js (per the Mergepath ESLint
// standard, mergepath#250). Edit upstream, not this rendered copy
// — local edits will be overwritten on the next propagation run.
//
// This is the CommonJS variant. It's rendered for consumers whose
// package.json does NOT declare `"type": "module"` (default CJS
// resolution). ESM consumers get the sibling examples/
// eslint.config.js (ESM variant) instead — see .mergepath-sync.yml
// for the consumers: partitioning.
//

const js = require("@eslint/js");
const globals = require("globals");


module.exports = [
  // Ignore generated / vendored output. Customize per-consumer via
  // a follow-up commit on the propagation PR if a repo needs extras
  // (e.g., functions/lib for cloud-functions repos).
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".astro/**",
      ".next/**",
      ".vercel/**",
    ],
  },

  // Baseline JS recommended — required by the Mergepath policy floor.
  js.configs.recommended,

  // Apply browser + node globals to all JS sources by default. Narrow
  // these per-file-pattern in a follow-up commit if the repo has a
  // clean split (e.g., scripts/* node-only, src/* browser-only).
  //
  // `*.cjs` files are split out so ESLint parses them as CommonJS
  // (`sourceType: "commonjs"`) rather than ES modules — otherwise
  // top-level `require`/`module.exports` and CommonJS scope rules
  // produce false-positive parse errors. The defaults ESLint applies
  // by extension are: `module` for `.js`/`.mjs`, `commonjs` for
  // `.cjs`; we make that explicit here so the policy is
  // self-documenting.
  {
    files: ["**/*.{js,mjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },



];
