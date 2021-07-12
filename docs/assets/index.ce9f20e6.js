var e=Object.defineProperty,o=(o,t,r)=>(((o,t,r)=>{t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r})(o,"symbol"!=typeof t?t+"":t,r),r);import{D as t,i as r,h as a,T as i,V as n}from"./vendor.5289922a.js";const l=new t("SafeIslandNew");l.version(.5).stores({credentials:"hash, timestamp, type",settings:"key",logs:"++id, timestamp"});async function d(e,o,t){var r={timestamp:Date.now(),level:e,desc:o,item:t};try{await l.logs.add(r)}catch(i){console.error("Error in log add")}if(!(await l.logs.count()<=1e3)){var a=await l.logs.orderBy("id").first();try{await l.logs.delete(a.id)}catch(i){console.error("Error in log prune")}}}async function w(e){var o=Array.prototype.slice.call(arguments,1);console.error(e,o),d("E",e,o)}async function p(e,o){try{await l.settings.put({key:e,value:o})}catch(t){console.error(t),alert("Error in put setting")}}var c={hide:function(e){c.hideElements(c.getElements(e))},hideElements:function(e){var o,t=e.length;for(o=0;o<t;o++)c.hideElement(e[o])},hideElement:function(e){c.styleElement(e,"display","none")},show:function(e,o){var t=c.getElements(e);o&&c.hideElements(t),c.showElements(t)},showElements:function(e){var o,t=e.length;for(o=0;o<t;o++)c.showElement(e[o])},showElement:function(e){c.styleElement(e,"display","block")},addStyle:function(e,o,t){c.styleElements(c.getElements(e),o,t)},styleElements:function(e,o,t){var r,a=e.length;for(r=0;r<a;r++)c.styleElement(e[r],o,t)},styleElement:function(e,o,t){e.style.setProperty(o,t)},toggleShow:function(e){var o,t=c.getElements(e),r=t.length;for(o=0;o<r;o++)"none"==t[o].style.display?c.styleElement(t[o],"display","block"):c.styleElement(t[o],"display","none")},addClass:function(e,o){c.addClassElements(c.getElements(e),o)},addClassElements:function(e,o){var t,r=e.length;for(t=0;t<r;t++)c.addClassElement(e[t],o)},addClassElement:function(e,o){var t,r,a;for(r=e.className.split(" "),a=o.split(" "),t=0;t<a.length;t++)-1==r.indexOf(a[t])&&(e.className+=" "+a[t])},removeClass:function(e,o){c.removeClassElements(c.getElements(e),o)},removeClassElements:function(e,o){var t,r=e.length;for(t=0;t<r;t++)c.removeClassElement(e[t],o)},removeClassElement:function(e,o){var t,r,a;for(r=e.className.split(" "),a=o.split(" "),t=0;t<a.length;t++)for(;r.indexOf(a[t])>-1;)r.splice(r.indexOf(a[t]),1);e.className=r.join(" ")},toggleClass:function(e,o,t){c.toggleClassElements(c.getElements(e),o,t)},toggleClassElements:function(e,o,t){var r,a=e.length;for(r=0;r<a;r++)c.toggleClassElement(e[r],o,t)},toggleClassElement:function(e,o,t){var r,a,i,n,l,d,w;if(a=t||"",i=(r=o||"").split(" "),n=a.split(" "),d=e.className.split(" "),0==n.length){for(w=!0,l=0;l<i.length;l++)-1==d.indexOf(i[l])&&(w=!1);w?c.removeClassElement(e,r):c.addClassElement(e,r)}else{for(w=!0,l=0;l<i.length;l++)-1==d.indexOf(i[l])&&(w=!1);w?(c.removeClassElement(e,r),c.addClassElement(e,a)):(c.removeClassElement(e,a),c.addClassElement(e,r))}},getElements:function(e){return"object"==typeof e?[e]:document.querySelectorAll(e)},filterHTML:function(e,o,t){var r,a,i,n,l,d,w;for(r=c.getElements(e),n=0;n<r.length;n++)for(a=r[n].querySelectorAll(o),l=0;l<a.length;l++){for(w=0,a[l].innerText.toUpperCase().indexOf(t.toUpperCase())>-1&&(w=1),i=a[l].getElementsByTagName("*"),d=0;d<i.length;d++)i[d].innerText.toUpperCase().indexOf(t.toUpperCase())>-1&&(w=1);a[l].style.display=1==w?"":"none"}},sortHTML:function(e,o,t){var r,a,i,n,l,d,w,p,s,h;for(r=c.getElements(e),i=0;i<r.length;i++)for(h=0;h<2;h++){for(s=0,l=1;1==l;){for(l=0,a=r[i].querySelectorAll(o),n=0;n<a.length-1;n++)if(d=0,t?(w=a[n].querySelector(t).innerText,p=a[n+1].querySelector(t).innerText):(w=a[n].innerText,p=a[n+1].innerText),w=w.toLowerCase(),p=p.toLowerCase(),0==h&&w>p||1==h&&w<p){d=1;break}1==d&&(a[n].parentNode.insertBefore(a[n+1],a[n]),l=1,s++)}if(s>0)break}},slideshow:function(e,o,t){var r,a=c.getElements(e);return a.length,(r={}).current=1,r.x=a,r.ondisplaychange=t,isNaN(o)&&0!=o?r.milliseconds=1e3:r.milliseconds=o,r.start=function(){r.display(r.current),r.ondisplaychange&&r.ondisplaychange(),r.milliseconds>0&&(window.clearTimeout(r.timeout),r.timeout=window.setTimeout(r.next,r.milliseconds))},r.next=function(){r.current+=1,r.current>r.x.length&&(r.current=1),r.start()},r.previous=function(){r.current-=1,r.current<1&&(r.current=r.x.length),r.start()},r.display=function(e){c.styleElements(r.x,"display","none"),c.styleElement(r.x[e-1],"display","block")},r.start(),r},includeHTML:function(e){var o,t,r,a,i;for(o=document.getElementsByTagName("*"),t=0;t<o.length;t++)if(a=(r=o[t]).getAttribute("w3-include-html"))return(i=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(r.innerHTML=this.responseText),404==this.status&&(r.innerHTML="Page not found."),r.removeAttribute("w3-include-html"),c.includeHTML(e))},i.open("GET",a,!0),void i.send();e&&e()},getHttpData:function(e,o){c.http(e,(function(){4==this.readyState&&200==this.status&&o(this.responseText)}))},getHttpObject:function(e,o){c.http(e,(function(){4==this.readyState&&200==this.status&&o(JSON.parse(this.responseText))}))},displayHttp:function(e,o){c.http(o,(function(){4==this.readyState&&200==this.status&&c.displayObject(e,JSON.parse(this.responseText))}))},http:function(e,o,t,r){var a;r||(r="GET"),window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),a&&(o&&(a.onreadystatechange=o),a.open(r,e,!0),a.send(t))},getElementsByAttribute:function(e,o){var t,r,a=[],i=-1,n=e.getElementsByTagName("*"),l=o.toUpperCase();for(r=n.length,t=-1;t<r;t+=1)-1==t&&(n[t]=e),null!==n[t].getAttribute(l)&&(a[i+=1]=n[t]);return a},dataObject:{},displayObject:function(e,o){var t,r,a,i,n,l,d,w,p,s,h,m=[],g="";for(r=function(e,o){var t;if(t=o.cloneNode(!0),c.dataObject.hasOwnProperty(e))return c.dataObject[e];return c.dataObject[e]=t,t}(e,t=document.getElementById(e)).cloneNode(!0),l=(m=c.getElementsByAttribute(r,"w3-repeat")).length-1;l>=0;l-=1)if(1==(p=m[l].getAttribute("w3-repeat").split(" ")).length?s=p[0]:(g=p[0],s=p[2]),m[l].removeAttribute("w3-repeat"),(h=o[s])&&"object"==typeof h&&"undefined"!=h.length)for(n in d=0,h){for(d+=1,a=(i=b(i=m[l],"element",g,h[n])).attributes,w=0;w<a.length;w+=1)a[w].value=b(a[w],"attribute",g,h[n]).value;d===h.length?m[l].parentNode.replaceChild(i,m[l]):m[l].parentNode.insertBefore(i,m[l])}else console.log("w3-repeat must be an array. "+s+" is not an array.");function b(e,t,r,a){var i,n,l,d,w,p,c,s,h,m=[];for(n=e.cloneNode(!0),l=0;l>-1&&-1!==(l=(w="attribute"==t?n.value:n.innerHTML).indexOf("{{",l));){for(d=w.indexOf("}}",l+1),m=(p=w.substring(l+2,d)).split("||"),i=void 0,c=0;c<m.length&&(m[c]=m[c].replace(/^\s+|\s+$/gm,""),a&&(i=a[m[c]]),null==i&&o&&(i=o[m[c]]),null==i&&(s=m[c].split("."))[0]==r&&(i=a[s[1]]),null==i&&m[c]==r&&(i=a),null==i&&('"'==m[c].substr(0,1)?i=m[c].replace(/"/g,""):"'"==m[c].substr(0,1)&&(i=m[c].replace(/'/g,""))),null==i);c+=1);null!=i&&(h="{{"+p+"}}","attribute"==t?n.value=n.value.replace(h,i):f(n,h,i)),l+=1}return n}function f(e,o,t){var r,a,i;if(e.hasAttributes())for(a=(r=e.attributes).length,i=0;i<a;i+=1)r[i].value.indexOf(o)>-1&&(r[i].value=r[i].value.replace(o,t));a=e.getElementsByTagName("*").length,e.innerHTML=e.innerHTML.replace(o,t)}r=b(r,"element"),t.parentNode.replaceChild(r,t)}},s=new Map,h=window.location.search,m=new URLSearchParams(h),g="#demo";null!==m.get("home")?g="#credentialListPage":null!==m.get("verifier")?g="#verifierScanQR":null!==m.get("demo")?g="#demo":null!==m.get("admin")?g="#admin":null!==m.get("pubcred")&&(g="#pubcreds");async function b(e,o){for(let[t,r]of s)r.style.display="none";c.hide("#loaderpage"),void 0===s.get(e)&&(e=g),window.scrollTo(0,0),s.get(e).style.display="block",await s.get(e).enter(o)}async function f(){await u(g)}async function u(e,o){void 0!==s.get(e)?(window.history.pushState({pageName:e,pageData:o},`${e}`),await b(e,o)):w("Target page does not exist: ",e)}window.addEventListener("popstate",(async function(e){var o=g,t=void 0,r=e.state;null!=r&&(o=r.pageName,t=r.pageData),console.log("Popstate: ",o),await b(o,t)}));var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",pages:s,get homePage(){return g},globalStream:void 0,stopAllMediaTracks:function(){},processPageEntered:b,goHome:f,gotoPage:u});const x=r`
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.w3-serif{font-family:serif}.w3-sans-serif{font-family:sans-serif}.w3-cursive{font-family:cursive}.w3-monospace{font-family:monospace}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}
.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}
.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}
.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}
.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}
.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}
.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}
.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}
.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   
.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}
.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}
.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}
.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}
.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}
.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}
.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}
.w3-dropdown-hover:hover .w3-dropdown-content{display:block}
.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}
.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}
.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}
.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}
.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}
.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}
.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}
.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
.w3-main,#main{transition:margin-left .4s}
.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}
.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}
.w3-bar .w3-button{white-space:normal}
.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}
.w3-responsive{display:block;overflow-x:auto}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}
.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}
.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}
.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}
@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}
.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}
.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}
@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}
.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}
.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}
.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}
.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}
.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}
.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}
.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}
@media (max-width:1205px){.w3-auto{max-width:95%}}
@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}
.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}	
.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}
.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}
@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}
@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}
@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}
@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}
.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}
.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}
.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}
.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}
.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}
.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}
.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-position{position:absolute}
.w3-circle{border-radius:50%}
.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}
.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}
.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}
.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}
.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}
.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}
.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}
.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}
.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}
.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}
.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}
.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}
.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}
.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}
.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}
.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}
.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}
.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}
.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}
.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}
.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}
.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}
.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}
.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}
.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}
.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}
.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}
.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}
.w3-padding-top-64{padding-top:64px!important}.w3-padding-top-48{padding-top:48px!important}
.w3-padding-top-32{padding-top:32px!important}.w3-padding-top-24{padding-top:24px!important}
.w3-left{float:left!important}.w3-right{float:right!important}
.w3-button:hover{color:#000!important;background-color:#ccc!important}
.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}
.w3-hover-none:hover{box-shadow:none!important}
/* Colors */
.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}
.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}
.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}
.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}
.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}
.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}
.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}
.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}
.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}
.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}
.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}
.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}
.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}
.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}
.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}
.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}
.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}
.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}
.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}
.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}
.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}
.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}
.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}
.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}
.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}
.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}
.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}
.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}
.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}
.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}
.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}
.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}
.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}
.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}
.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}
.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}
.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}
.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}
.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}
.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}
.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}
.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}
.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}
.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}
.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}
.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}
.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}
.w3-text-black,.w3-hover-text-black:hover{color:#000!important}
.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}
.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}
.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}
.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}
.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}
.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}
.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}
.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}
.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}
.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}
.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}
.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}
.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}
.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}
.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}
.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}
.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}
.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}
.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}
.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}
.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}
.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}
.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}
.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}
.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}
.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}
.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}
.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}
.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}
.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}
.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}
`;class y extends a{constructor(){console.log("Inside constructor of HEADERBAR"),super()}render(){return i`
        <div class="w3-bar w3-xlarge w3-indigo">
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">SafeIsland</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo w3-hide-small">Link 3</a>
          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-indigo w3-right w3-hide-large w3-hide-medium" @click=${this.toggleView}>&#9776;</a>
        </div>
        
        <div id="vertMenu" class="w3-bar-block w3-indigo w3-hide w3-hide-large w3-hide-medium">
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-indigo">Link 3</a>
        </div>
        `}toggleView(){this.getRootNode().querySelector("#vertMenu").classList.toggle("w3-show")}}o(y,"styles",[x]),customElements.define("header-bar",y);class k extends a{constructor(e="default"){console.log("Inside constructor of JRMPAGE"),super(),this.pageName=e,s.set("#"+e,this)}pageTemplate(e){return i`
        <div id="${this.pageName}" class="jrmpage w3-container">
            ${e}
        </div>
        `}enter(){console.log("Enter page"),this.requestUpdate()}}o(k,"styles",[x]);customElements.define("demo-page",class extends k{constructor(){console.log("Inside constructor of DEMO PAGE"),super("demo")}render(){return this.pageTemplate(i`
            <!-- =========================================== -->
            <!-- HOME PAGE for demos. It has several roles   -->
            <!-- and the user can choose                     -->
            <!-- =========================================== -->
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.goHome()">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#verifier')">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#issuerHome')">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#pubcreds')">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </a>
            </div>
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.gotoPage('#admin')">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </a>
            </div>
            `)}enter(){console.log("Enter page DEMO"),this.requestUpdate()}});customElements.define("verifier-page",class extends k{constructor(){console.log("Inside constructor of VERIFIER PAGE"),super("verifier")}render(){return this.pageTemplate(i`
            <!-- =========================================== -->
            <!-- HOME PAGE for demos. It has several roles   -->
            <!-- and the user can choose                     -->
            <!-- =========================================== -->
            
            <div class="w3-panel w3-card-4">
                <a onclick="r.goHome()">
                    <h3>Inside verifier</h3>
                    <p>Receive or show your test results</p>
                </a>
            </div>
            `)}});let E=document.createElement("div");document.body.append(E),n(i`
<header-bar></header-bar>
<demo-page></demo-page>
<verifier-page></verifier-page>
`,E);const C="https://safeislandtest.hesusruiz.org";window.addEventListener("load",(async e=>{await async function(){if(console.log("Performing OneTime Initialization"),1!=await async function(e){try{var o=await l.settings.get(e)}catch(t){console.error(t),alert("Error in get setting")}if(null!=o)return o.value}("initialized")){try{await p("apiHost",C)}catch(e){w("Onetime initialization error")}await p("initialized",!0)}}();let o=window.location.search,t=new URLSearchParams(o),r=t.get("id");if(r){var a="https://api.lanzarotesafe.org/sms/"+r;await requestQRAndDisplay(a,"#displayCredentialPage","fromPassengerScan")}else{if(r=t.get("pubid"),r){a="https://safeislandtest.hesusruiz.org/api/verifiable-credential/v1/public/"+r;return console.log("Public Credential",a),void(await requestQRAndDisplay(a,"#displayCredentialPage","fromPassengerScan"))}await f()}})),window.r=v;
