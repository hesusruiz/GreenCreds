if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-2699fb14"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_snowpack/pkg/@zxing/library.js",revision:"5b82e37f32130feacb65597eadb6228d"},{url:"_snowpack/pkg/import-map.json",revision:"258017f99fe00787d5adcbb9b6d8937e"},{url:"_snowpack/pkg/lit-html.js",revision:"d929a393bf59ca631ed04e139d4e2061"},{url:"_snowpack/pkg/pako.js",revision:"38dda4b58cf1a97e96cbe8ea640c7b6c"},{url:"_snowpack/pkg/workbox-window.js",revision:"391f93f13e3580747ba1fe7648210d7e"},{url:"app.js",revision:"8c57aaa02cef9055309d906d69337ed4"},{url:"components/cwt.js",revision:"df4d2b8f41dec6d00aa7e737e3a6ddcb"},{url:"components/header.js",revision:"dd92b68cc65a54c3e99efaf0301fb7ba"},{url:"css/w3full.css",revision:"fcae785936124554903c7bc632dbdeaa"},{url:"favicon.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"i18n/flags/ca.png",revision:"e0f3e47e6233cb28716c7901ba47242c"},{url:"i18n/flags/es.png",revision:"5e57447d2271a3058de9af974628fde2"},{url:"i18n/flags/uk.png",revision:"b7273ff4ec7562e011423eea41a8de10"},{url:"i18n/ii8.js",revision:"a886c0b35d007faf47dc9ef69cde2268"},{url:"i18n/translations.json",revision:"464c0aa81a81dbd55edf3a727d83ae43"},{url:"i18n/translations.json.proxy.js",revision:"84628c466c50efe994cbb8d6ab06717a"},{url:"img/eulogo.png",revision:"bb132dafc02c69ebf51675a25f1074ac"},{url:"img/evidenceLogo60.png",revision:"a4455aa59546ee653049b2d27d36a01f"},{url:"img/icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"img/icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"img/icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"30c1e9ac225be30c4fb2bf6caeab5364"},{url:"json/all_jwk_keys.json.proxy.js",revision:"76afa55d77956337660b4c7e38c36c41"},{url:"json/pre_jwk_keys.json.proxy.js",revision:"65c1a4b3a745b81baab5f6381f278be4"},{url:"json/uk_jwk_keys.json.proxy.js",revision:"df88e13eeefa4a6032a773d20bc2883e"},{url:"json/value-sets.json.proxy.js",revision:"f262910e03945cd33e1d6681bb080cae"},{url:"log.js",revision:"7bde0551a711dff8a9655d4768c296f5"},{url:"manifest.json",revision:"c94f40eff93ac226f452d3248055e450"},{url:"pages/abstractpage.js",revision:"1d55912fce51606d3da2404865d48f15"},{url:"pages/demo.js",revision:"87939777743a5c888b011b14277fe07e"},{url:"pages/displayNormalQR.js",revision:"108609414f5dc95c7e7e68e09a2d8c2b"},{url:"pages/hcertpage.js",revision:"d10258b42587da007e149bc503da755c"},{url:"pages/intro.js",revision:"bd5d28cb872996983b012c740cdaccc9"},{url:"pages/page404.js",revision:"abaea0b1bd1f5bda51e95afa04d00889"},{url:"pages/scanqr.js",revision:"332beb4944507ce24f2445c93c1513e3"},{url:"pages/spinner.js",revision:"913efd70bddd32197de55e320d0d9e8b"},{url:"pages/swnotify.js",revision:"63816b3e78247b024080d7c1ed6c86f5"},{url:"router.js",revision:"c6cccea07fab677f4cc07c81a92928de"},{url:"VERSION.txt",revision:"b982c1d680be788b61c9c9c673b1d84b"}],{})}));
//# sourceMappingURL=sw.js.map
