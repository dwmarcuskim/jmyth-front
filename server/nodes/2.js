import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DD3RxcrG.js","_app/immutable/chunks/disclose-version.-8ibBl-a.js","_app/immutable/chunks/runtime.CfWXK4fg.js","_app/immutable/chunks/legacy.ZyCjkF0e.js","_app/immutable/chunks/render.Yls9UIfI.js","_app/immutable/chunks/index-client.CG1KUufb.js","_app/immutable/chunks/attributes.CaPm3nup.js"];
export const stylesheets = ["_app/immutable/assets/2.JDx0G1A0.css"];
export const fonts = [];
