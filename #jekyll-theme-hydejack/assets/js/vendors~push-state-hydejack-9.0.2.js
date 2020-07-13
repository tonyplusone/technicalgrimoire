/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.2 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"HyPushState",(function(){return we}));var n,i=r(178),o=r(169),s=r(156),a=r(182),c=r(0),h=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n}return Object(c.e)(t,e),t.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),null!==n&&n>0?e.prototype.requestAsyncId.call(this,t,r,n):(t.actions.push(this),t.scheduled||(t.scheduled=requestAnimationFrame((function(){return t.flush(void 0)}))))},t.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0)return e.prototype.recycleAsyncId.call(this,t,r,n);0===t.actions.length&&(cancelAnimationFrame(r),t.scheduled=void 0)},t}(r(94).a),u=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.e)(t,e),t.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,n=-1,i=r.length;e=e||r.shift();do{if(t=e.execute(e.state,e.delay))break}while(++n<i&&(e=r.shift()));if(this.active=!1,t){for(;++n<i&&(e=r.shift());)e.unsubscribe();throw t}},t}(r(93).a))(h),l=r(205),p=r(207),f=r(17),d=r(98),b=r(99),y=r(181),v=r(185),O=r(183),j=r(2),m=r(179),g=r(39),w=r(1);function S(e){var t=e.error;e.subscriber.error(t)}!function(e){e.NEXT="N",e.ERROR="E",e.COMPLETE="C"}(n||(n={}));var P=function(){function e(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return r&&r()}},e.prototype.accept=function(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return Object(g.a)(this.value);case"E":return e=this.error,t?new w.a((function(r){return t.schedule(S,0,{error:e,subscriber:r})})):new w.a((function(t){return t.error(e)}));case"C":return m.a}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function E(e,t){return void 0===t&&(t=0),function(r){return r.lift(new x(e,t))}}var N,x=function(){function e(e,t){void 0===t&&(t=0),this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return t.subscribe(new L(e,this.scheduler,this.delay))},e}(),L=function(e){function t(t,r,n){void 0===n&&(n=0);var i=e.call(this,t)||this;return i.scheduler=r,i.delay=n,i}return Object(c.e)(t,e),t.dispatch=function(e){var t=e.notification,r=e.destination;t.observe(r),this.unsubscribe()},t.prototype.scheduleMessage=function(e){this.destination.add(this.scheduler.schedule(t.dispatch,this.delay,new A(e,this.destination)))},t.prototype._next=function(e){this.scheduleMessage(P.createNext(e))},t.prototype._error=function(e){this.scheduleMessage(P.createError(e)),this.unsubscribe()},t.prototype._complete=function(){this.scheduleMessage(P.createComplete()),this.unsubscribe()},t}(j.a),A=function(e,t){this.notification=e,this.destination=t},R=r(184),M=r(204),C=r(95),k=r(97),_=r(208),q=r(206),H=r(165);function U(e){var{protocol:t,host:r}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==n.protocol||r!==n.host}function D(e){return e&&""===e.target}function T(e,t){var{url:r,anchor:n}=e;return D(n)&&!U(r,t)&&!function(e){var{hash:t,origin:r,pathname:n}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return""!==t&&r===i.origin&&n===i.pathname}(r,t)}function I(e){var{cause:t,url:{pathname:r,hash:n},oldURL:{pathname:i}}=e;return r===i&&(t===N.Pop||t===N.Push&&""!==n)}!function(e){e.Init="init",e.Hint="hint",e.Push="push",e.Pop="pop"}(N||(N={}));var $=r(209),V=r(212);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class W{constructor(e){this.parent=e}fetchPage(e){return Object(H.g)(e.url.href,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}).pipe(Object(C.a)(e=>e.text()),Object(f.a)(t=>F(F({},e),{},{responseText:t})),Object(_.a)(t=>Object(g.a)(F(F({},e),{},{error:t,responseText:null}))))}selectPrefetch(e,t,r){var{href:n}=e;return n===t.url.href?Object(g.a)(t):r.pipe(Object(V.a)(1))}getResponse(e,t,r){return Object($.a)(this.selectPrefetch(t.url,r,e),this.parent.animPromise).pipe(Object(f.a)(e=>{var[r]=e;return F(F({},r),t)}))}}var X=r(54),J=r(157),K=r(191);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Z{constructor(e){this.parent=e}get scriptSelector(){return this.parent.scriptSelector}removeScriptTags(e){var t=[];return e.forEach(e=>e.querySelectorAll(this.scriptSelector).forEach(e=>{var r=[function(e){var t=document.createElement("script");return Array.from(e.attributes).forEach(e=>t.setAttributeNode(e.cloneNode())),t.innerHTML=e.innerHTML,t}(e),e];t.push(r)})),t}reinsertScriptTags(e){if(!this.scriptSelector)return Promise.resolve(e);var{scripts:t}=e,r=document.write;return Object(X.a)(t).pipe(Object(J.a)(e=>this.insertScript(e)),Object(_.a)(t=>Object(g.a)(Q(Q({},e),{},{error:t}))),Object(K.a)(()=>document.write=r),Object(R.a)(e)).toPromise()}insertScript(e){var[t,r]=e;return document.write=function(){for(var e=document.createElement("div"),t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];e.innerHTML=n.join(),Array.from(e.childNodes).forEach(e=>r.parentNode.insertBefore(e,r))},new Promise((e,n)=>{""!==t.src?(t.addEventListener("load",e),t.addEventListener("error",n),r.parentNode.replaceChild(t,r)):(r.parentNode.replaceChild(t,r),e({}))})}}function ee(e,t){e.forEach(e=>{e.querySelectorAll("[href]").forEach(te("href",t)),e.querySelectorAll("[src]").forEach(te("src",t)),e.querySelectorAll("img[srcset]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/\s*,\s*/).map(e=>{var r=e.split(/\s+/);return r[0]=new URL(r[0],t).href,r.join(" ")}).join(", "))}catch(e){}}}("srcset",t)),e.querySelectorAll("blockquote[cite]").forEach(te("cite",t)),e.querySelectorAll("del[cite]").forEach(te("cite",t)),e.querySelectorAll("ins[cite]").forEach(te("cite",t)),e.querySelectorAll("q[cite]").forEach(te("cite",t)),e.querySelectorAll("img[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("frame[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("iframe[longdesc]").forEach(te("longdesc",t)),e.querySelectorAll("img[usemap]").forEach(te("usemap",t)),e.querySelectorAll("input[usemap]").forEach(te("usemap",t)),e.querySelectorAll("object[usemap]").forEach(te("usemap",t)),e.querySelectorAll("form[action]").forEach(te("action",t)),e.querySelectorAll("button[formaction]").forEach(te("formaction",t)),e.querySelectorAll("input[formaction]").forEach(te("formaction",t)),e.querySelectorAll("video[poster]").forEach(te("poster",t)),e.querySelectorAll("object[data]").forEach(te("data",t)),e.querySelectorAll("object[codebase]").forEach(te("codebase",t)),e.querySelectorAll("object[archive]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/[\s,]+/).map(e=>new URL(e,t).href).join(", "))}catch(e){}}}("archive",t))})}function te(e,t){return r=>{try{r.setAttribute(e,new URL(r.getAttribute(e),t).href)}catch(e){}}}function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class oe{constructor(e){this.parent=e,this.scriptManager=new Z(e)}get el(){return this.parent.el}get replaceSelector(){return this.parent.replaceSelector}get scriptSelector(){return this.parent.scriptSelector}getReplaceElements(e){if(this.replaceSelector)return this.replaceSelector.split(",").map(t=>e.querySelector(t));if(this.el.id)return[e.getElementById(this.el.id)];var t=Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);return[e.getElementsByTagName(this.el.tagName)[t]]}responseToContent(e){try{var{responseText:t}=e,r=(new DOMParser).parseFromString(t,"text/html"),{title:n=""}=r,i=this.getReplaceElements(r),o=this.scriptSelector?this.scriptManager.removeScriptTags(i):[];return ne(ne({},e),{},{document:r,title:n,replaceEls:i,scripts:o})}catch(e){console.error(e)}}replaceContentWithSelector(e){this.replaceSelector.split(",").map(e=>document.querySelector(e)).forEach((t,r)=>t.parentNode.replaceChild(e[r],t))}replaceContentWholesale(e){var[t]=e;this.el.innerHTML=t.innerHTML}replaceContent(e){this.replaceSelector?this.replaceContentWithSelector(e):this.replaceContentWholesale(e)}replaceHead(e){var{head:t}=this.el.ownerDocument,r=t.querySelector("link[rel=canonical]"),n=e.head.querySelector("link[rel=canonical]");r&&n&&(r.href=n.href);var i=t.querySelector("meta[name=description]"),o=e.head.querySelector("meta[name=description]");i&&o&&(i.content=o.content)}updateDOM(e){try{var{replaceEls:t,document:r}=e;U(this.parent)&&ee(t,this.parent.href),this.replaceContent(t),this.replaceHead(r)}catch(t){throw ne(ne({},e),{},{error:t})}}reinsertScriptTags(e){return this.scriptManager.reinsertScriptTags(e)}}var se=r(40),ae=r(80),ce=e=>Array.prototype.concat.apply([],e),he=e=>({addedNodes:new Set(ce(e.map(e=>Array.from(e.addedNodes)))),removedNodes:new Set(ce(e.map(e=>Array.from(e.removedNodes))))});class ue{setupEventListeners(){var e=Object(s.a)(this.el,"click").pipe(Object(f.a)(e=>{var t=Object(H.k)(e.target,this.linkSelector);if(t instanceof HTMLAnchorElement)return[e,t]}),Object(d.a)(e=>!!e)),t=(e,t)=>e.matches(t)?Object(g.a)(e):Object(X.a)(e.querySelectorAll(t));return{hintEvent$:this.$.linkSelector.pipe(Object(C.a)(e=>{var r=new Map,n=e=>{r.has(e)||r.set(e,(e=>Object(a.a)(Object(s.a)(e,"mouseenter",{passive:!0}),Object(s.a)(e,"touchstart",{passive:!0}),Object(s.a)(e,"focus",{passive:!0})).pipe(Object(f.a)(t=>[t,e])))(e))},i=e=>{r.delete(e)};return Object(H.d)(this.el,{childList:!0,subtree:!0}).pipe(Object(y.a)({addedNodes:[this.el],removedNodes:[]}),Object(H.c)(500),Object(f.a)(he),Object(C.a)(o=>{var{addedNodes:s,removedNodes:a}=o;return Object(X.a)(a).pipe(Object(d.a)(e=>e instanceof Element),Object(se.a)(r=>t(r,e)),Object(b.a)(i)).subscribe(),Object(X.a)(s).pipe(Object(d.a)(e=>e instanceof Element),Object(se.a)(r=>t(r,e)),Object(b.a)(n)).subscribe(),Object(X.a)(r.values()).pipe(Object(ae.a)())}),Object(H.l)(this.$.prefetch))})),pushEvent$:e}}}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var de=e=>new Promise(t=>setTimeout(t,e));class be{constructor(e){this.parent=e}onStart(e){this.parent.animPromise=de(this.parent.duration);this.parent.fireEvent("start",{detail:pe(pe({},e),{},{transitionUntil:e=>{this.parent.animPromise=Promise.all([this.parent.animPromise,e])}})})}emitDOMError(e){var{replaceElMissing:t,url:r}=e;t?(window.history.back(),setTimeout(()=>document.location.assign(r),100)):this.parent.fireEvent("error",{detail:e})}emitNetworkError(e){this.parent.fireEvent("networkerror",{detail:e})}emitError(e){this.parent.fireEvent("error",{detail:e})}emitReady(e){this.parent.fireEvent("ready",{detail:e})}emitAfter(e){this.parent.fadePromise=de(this.parent.duration);this.parent.fireEvent("after",{detail:pe(pe({},e),{},{transitionUntil:e=>{this.parent.fadePromise=Promise.all([this.parent.fadePromise,e])}})})}emitProgress(e){this.parent.fireEvent("progress",{detail:e})}emitLoad(e){this.parent.fireEvent("load",{detail:e})}}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){Oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}window.HashChangeEvent=window.HashChangeEvent||function(e){var{oldURL:t="",newURL:r=""}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new CustomEvent(e);return n.oldURL=t,n.newURL=r,n};class je{constructor(e){this.updateHistoryScrollPosition=()=>{if(!U(this.parent)){var e=this.assignScrollPosition(history.state||{});history.replaceState(e,document.title)}},this.parent=e}updateHistoryState(e){var{cause:t,replace:r,url:n,oldURL:i}=e;if(!U(this.parent))switch(t){case N.Init:case N.Push:var{histId:o}=this.parent;if(r||n.href===location.href){var s=ve(ve({},history.state),{},{[o]:{}});history.replaceState(s,document.title,n.href)}else history.pushState({[o]:{}},document.title,n.href);case N.Pop:this.parent.simulateHashChange&&function(e,t){e.hash!==t.hash&&window.dispatchEvent(new HashChangeEvent("hashchange",{newURL:e.href,oldURL:t.href}))}(n,i)}}updateTitle(e){var{cause:t,title:r}=e;document.title=r,U(this.parent)||t!==N.Push||history.replaceState(history.state,r)}assignScrollPosition(e){var{histId:t}=this.parent;return ve(ve({},e),{},{[t]:ve(ve({},e[t]),{},{scrollTop:Object(H.j)(),scrollHeight:Object(H.i)()})})}}class me{constructor(e){this.parent=e,"scrollRestoration"in history&&(history.scrollRestoration="manual")}manageScrollPosition(e){var{cause:t,url:{hash:r}}=e;switch(t){case N.Push:this.scrollHashIntoView(r,{behavior:"smooth",block:"start",inline:"nearest"});break;case N.Pop:this.restoreScrollPosition();break;case N.Init:this.restoreScrollPositionOnReload()}}elementFromHash(e){return document.getElementById(decodeURIComponent(e.substr(1)))}scrollHashIntoView(e,t){if(e){var r=this.elementFromHash(e);r&&r.scrollIntoView(t)}else window.scroll(window.pageXOffset,0)}restoreScrollPosition(){var{histId:e}=this.parent,{scrollTop:t}=history.state&&history.state[e]||{};null!=t&&window.scroll(window.pageXOffset,t)}restoreScrollPositionOnReload(){var{histId:e}=this.parent;history.state&&history.state[e]&&0===Object(H.j)()?this.restoreScrollPosition():location.hash&&requestAnimationFrame(()=>this.scrollHashIntoView(location.hash,!0))}}var ge=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},we=class extends(Object(H.b)(H.a,[ue])){constructor(){super(...arguments),this.el=this,this.linkSelector="a[href]:not([data-no-push])",this.prefetch=!1,this.duration=0,this.simulateHashChange=!1,this.baseURL=window.location.href,this._initialized=Object(H.f)(),this.$={},this.fadePromise=Promise.resolve(null),this.scrollManager=new me(this),this.historyManager=new je(this),this.fetchManager=new W(this),this.updateManager=new oe(this),this.eventManager=new be(this),this._url=new URL(this.baseURL),this.reload$=new o.a,this.cacheNr=0,this.upgrade=()=>{var{pushEvent$:e,hintEvent$:t}=this.setupEventListeners(),r={},n=e.pipe(Object(f.a)(e=>{var[t,r]=e;return{cause:N.Push,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(d.a)(e=>function(e,t){var{url:r,anchor:n,event:{metaKey:i,ctrlKey:o}}=e;return!i&&!o&&D(n)&&!U(r,t)}(e,this)),Object(b.a)(e=>{var{event:t}=e;t.preventDefault(),this.historyManager.updateHistoryScrollPosition()})),i=Object(s.a)(window,"popstate").pipe(Object(d.a)(()=>window.history.state&&window.history.state[this.histId]),Object(f.a)(e=>({cause:N.Pop,url:new URL(window.location.href),cacheNr:this.cacheNr,event:e}))),o=this.reload$,c=Object(a.a)(n,i,o).pipe(Object(y.a)({url:new URL(window.location.href)}),Object(v.a)(),Object(f.a)(e=>{var[t,r]=e;return Object.assign(r,{oldURL:t.url})}),Object(O.a)()),h=c.pipe(Object(d.a)(e=>!I(e)),Object(O.a)()),p=c.pipe(Object(d.a)(e=>I(e)),Object(d.a)(()=>history.state&&history.state[this.histId]),E(u),Object(b.a)(e=>{this.historyManager.updateHistoryState(e),this.scrollManager.manageScrollPosition(e)})),j=Object(l.a)(()=>Object(a.a)(h.pipe(Object(R.a)(!0)),r.response$.pipe(Object(R.a)(!1)))).pipe(Object(y.a)(!1)),m=t.pipe(Object(H.h)(j.pipe(Object(f.a)(e=>!e))),Object(f.a)(e=>{var[t,r]=e;return{cause:N.Hint,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(d.a)(e=>T(e,this))),g=Object(a.a)(m,h).pipe(Object(M.a)((e,t)=>this.compareContext(e,t)),Object(C.a)(e=>this.fetchManager.fetchPage(e)),Object(y.a)({url:{}}),Object(O.a)()),w=r.response$=h.pipe(Object(b.a)(e=>{this.eventManager.onStart(e),this.historyManager.updateHistoryState(e),this._url=e.url}),Object(k.a)(g),Object(C.a)(e=>this.fetchManager.getResponse(g,...e)),Object(O.a)()),S=w.pipe(Object(d.a)(e=>{var{error:t}=e;return!t})),P=w.pipe(Object(d.a)(e=>{var{error:t}=e;return!!t})),x=S.pipe(Object(f.a)(e=>this.updateManager.responseToContent(e)),Object(b.a)(e=>this.eventManager.emitReady(e)),E(u),Object(b.a)(e=>{this.updateManager.updateDOM(e),this.historyManager.updateTitle(e),this.eventManager.emitAfter(e)}),Object(y.a)({cause:N.Init,url:this._url,scripts:[]}),E(u),Object(b.a)(e=>this.scrollManager.manageScrollPosition(e)),Object(b.a)({error:e=>this.eventManager.emitDOMError(e)}),Object(_.a)((e,t)=>t),Object(C.a)(e=>this.updateManager.reinsertScriptTags(e)),Object(b.a)({error:e=>this.eventManager.emitError(e)}),Object(_.a)((e,t)=>t),Object(C.a)(()=>this.fadePromise),Object(b.a)(e=>this.eventManager.emitLoad(e))),L=P.pipe(Object(b.a)(e=>this.eventManager.emitNetworkError(e))),A=h.pipe(Object(C.a)(e=>Object(l.a)(()=>this.animPromise).pipe(Object(q.a)(w),Object(R.a)(e))),Object(b.a)(e=>this.eventManager.emitProgress(e)));x.subscribe(),p.subscribe(),L.subscribe(),A.subscribe(),this._initialized.resolve(this),this.fireEvent("init")}}createRenderRoot(){return this}get initialized(){return this._initialized}_setLocation(e,t){var r=new URL(this._url.href);r[e]=t,this.assign(r.href)}get hash(){return this._url.hash}get host(){return this._url.host}get hostname(){return this._url.hostname}get href(){return this._url.href}get pathname(){return this._url.pathname}get port(){return this._url.port}get protocol(){return this._url.protocol}get search(){return this._url.search}get origin(){return this._url.origin}get ancestorOrigins(){return window.location.ancestorOrigins}set hash(e){this._setLocation("hash",e)}set host(e){this._setLocation("host",e)}set hostname(e){this._setLocation("hostname",e)}set href(e){this._setLocation("href",e)}set pathname(e){this._setLocation("pathname",e)}set port(e){this._setLocation("port",e)}set protocol(e){this._setLocation("protocol",e)}set search(e){this._setLocation("search",e)}set origin(e){}set ancestorOrigins(e){}get histId(){return this.id||this.tagName}assign(e){this.reload$.next({cause:N.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr})}reload(){this.reload$.next({cause:N.Push,url:new URL(this.href),cacheNr:++this.cacheNr,replace:!0})}replace(e){this.reload$.next({cause:N.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr,replace:!0})}compareContext(e,t){return e.url.href===t.url.href&&e.error===t.error&&e.cacheNr===t.cacheNr}connectedCallback(){super.connectedCallback(),this.$.linkSelector=new p.a(this.linkSelector),this.$.prefetch=new p.a(this.prefetch),window.addEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition),this.updateComplete.then(this.upgrade)}disconnectedCallback(){window.removeEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition)}};
/**
 * Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */ge([Object(i.e)({type:String,reflect:!0,attribute:"replace-selector"})],we.prototype,"replaceSelector",void 0),ge([Object(i.e)({type:String,reflect:!0,attribute:"link-selector"})],we.prototype,"linkSelector",void 0),ge([Object(i.e)({type:String,reflect:!0,attribute:"script-selector"})],we.prototype,"scriptSelector",void 0),ge([Object(i.e)({type:Boolean,reflect:!0,attribute:"prefetch"})],we.prototype,"prefetch",void 0),ge([Object(i.e)({type:Number,reflect:!0,attribute:"duration"})],we.prototype,"duration",void 0),ge([Object(i.e)({type:Boolean,reflect:!0,attribute:"hashchange"})],we.prototype,"simulateHashChange",void 0),ge([Object(i.e)({type:String})],we.prototype,"baseURL",void 0),ge([Object(i.e)()],we.prototype,"assign",null),ge([Object(i.e)()],we.prototype,"reload",null),ge([Object(i.e)()],we.prototype,"replace",null),we=ge([Object(i.c)("hy-push-state")],we)},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),i=r(26),o=r(29),s=r(25);function a(e){return function(t){var r=new c(e),n=t.lift(r);return r.caught=n}}var c=function(){function e(e){this.selector=e}return e.prototype.call=function(e,t){return t.subscribe(new h(e,this.selector,this.caught))},e}(),h=function(e){function t(t,r,n){var i=e.call(this,t)||this;return i.selector=r,i.caught=n,i}return Object(n.e)(t,e),t.prototype.error=function(t){if(!this.isStopped){var r=void 0;try{r=this.selector(t,this.caught)}catch(t){return void e.prototype.error.call(this,t)}this._unsubscribeAndRecycle();var n=new o.a(this,void 0,void 0);this.add(n);var i=Object(s.a)(this,r,void 0,void 0,n);i!==n&&this.add(i)}},t}(i.a)},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),i=r(76),o=r(43),s=r(2),a=r(26),c=r(25),h=r(21);function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e[e.length-1],n=void 0;return"function"==typeof r&&(n=e.pop()),Object(i.a)(e,void 0).lift(new l(n))}var l=function(){function e(e){this.resultSelector=e}return e.prototype.call=function(e,t){return t.subscribe(new p(e,this.resultSelector))},e}(),p=function(e){function t(t,r,n){void 0===n&&(n=Object.create(null));var i=e.call(this,t)||this;return i.iterators=[],i.active=0,i.resultSelector=r,i.values=n,i}return Object(n.e)(t,e),t.prototype._next=function(e){var t=this.iterators;Object(o.a)(e)?t.push(new d(e)):"function"==typeof e[h.a]?t.push(new f(e[h.a]())):t.push(new b(this.destination,this,e))},t.prototype._complete=function(){var e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(var r=0;r<t;r++){var n=e[r];if(n.stillUnsubscribed)this.destination.add(n.subscribe(n,r));else this.active--}}else this.destination.complete()},t.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},t.prototype.checkIterators=function(){for(var e=this.iterators,t=e.length,r=this.destination,n=0;n<t;n++){if("function"==typeof(s=e[n]).hasValue&&!s.hasValue())return}var i=!1,o=[];for(n=0;n<t;n++){var s,a=(s=e[n]).next();if(s.hasCompleted()&&(i=!0),a.done)return void r.complete();o.push(a.value)}this.resultSelector?this._tryresultSelector(o):r.next(o),i&&r.complete()},t.prototype._tryresultSelector=function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(s.a),f=function(){function e(e){this.iterator=e,this.nextResult=e.next()}return e.prototype.hasValue=function(){return!0},e.prototype.next=function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e},e.prototype.hasCompleted=function(){var e=this.nextResult;return e&&!!e.done},e}(),d=function(){function e(e){this.array=e,this.index=0,this.length=0,this.length=e.length}return e.prototype[h.a]=function(){return this},e.prototype.next=function(e){var t=this.index++,r=this.array;return t<this.length?{value:r[t],done:!1}:{value:null,done:!0}},e.prototype.hasValue=function(){return this.array.length>this.index},e.prototype.hasCompleted=function(){return this.array.length===this.index},e}(),b=function(e){function t(t,r,n){var i=e.call(this,t)||this;return i.parent=r,i.observable=n,i.stillUnsubscribed=!0,i.buffer=[],i.isComplete=!1,i}return Object(n.e)(t,e),t.prototype[h.a]=function(){return this},t.prototype.next=function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}},t.prototype.hasValue=function(){return this.buffer.length>0},t.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},t.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},t.prototype.notifyNext=function(e,t,r,n,i){this.buffer.push(t),this.parent.checkIterators()},t.prototype.subscribe=function(e,t){return Object(c.a)(this,this.observable,this,t)},t}(a.a)},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(0),i=r(26),o=r(29),s=r(25),a=r(17),c=r(54);function h(e,t){return t?function(r){return r.pipe(h((function(r,n){return Object(c.a)(e(r,n)).pipe(Object(a.a)((function(e,i){return t(r,e,n,i)})))})))}:function(t){return t.lift(new u(e))}}var u=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t.subscribe(new l(e,this.project))},e}(),l=function(e){function t(t,r){var n=e.call(this,t)||this;return n.project=r,n.hasSubscription=!1,n.hasCompleted=!1,n.index=0,n}return Object(n.e)(t,e),t.prototype._next=function(e){this.hasSubscription||this.tryNext(e)},t.prototype.tryNext=function(e){var t,r=this.index++;try{t=this.project(e,r)}catch(e){return void this.destination.error(e)}this.hasSubscription=!0,this._innerSub(t,e,r)},t.prototype._innerSub=function(e,t,r){var n=new o.a(this,t,r),i=this.destination;i.add(n);var a=Object(s.a)(this,e,void 0,void 0,n);a!==n&&i.add(a)},t.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e,t,r,n,i){this.destination.next(t)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.remove(e),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},t}(i.a)},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),i=r(77),o=r(43);function s(e){return!Object(o.a)(e)&&e-parseFloat(e)+1>=0}var a=r(75);function c(e,t,r){void 0===e&&(e=0);var o=-1;return s(t)?o=Number(t)<1?1:Number(t):Object(a.a)(t)&&(r=t),Object(a.a)(r)||(r=i.a),new n.a((function(t){var n=s(e)?e:+e-r.now();return r.schedule(h,n,{index:0,period:o,subscriber:t})}))}function h(e){var t=e.index,r=e.period,n=e.subscriber;if(n.next(t),!n.closed){if(-1===r)return n.complete();e.index=t+1,this.schedule(e,r)}}}}]);