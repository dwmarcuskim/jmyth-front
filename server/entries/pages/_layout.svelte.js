import { Q as push, T as stringify, S as pop } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
const OhneuriBg = "/jmyth-front/_app/immutable/assets/ohneuri_background.CsmgQTMS.webp";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="app svelte-7ppzye"><div class="background svelte-7ppzye"${attr("style", `background-image: url(${stringify(OhneuriBg)})`)}></div> <main class="main my-8 svelte-7ppzye">`;
  children($$payload);
  $$payload.out += `<!----></main></div>`;
  pop();
}
export {
  _layout as default
};
