if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,c,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-2699fb14"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.js",revision:"766d06d093812391812e327803cdac70"},{url:"favicon.png",revision:"ec6eb3925f43d2f9eaacbfc6a7756934"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"5f97ebcbebbf312a4f5a5787067e1c62"},{url:"manifest.json",revision:"200f66e49067ed396cdd23db5e4fc783"},{url:"VERSION.txt",revision:"ee6c6390ae2359059136977dc50dab5a"},{url:"welcome.js",revision:"063ce000f59c19b205c4737a260cb16b"}],{})}));
//# sourceMappingURL=sw.js.map
