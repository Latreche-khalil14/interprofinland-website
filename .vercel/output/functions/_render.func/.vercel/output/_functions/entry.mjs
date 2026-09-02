import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CqujrUdE.mjs';
import { manifest } from './manifest_rZ5D1UHZ.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/community.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/cookie-policy.astro.mjs');
const _page7 = () => import('./pages/events/archive.astro.mjs');
const _page8 = () => import('./pages/events.astro.mjs');
const _page9 = () => import('./pages/magazine.astro.mjs');
const _page10 = () => import('./pages/privacy-policy.astro.mjs');
const _page11 = () => import('./pages/projects/career-connect.astro.mjs');
const _page12 = () => import('./pages/projects/degree-amplify.astro.mjs');
const _page13 = () => import('./pages/projects.astro.mjs');
const _page14 = () => import('./pages/services/career-guidance.astro.mjs');
const _page15 = () => import('./pages/services/mentorship.astro.mjs');
const _page16 = () => import('./pages/services/networking.astro.mjs');
const _page17 = () => import('./pages/services/qualification-recognition.astro.mjs');
const _page18 = () => import('./pages/services.astro.mjs');
const _page19 = () => import('./pages/stories/_id_.astro.mjs');
const _page20 = () => import('./pages/stories.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/community.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/cookie-policy.astro", _page6],
    ["src/pages/events/archive.astro", _page7],
    ["src/pages/events/index.astro", _page8],
    ["src/pages/magazine.astro", _page9],
    ["src/pages/privacy-policy.astro", _page10],
    ["src/pages/projects/career-connect.astro", _page11],
    ["src/pages/projects/degree-amplify.astro", _page12],
    ["src/pages/projects/index.astro", _page13],
    ["src/pages/services/career-guidance.astro", _page14],
    ["src/pages/services/mentorship.astro", _page15],
    ["src/pages/services/networking.astro", _page16],
    ["src/pages/services/qualification-recognition.astro", _page17],
    ["src/pages/services/index.astro", _page18],
    ["src/pages/stories/[id].astro", _page19],
    ["src/pages/stories.astro", _page20],
    ["src/pages/index.astro", _page21]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "8edfd7a0-cf91-415b-a866-10d33f720b05",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
