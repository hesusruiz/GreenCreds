if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-2699fb14"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_snowpack/pkg/@zxing/library.js",revision:"5b82e37f32130feacb65597eadb6228d"},{url:"_snowpack/pkg/dexie.js",revision:"ee09fb6cf7f640281d2fd1543b42a0fa"},{url:"_snowpack/pkg/import-map.json",revision:"e4c6d4cda131e84c017bbb2b9dca4f93"},{url:"_snowpack/pkg/lit-html.js",revision:"d929a393bf59ca631ed04e139d4e2061"},{url:"_snowpack/pkg/pako.js",revision:"38dda4b58cf1a97e96cbe8ea640c7b6c"},{url:"_snowpack/pkg/workbox-window.js",revision:"391f93f13e3580747ba1fe7648210d7e"},{url:"app.js",revision:"86069cd618b22e75a64933a9256fd433"},{url:"assets/PRE_gene_cert.txt",revision:"a4aa4153b31e9b3ff66ced56da875e28"},{url:"components/cwt.js",revision:"9976e2280f03c1d8ab6f5bf86ec890a7"},{url:"components/header.js",revision:"9ce804f58a2fd768602b8c3a04d27af9"},{url:"css/w3full.css",revision:"42c21a2f89cb796e8af269cc1faf138b"},{url:"db.js",revision:"475cf33e65405a31c06ae164ad507673"},{url:"favicon.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"img/eulogo.png",revision:"bb132dafc02c69ebf51675a25f1074ac"},{url:"img/eulogobig.png",revision:"b8555bfa4a4b08de91aeca218cc183b0"},{url:"index.html",revision:"3001a7b666ff55214c97f6add92094fa"},{url:"json/all_jwk_keys.json",revision:"f5ccc5f73d6df4ad4ad585d87ad90812"},{url:"json/all_jwk_keys.json.proxy.js",revision:"76afa55d77956337660b4c7e38c36c41"},{url:"json/pre_jwk_keys.json",revision:"9e6a7a20602bd224993e0583e76e78f1"},{url:"json/pre_jwk_keys.json.proxy.js",revision:"65c1a4b3a745b81baab5f6381f278be4"},{url:"json/uk_jwk_keys.json",revision:"2d04a0f6b054f25549b3f1f19960ceb9"},{url:"json/uk_jwk_keys.json.proxy.js",revision:"df88e13eeefa4a6032a773d20bc2883e"},{url:"json/value-sets.json",revision:"398ad7d2f5148d7592ffed6b54638002"},{url:"json/value-sets.json.proxy.js",revision:"f262910e03945cd33e1d6681bb080cae"},{url:"log.js",revision:"80ae9423d317473798d1ff53f8fdd4b1"},{url:"pages/abstractpage.js",revision:"1d55912fce51606d3da2404865d48f15"},{url:"pages/demo.js",revision:"87939777743a5c888b011b14277fe07e"},{url:"pages/hcertpage.js",revision:"1dcbac89ba0819499f6af4f5bb8baee3"},{url:"pages/page404.js",revision:"abaea0b1bd1f5bda51e95afa04d00889"},{url:"pages/scanqr.js",revision:"d6efc151de5e0ad10472f5a0af193d65"},{url:"router.js",revision:"c6cccea07fab677f4cc07c81a92928de"},{url:"VERSION.txt",revision:"d4e3df3ec4d96a39d03ecd6dc3782031"}],{})}));
//# sourceMappingURL=sw.js.map
