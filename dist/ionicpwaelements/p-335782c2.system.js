var __extends=this&&this.__extends||function(){var e=function(n,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t))e[t]=n[t]};return e(n,t)};return function(n,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r["throw"](e))}catch(e){i(e)}}function s(e){e.done?t(e.value):a(e.value).then(l,o)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(n){return s([e,n])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(l&&(l=0,o[0]&&(t=0)),t)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;a=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1];i=o;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(o);break}if(i[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(e){o=[6,e];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,i;r<a;r++){if(i||!(r in n)){if(!i)i=Array.prototype.slice.call(n,0,r);i[r]=n[r]}}return e.concat(i||Array.prototype.slice.call(n))};System.register([],(function(e,n){"use strict";return{execute:function(){var t=this;var r="ionicpwaelements";var a;var i;var l=false;var o=false;var s=function(e,n){if(n===void 0){n=""}{return function(){return}}};var u=function(e,n){{return function(){return}}};var f="{visibility:hidden}.hydrated{visibility:inherit}";var c={};var $="http://www.w3.org/2000/svg";var v="http://www.w3.org/1999/xhtml";var d=function(e){return e!=null};var p=function(e){e=typeof e;return e==="object"||e==="function"};function h(e){var n,t,r;return(r=(t=(n=e.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||t===void 0?void 0:t.getAttribute("content"))!==null&&r!==void 0?r:undefined}var m=e("h",(function(e,n){var t=[];for(var r=2;r<arguments.length;r++){t[r-2]=arguments[r]}var a=null;var i=false;var l=false;var o=[];var s=function(n){for(var t=0;t<n.length;t++){a=n[t];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!p(a)){a=String(a)}if(i&&l){o[o.length-1].$text$+=a}else{o.push(i?g(null,a):a)}l=i}}};s(t);if(n){{var u=n.className||n.class;if(u){n.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var f=g(e,null);f.$attrs$=n;if(o.length>0){f.$children$=o}return f}));var g=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};{t.$attrs$=null}return t};var y=e("H",{});var b=function(e){return e&&e.$tag$===y};var w=function(e,n){if(e!=null&&!p(e)){if(n&4){return e==="false"?false:e===""||!!e}if(n&2){return parseFloat(e)}if(n&1){return String(e)}return e}return e};var _=e("g",(function(e){return ve(e).$hostElement$}));var S=e("c",(function(e,n,t){var r=_(e);return{emit:function(e){return N(r,n,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var N=function(e,n,t){var r=Se.ce(n,t);e.dispatchEvent(r);return r};var R=new WeakMap;var x=function(e,n,t){var r=be.get(e);if(Re&&t){r=r||new CSSStyleSheet;if(typeof r==="string"){r=n}else{r.replaceSync(n)}}else{r=n}be.set(e,r)};var L=function(e,n,t,r){var a;var i=j(n);var l=be.get(i);e=e.nodeType===11?e:_e;if(l){if(typeof l==="string"){e=e.head||e;var o=R.get(e);var s=void 0;if(!o){R.set(e,o=new Set)}if(!o.has(i)){{{s=_e.createElement("style");s.innerHTML=l}var u=(a=Se.$nonce$)!==null&&a!==void 0?a:h(_e);if(u!=null){s.setAttribute("nonce",u)}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(i)}}}else if(!e.adoptedStyleSheets.includes(l)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[l],false)}}return i};var P=function(e){var n=e.$cmpMeta$;var t=e.$hostElement$;var r=n.$flags$;var a=s("attachStyles",n.$tagName$);var i=L(t.shadowRoot?t.shadowRoot:t.getRootNode(),n);if(r&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var j=function(e,n){return"sc-"+e.$tagName$};var C=function(e,n,t,r,a,i){if(t!==r){var l=he(e,n);var o=n.toLowerCase();if(n==="class"){var s=e.classList;var u=A(t);var f=A(r);s.remove.apply(s,u.filter((function(e){return e&&!f.includes(e)})));s.add.apply(s,f.filter((function(e){return e&&!u.includes(e)})))}else if(n==="style"){{for(var c in t){if(!r||r[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in r){if(!t||r[c]!==t[c]){if(c.includes("-")){e.style.setProperty(c,r[c])}else{e.style[c]=r[c]}}}}else if(n==="ref"){if(r){r(e)}}else if(!l&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(he(we,o)){n=o.slice(2)}else{n=o[2]+n.slice(3)}if(t){Se.rel(e,n,t,false)}if(r){Se.ael(e,n,r,false)}}else{var $=p(r);if((l||$&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var v=r==null?"":r;if(n==="list"){l=false}else if(t==null||e[n]!=v){e[n]=v}}else{e[n]=r}}catch(e){}}if(r==null||r===false){if(r!==false||e.getAttribute(n)===""){{e.removeAttribute(n)}}}else if((!l||i&4||a)&&!$){r=r===true?"":r;{e.setAttribute(n,r)}}}}};var E=/\s/;var A=function(e){return!e?[]:e.split(E)};var O=function(e,n,t,r){var a=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$;var i=e&&e.$attrs$||c;var l=n.$attrs$||c;{for(r in i){if(!(r in l)){C(a,r,i[r],undefined,t,n.$flags$)}}}for(r in l){C(a,r,i[r],l[r],t,n.$flags$)}};var M=function(e,n,t,r){var i=n.$children$[t];var o=0;var s;var u;if(i.$text$!==null){s=i.$elm$=_e.createTextNode(i.$text$)}else{if(!l){l=i.$tag$==="svg"}s=i.$elm$=_e.createElementNS(l?$:v,i.$tag$);if(l&&i.$tag$==="foreignObject"){l=false}{O(null,i,l)}if(d(a)&&s["s-si"]!==a){s.classList.add(s["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){u=M(e,i,o);if(u){s.appendChild(u)}}}{if(i.$tag$==="svg"){l=false}else if(s.tagName==="foreignObject"){l=true}}}return s};var k=function(e,n,t,r,a,l){var o=e;var s;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=l;++a){if(r[a]){s=M(null,t,a);if(s){r[a].$elm$=s;o.insertBefore(s,n)}}}};var I=function(e,n,t){for(var r=n;r<=t;++r){var a=e[r];if(a){var i=a.$elm$;B(a);if(i){i.remove()}}}};var T=function(e,n,t,r){var a=0;var i=0;var l=n.length-1;var o=n[0];var s=n[l];var u=r.length-1;var f=r[0];var c=r[u];var $;while(a<=l&&i<=u){if(o==null){o=n[++a]}else if(s==null){s=n[--l]}else if(f==null){f=r[++i]}else if(c==null){c=r[--u]}else if(q(o,f)){z(o,f);o=n[++a];f=r[++i]}else if(q(s,c)){z(s,c);s=n[--l];c=r[--u]}else if(q(o,c)){z(o,c);e.insertBefore(o.$elm$,s.$elm$.nextSibling);o=n[++a];c=r[--u]}else if(q(s,f)){z(s,f);e.insertBefore(s.$elm$,o.$elm$);s=n[--l];f=r[++i]}else{{$=M(n&&n[i],t,i);f=r[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>l){k(e,r[u+1]==null?null:r[u+1].$elm$,t,r,i,u)}else if(i>u){I(n,a,l)}};var q=function(e,n){if(e.$tag$===n.$tag$){return true}return false};var z=function(e,n){var t=n.$elm$=e.$elm$;var r=e.$children$;var a=n.$children$;var i=n.$tag$;var o=n.$text$;if(o===null){{l=i==="svg"?true:i==="foreignObject"?false:l}{{O(e,n,l)}}if(r!==null&&a!==null){T(t,r,n,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}k(t,null,n,a,0,a.length-1)}else if(r!==null){I(r,0,r.length-1)}if(l&&i==="svg"){l=false}}else if(e.$text$!==o){t.data=o}};var B=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(B)}};var U=function(e,n){var t=e.$hostElement$;var r=e.$vnode$||g(null,null);var l=b(n)?n:m(null,null,n);i=t.tagName;l.$tag$=null;l.$flags$|=4;e.$vnode$=l;l.$elm$=r.$elm$=t.shadowRoot||t;{a=t["s-sc"]}z(r,l)};var H=function(e,n){if(n&&!e.$onRenderResolve$&&n["s-p"]){n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))}};var V=function(e,n){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}H(e,e.$ancestorComponent$);var t=function(){return F(e,n)};return Ae(t)};var F=function(e,n){var t=s("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(n){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var n=e[0],t=e[1];return Y(r,n,t)}));e.$queuedListeners$=undefined}}}t();return W(a,(function(){return G(e,r,n)}))};var W=function(e,n){return D(e)?e.then(n):n()};var D=function(e){return e instanceof Promise||e&&e.then&&typeof e.then==="function"};var G=function(e,n,r){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,o,u,f;return __generator(this,(function(c){a=e.$hostElement$;i=s("update",e.$cmpMeta$.$tagName$);l=a["s-rc"];if(r){P(e)}o=s("render",e.$cmpMeta$.$tagName$);{J(e,n)}if(l){l.map((function(e){return e()}));a["s-rc"]=undefined}o();i();{u=(t=a["s-p"])!==null&&t!==void 0?t:[];f=function(){return K(e)};if(u.length===0){f()}else{Promise.all(u).then(f);e.$flags$|=4;u.length=0}}return[2]}))}))};var J=function(e,n,t){try{n=n.render();{e.$flags$&=~16}{e.$flags$|=2}{{{U(e,n)}}}}catch(n){me(n,e.$hostElement$)}return null};var K=function(e){var n=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var r=s("postUpdate",n);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Z(t)}{Y(a,"componentDidLoad")}r();{e.$onReadyResolve$(t);if(!i){X()}}}else{r()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ee((function(){return V(e,false)}))}e.$flags$&=~(4|512)}};var Q=e("f",(function(e){{var n=ve(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){V(n,false)}return t}}));var X=function(e){{Z(_e.documentElement)}Ee((function(){return N(we,"appload",{detail:{namespace:r}})}))};var Y=function(e,n,t){if(e&&e[n]){try{return e[n](t)}catch(e){me(e)}}return undefined};var Z=function(e){return e.classList.add("hydrated")};var ee=function(e,n){return ve(e).$instanceValues$.get(n)};var ne=function(e,n,t,r){var a=ve(e);var i=a.$instanceValues$.get(n);var l=a.$flags$;var o=a.$lazyInstance$;t=w(t,r.$members$[n][0]);var s=Number.isNaN(i)&&Number.isNaN(t);var u=t!==i&&!s;if((!(l&8)||i===undefined)&&u){a.$instanceValues$.set(n,t);if(o){if((l&(2|16))===2){V(a,false)}}}};var te=function(e,n,t){if(n.$members$){var r=Object.entries(n.$members$);var a=e.prototype;r.map((function(e){var r=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,r,{get:function(){return ee(this,r)},set:function(e){ne(this,r,e,n)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var t=ve(this);return t.$onInstancePromise$.then((function(){var n;return(n=t.$lazyInstance$)[r].apply(n,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,n,t){var r=this;Se.jmp((function(){var n=i.get(e);if(r.hasOwnProperty(n)){t=r[n];delete r[n]}else if(a.hasOwnProperty(n)&&typeof r[n]==="number"&&r[n]==t){return}r[n]=t===null&&typeof r[n]==="boolean"?false:t}))};e.observedAttributes=r.filter((function(e){var n=e[0],t=e[1];return t[0]&15})).map((function(e){var n=e[0],t=e[1];var r=t[1]||n;i.set(r,n);return r}))}}return e};var re=function(e,n,r,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,o,f,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,3];n.$flags$|=32;i=ye(r);if(!i.then)return[3,2];e=u();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){te(i,r,2);i.isProxied=true}t=s("createInstance",r.$tagName$);{n.$flags$|=8}try{new i(n)}catch(e){me(e)}{n.$flags$&=~8}t();if(i.style){a=i.style;l=j(r);if(!be.has(l)){o=s("registerStyles",r.$tagName$);x(l,a,!!(r.$flags$&1));o()}}$.label=3;case 3:f=n.$ancestorComponent$;c=function(){return V(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(c)}else{c()}return[2]}}))}))};var ae=function(e){if((Se.$flags$&1)===0){var n=ve(e);var t=n.$cmpMeta$;var r=s("connectedCallback",t.$tagName$);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){H(n,n.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(n){var t=n[0],r=n[1][0];if(r&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{re(e,n,t)}}else{oe(e,n,t.$listeners$)}r()}};var ie=function(e){if((Se.$flags$&1)===0){var n=ve(e);var t=n.$lazyInstance$;{if(n.$rmListeners$){n.$rmListeners$.map((function(e){return e()}));n.$rmListeners$=undefined}}{Y(t,"disconnectedCallback")}}};var le=e("b",(function(e,n){if(n===void 0){n={}}var t;var r=s();var a=[];var i=n.exclude||[];var l=we.customElements;var o=_e.head;var u=o.querySelector("meta[charset]");var c=_e.createElement("style");var $=[];var v;var d=true;Object.assign(Se,n);Se.$resourcesUrl$=new URL(n.resourcesUrl||"./",_e.baseURI).href;e.map((function(e){e[1].map((function(n){var t={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};{t.$members$=n[2]}{t.$listeners$=n[3]}var r=t.$tagName$;var o=function(e){__extends(n,e);function n(n){var r=e.call(this,n)||this;n=r;pe(n,t);if(t.$flags$&1){{{n.attachShadow({mode:"open"})}}}return r}n.prototype.connectedCallback=function(){var e=this;if(v){clearTimeout(v);v=null}if(d){$.push(this)}else{Se.jmp((function(){return ae(e)}))}};n.prototype.disconnectedCallback=function(){var e=this;Se.jmp((function(){return ie(e)}))};n.prototype.componentOnReady=function(){return ve(this).$onReadyPromise$};return n}(HTMLElement);t.$lazyBundleId$=e[0];if(!i.includes(r)&&!l.get(r)){a.push(r);l.define(r,te(o,t,1))}}))}));{c.innerHTML=a+f;c.setAttribute("data-styles","");var p=(t=Se.$nonce$)!==null&&t!==void 0?t:h(_e);if(p!=null){c.setAttribute("nonce",p)}o.insertBefore(c,u?u.nextSibling:o.firstChild)}d=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{Se.jmp((function(){return v=setTimeout(X,30)}))}}r()}));var oe=function(e,n,t,r){if(t){t.map((function(t){var r=t[0],a=t[1],i=t[2];var l=ue(e,r);var o=se(n,i);var s=fe(r);Se.ael(l,a,o,s);(n.$rmListeners$=n.$rmListeners$||[]).push((function(){return Se.rel(l,a,o,s)}))}))}};var se=function(e,n){return function(t){try{{if(e.$flags$&256){e.$lazyInstance$[n](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([n,t])}}}catch(e){me(e)}}};var ue=function(e,n){if(n&16)return _e.body;return e};var fe=function(e){return(e&2)!==0};var ce=e("s",(function(e){return Se.$nonce$=e}));var $e=new WeakMap;var ve=function(e){return $e.get(e)};var de=e("r",(function(e,n){return $e.set(n.$lazyInstance$=e,n)}));var pe=function(e,n){var t={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}oe(e,t,n.$listeners$);return $e.set(e,t)};var he=function(e,n){return n in e};var me=function(e,n){return(0,console.error)(e,n)};var ge=new Map;var ye=function(e,t,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=ge.get(i);if(l){return l[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return n.import("./".concat(i,".entry.js").concat("")).then((function(e){{ge.set(i,e)}return e[a]}),me)};var be=new Map;var we=typeof window!=="undefined"?window:{};var _e=we.document||{head:{}};var Se={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)},ce:function(e,n){return new CustomEvent(e,n)}};var Ne=e("p",(function(e){return Promise.resolve(e)}));var Re=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var xe=[];var Le=[];var Pe=function(e,n){return function(t){e.push(t);if(!o){o=true;if(n&&Se.$flags$&4){Ee(Ce)}else{Se.raf(Ce)}}}};var je=function(e){for(var n=0;n<e.length;n++){try{e[n](performance.now())}catch(e){me(e)}}e.length=0};var Ce=function(){je(xe);{je(Le);if(o=xe.length>0){Se.raf(Ce)}}};var Ee=function(e){return Ne().then(e)};var Ae=Pe(Le,true)}}}));