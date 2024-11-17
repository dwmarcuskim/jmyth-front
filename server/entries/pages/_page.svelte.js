import { Q as push, Y as ensure_array_like, Z as head, S as pop } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
const OhneuriProfile = "/jmyth-front/_app/immutable/assets/ohneuri_profile.DNuywFYS.jpg";
function Message($$payload, $$props) {
  let { message, role } = $$props;
  $$payload.out += `<div class="w-full flex nanum-gothic-regular pb-2 svelte-1jahw2t">`;
  if (role === "user") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="w-full text-right flex-grow"></span> <div class="flex flex-col flex-shrink-0 bg-white px-4 py-2 rounded-lg max-w-70p svelte-1jahw2t"><p class="text-right font-bold">사용자</p> <p class="text-left pr-2">${escape_html(message)}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img class="w-12 h-12 rounded-full mr-2" id="bot-img"${attr("src", OhneuriProfile)} alt="bot image"> <div class="relative ml-1 w-full max-w-80p svelte-1jahw2t"><div class="absolute top-6 right-full transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[8px] border-transparent border-r-blue-200"></div> <div class="flex flex-col flex-grow bg-blue-200 px-4 py-2 rounded-lg w-full"><p class="text-left font-bold">오늘이</p> <p class="text-left pl-2">${escape_html(message)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function _page($$payload, $$props) {
  push();
  let chatMessage = "";
  const placeHolder = "오늘이에게 보낼 메시지를 입력해 보세요.";
  let inputDisabled = false;
  let messages = [];
  const each_array = ensure_array_like(messages);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home</title>`;
    $$payload2.out += `<meta name="description" content="Svelte demo app"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<section class="w-full flex flex-col align-top justify-center p-8">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div id="messages-container"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let message = each_array[$$index];
    Message($$payload, { message: message.message, role: message.role });
  }
  $$payload.out += `<!--]--></div> <form class="flex"><input class="flex-grow"${attr("value", chatMessage)}${attr("placeholder", placeHolder)}${attr("disabled", inputDisabled, true)}> <button class="flex-shrink-0 rounded-lg p-2 ml-2 bg-blue-400" type="submit"${attr("disabled", inputDisabled, true)}>보내기</button> <button class="flex-shrink-0 rounded-lg p-2 ml-2 bg-red-400"${attr("disabled", inputDisabled, true)}>대화 초기화</button></form></section>`;
  pop();
}
export {
  _page as default
};
