// Google Analytics 4 bootstrap. Kept as an external file (not an inline
// <script>) so the Content-Security-Policy in firebase.json can forbid
// inline script. Loaded synchronously before the async gtag.js library so
// the `gtag` global and `dataLayer` queue exist before app.js runs.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-0SFL3RGC0H');
