import{N as T,O as S,P as V,Q as A,R as $,S as j,T as q,d as F,U as C,z,V as G,h as w,W as H,X as R,I as g,G as m,J as v,Y as W,Z as D,_ as N,D as J,$ as Q,a0 as U,B as X,p as Z,j as K,b as x,a1 as ee,a2 as te,a3 as re,a4 as ae}from"./runtime.vrpVNPhL.js";import{a as ne,c as ie}from"./disclose-version.77trNYxH.js";function Y(e){var t=V,a=A;T(null),S(null);try{return e()}finally{T(t),S(a)}}function he(e,t,a,n=a){e.addEventListener(t,()=>Y(a));const i=e.__on_r;i?e.__on_r=()=>{i(),n()}:e.__on_r=n,ne()}const se=new Set,I=new Set;function oe(e,t,a,n){function i(r){if(n.capture||E.call(t,r),!r.cancelBubble)return Y(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function ve(e,t,a,n,i){var r={capture:n,passive:i},d=oe(e,t,a,r);(t===document.body||t===window||t===document)&&F(()=>{t.removeEventListener(e,d,r)})}function E(e){var k;var t=this,a=t.ownerDocument,n=e.type,i=((k=e.composedPath)==null?void 0:k.call(e))||[],r=i[0]||e.target,d=0,p=e.__root;if(p){var c=i.indexOf(p);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var _=i.indexOf(t);if(_===-1)return;c<=_&&(d=c)}if(r=i[d]||e.target,r!==t){j(e,"currentTarget",{configurable:!0,get(){return r||a}});var L=V,f=A;T(null),S(null);try{for(var s,o=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+n];if(h!==void 0&&!r.disabled)if(q(h)){var[M,...P]=h;M.apply(r,[e,...P])}else h.call(r,e)}catch(b){s?o.push(b):s=b}if(e.cancelBubble||l===t||l===null)break;r=l}if(s){for(let b of o)queueMicrotask(()=>{throw b});throw s}}finally{e.__root=t,delete e.currentTarget,T(L),S(f)}}}let u;function ue(){u=void 0}function pe(e){let t=null,a=w;var n;if(w){for(t=v,u===void 0&&(u=W(document.head));u!==null&&(u.nodeType!==8||u.data!==H);)u=R(u);u===null?g(!1):u=m(R(u))}w||(n=document.head.appendChild(C()));try{z(()=>e(n),G)}finally{a&&(g(!0),u=v,m(t))}}const de=["touchstart","touchmove"];function fe(e){return de.includes(e)}function ye(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function le(e,t){return B(e,t)}function ge(e,t){D(),t.intro=t.intro??!1;const a=t.target,n=w,i=v;try{for(var r=W(a);r&&(r.nodeType!==8||r.data!==H);)r=R(r);if(!r)throw N;g(!0),m(r),J();const d=B(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==ee)throw te(),N;return g(!1),d}catch(d){if(d===N)return t.recover===!1&&re(),D(),ae(a),g(!1),le(e,t);throw d}finally{g(n),m(i),ue()}}const y=new Map;function B(e,{target:t,anchor:a,props:n={},events:i,context:r,intro:d=!0}){D();var p=new Set,c=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!p.has(o)){p.add(o);var l=fe(o);t.addEventListener(o,E,{passive:l});var h=y.get(o);h===void 0?(document.addEventListener(o,E,{passive:l}),y.set(o,1)):y.set(o,h+1)}}};c(Q(se)),I.add(c);var _=void 0,L=U(()=>{var f=a??t.appendChild(C());return X(()=>{if(r){Z({});var s=K;s.c=r}i&&(n.$$events=i),w&&ie(f,null),_=e(f,n)||{},w&&(A.nodes_end=v),r&&x()}),()=>{var l;for(var s of p){t.removeEventListener(s,E);var o=y.get(s);--o===0?(document.removeEventListener(s,E),y.delete(s)):y.set(s,o)}I.delete(c),O.delete(_),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return O.set(_,L),_}let O=new WeakMap;function we(e){const t=O.get(e);t&&t()}export{ge as a,ve as e,pe as h,he as l,le as m,ye as s,we as u};