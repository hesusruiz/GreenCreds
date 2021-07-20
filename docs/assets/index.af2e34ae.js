var e=Object.defineProperty,i=(i,t,s)=>(((i,t,s)=>{t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s})(i,"symbol"!=typeof t?t+"":t,s),s);import{D as t,i as s,h as o,T as a,a as r,V as n,B as d,N as c}from"./vendor.ab1fcd32.js";class l extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,l),this.name="Warning"}}async function v(e,i,...t){var s={timestamp:Date.now(),level:e,desc:i};t.length>0&&(s.more=t);try{await g.logs.add(s)}catch(a){console.error("Error in log add")}if(!(await g.logs.count()<=1e3)){var o=await g.logs.orderBy("id").first();try{await g.logs.delete(o.id)}catch(a){console.error("Error in log prune")}}}var p={mywarn:async function(e,...i){{let t=e;try{t=new l(e).stack}catch{}console.warn(e,...i),v("W",t,...i)}},myerror:async function(e,...i){let t=e;try{t=new Error(e).stack}catch{}console.error(t,...i),v("E",t,...i)},recentLogs:async function(){return await g.logs.reverse().limit(200).toArray()},clearLogs:async function(){await g.logs.clear(),alert("Logs cleared"),location.reload()}};const g=new t("SafeIslandNew");async function u(e,i){try{await g.settings.put({key:e,value:i})}catch(t){console.error(t),alert("Error in put setting")}}g.version(.5).stores({credentials:"hash, timestamp, type",settings:"key",logs:"++id, timestamp"});const y=s`
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
`;class m extends o{constructor(){console.log("Inside constructor of HEADERBAR"),super()}render(){return a`
        <div class="w3-bar w3-xlarge w3-indigo">
          <div class="w3-bar-item" @click=${j}>SafeIsland</div>
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
        `}toggleView(e){this.renderRoot.querySelector("#vertMenu").classList.toggle("w3-show")}}i(m,"styles",[y]),customElements.define("header-bar",m);var w={"0L7AaIwu+EY=":{co:"DE",kid:"0L7AaIwu+EY=",jwk:{kty:"EC","x5t#S256":"0L7AaIwu-EbkrTSIRA5WLXt7ylS-tCXSLfXKTu-wMH4",use:"sig",crv:"P-256",kid:"0L7AaIwu+EY=",x:"UdPPsk9xzY1vM1zdjgvHDsRCST55Y9SJBJUXI5uqGb4",y:"nJKU-8UBRm5vlhkLhSfRNMN2csqm_T_27DCUJiZK6ZI"}},"1+da8dKEjlE=":{co:"DE",kid:"1+da8dKEjlE=",jwk:{kty:"EC","x5t#S256":"1-da8dKEjlG3e33N-3hzXGwTVPpwtE6ZO-0MR6W3XLY",use:"sig",crv:"P-256",kid:"1+da8dKEjlE=",x:"qD56CIMWer5HDRhCpUrq5lZ6F8WrFPy_IDwjgb44oE0",y:"gRC5NcQW4178-5Ej6X946ePMDyO1li3Mf1eStQOqGzQ"}},"2BGoyFIyYPs=":{co:"DE",kid:"2BGoyFIyYPs=",jwk:{kty:"EC","x5t#S256":"2BGoyFIyYPvvSNrVQKxtVzAxLVXJJcAvsrb-bgk45kg",use:"sig",crv:"P-256",kid:"2BGoyFIyYPs=",x:"tGEETBc2arnjxxBWO3aDW-rwFgwmhqPbxhaUuOEC6kk",y:"Hdxj4ZlzxWCrZhTOCEA49Qn6rtmyB2ukahfbhDG7ccE"}},"2JelGO/ymxQ=":{co:"DE",kid:"2JelGO/ymxQ=",jwk:{kty:"EC","x5t#S256":"2JelGO_ymxTkn_NAT7T9ump9DpveX44uzauJdlTvNUM",use:"sig",crv:"P-256",kid:"2JelGO/ymxQ=",x:"eL12fn7-nUNW-9T9zJLaiZF18rfzL1I735fT-3zuKrw",y:"kdytqDCDAQxW66y1b2t1HjhGWs_rFMFClhzINh4ELbY"}},"3LCRmucB9kU=":{co:"DE",kid:"3LCRmucB9kU=",jwk:{kty:"EC","x5t#S256":"3LCRmucB9kXIskHtE2CqQuz82j7x1mtN60qYFeJN2Tg",use:"sig",crv:"P-256",kid:"3LCRmucB9kU=",x:"tgz2ifmTj_vZbBaz6xlNCdQlw4FQU7v3dUrJYQEigk4",y:"C8_HWNXN6Rs2Dt90464Df0J_sh2mDB5evtOhpOwLlus"}},"3jqajzfHpKE=":{co:"DE",kid:"3jqajzfHpKE=",jwk:{kty:"EC","x5t#S256":"3jqajzfHpKHtVFGoUOJWH-tzuACc061HQ4vH5bBhomE",use:"sig",crv:"P-256",kid:"3jqajzfHpKE=",x:"8nZrLqMlw5EvdfvJXgxb2rXj9OBT2UWBqAFLeCoQXuY",y:"PmDmSaVLS-MBUBzBj278qFr73H1ra892Vx8GmooEBvw"}},"3lrBUHc4iQE=":{co:"DE",kid:"3lrBUHc4iQE=",jwk:{kty:"EC","x5t#S256":"3lrBUHc4iQFFT4ijNwQ0XQ3JBXYGflkGmvw8IPBqCqE",use:"sig",crv:"P-256",kid:"3lrBUHc4iQE=",x:"71N2pH6YyC6gfUHwiEJDzIxwMIW_Hs-Cgn_gPQbZAkE",y:"XMl_y0xNo9oGQ_IS7OeUxK00yqJLx5KxDlrR2JCA4ck"}},"3oYtiEZ9wp4=":{co:"DE",kid:"3oYtiEZ9wp4=",jwk:{kty:"EC","x5t#S256":"3oYtiEZ9wp7-LJlqmCoXomD__1zifwmgzNUYOy4DrH0",use:"sig",crv:"P-256",kid:"3oYtiEZ9wp4=",x:"5sqOpW4x66Hmcposox406LFRWyGIvH2CA-Di7pgvWYI",y:"CS1-7KExN-mCsed7z2EVISrc3sSe5yPdDLQpYOjbEwM"}},"5xtSr6KkAGA=":{co:"DE",kid:"5xtSr6KkAGA=",jwk:{kty:"EC","x5t#S256":"5xtSr6KkAGCKZUV0K9U2AYQPgxpC8Tfgkpum3cs7vxg",use:"sig",crv:"P-256",kid:"5xtSr6KkAGA=",x:"zma5iz5ZBIh1KDZhj9fSnqJoKK9weOGB_91w6FpdAUg",y:"xRChg6YY_zHRkX1a6P4Esh0YaWkIIWSV0QxAjrkgM6k"}},"6FNkACSMLEc=":{co:"DE",kid:"6FNkACSMLEc=",jwk:{kty:"EC","x5t#S256":"6FNkACSMLEcjKozFVKIjAQ7G0cCj3LxgjtX_hEnNmQc",use:"sig",crv:"P-256",kid:"6FNkACSMLEc=",x:"8xghqNrE21susvTQHV9fwN3RWhBIdCYBu3laCz66Nas",y:"Ksqrk-OzyV7jon0lIjWNv6jsg7rtAHvDCiB3lJjecHQ"}},"6VdOPLF8/Fg=":{co:"DE",kid:"6VdOPLF8/Fg=",jwk:{kty:"EC","x5t#S256":"6VdOPLF8_Fh3xVqjvoX56hVYN3YXa7WtPE0A5S9-ibI",use:"sig",crv:"P-256",kid:"6VdOPLF8/Fg=",x:"HrXK9pJSpMrEB4xUrXTTnb7RakIRzDtNh6ugnjfV510",y:"zRbLuayqKSWGAzpPwX8uTMjboOpw95EklFMucnj64Jg"}},"7XLhQx1KXdQ=":{co:"DE",kid:"7XLhQx1KXdQ=",jwk:{kty:"EC","x5t#S256":"7XLhQx1KXdTDHuhabTJrmpuyrTe1wyGo7BUYX-nTCVA",use:"sig",crv:"P-256",kid:"7XLhQx1KXdQ=",x:"kkxNdS0EZvjP8j17j2k92vHZpX3qSNMDbCqBYPvmqzg",y:"9Y5zRKrAGUqfLqacKEoYJkD3VEpguY70miND4iEVCYY"}},"8AnF/hcilSo=":{co:"DE",kid:"8AnF/hcilSo=",jwk:{kty:"EC","x5t#S256":"8AnF_hcilSrBZdnzWKGe0JqqYbbN_fBXjLDJUrGhb48",use:"sig",crv:"P-256",kid:"8AnF/hcilSo=",x:"Ol2NFM-2gkakrrAa7g-F7KOXRziS4ydbxiNbm3XTu-I",y:"_Sz_qEijCzniTgXIyQN0aq6gIln6DK4lhndC0WDOk1k"}},"9IZVOkJRZPQ=":{co:"DE",kid:"9IZVOkJRZPQ=",jwk:{kty:"EC","x5t#S256":"9IZVOkJRZPQlcH_i8mu2ajp4NFhgQ35P4zUfZxac8W0",use:"sig",crv:"P-256",kid:"9IZVOkJRZPQ=",x:"65QJlG4NQ1UKM3_5Yf6n9u430S0gtEarOF4e-WrILwU",y:"GppLDtsyX0oAMFyVdmc83pzUZpdYhX33X-Fe8sc4C1M"}},"9v3FozjKAUo=":{co:"DE",kid:"9v3FozjKAUo=",jwk:{kty:"EC","x5t#S256":"9v3FozjKAUqiedlFvFFydFBz-_VipHqOFZO__LkTZk4",use:"sig",crv:"P-256",kid:"9v3FozjKAUo=",x:"zIzHRqk76vDGIUAj3dIo3UVev41tak5P5oxO-zaOlsI",y:"p8VDW6PcqiHKTqO7LSPFi64n-EUWomaENLb2oUhx9os"}},"AQCGDydsS1Q=":{co:"DE",kid:"AQCGDydsS1Q=",jwk:{kty:"EC","x5t#S256":"AQCGDydsS1SrTLpOO4BoDq4Bkkp4MzKODdwPiXVRH58",use:"sig",crv:"P-256",kid:"AQCGDydsS1Q=",x:"M7zYPRk1r4viA_oG6BxLec1shhb0JoDGjLAUuPxmGSM",y:"MPmgkGVHGOTLVKp1Q98f_5L4rhWQ7pn-uYtFdaOxrHs"}},"CvktK3hdjeY=":{co:"DE",kid:"CvktK3hdjeY=",jwk:{kty:"EC","x5t#S256":"CvktK3hdjebD5OXrksqfmu5lko49q3X8_0-SzucpccE",use:"sig",crv:"P-256",kid:"CvktK3hdjeY=",x:"uCgNX5VUmp7_lN7_UDF5kRDz7qvWnpgFOKwv1AxJXbQ",y:"r8CY-QAzj_cBgLKHKEibT69y2425qgKp3a4K9_N9frY"}},"DusseXrzqO8=":{co:"DE",kid:"DusseXrzqO8=",jwk:{kty:"EC","x5t#S256":"DusseXrzqO84DsUlO-upPN6-Rgnup9BpT31nHd771rw",use:"sig",crv:"P-256",kid:"DusseXrzqO8=",x:"xfciFuh1jL3LBPzaNAVmmVTL87eJ6wVctSg393nUcXw",y:"VS9b-bwoKeo1pUXSYJVSY_I0RtE3xdzi4w1BwD59qwM"}},"IZftFLRmKGY=":{co:"DE",kid:"IZftFLRmKGY=",jwk:{kty:"EC","x5t#S256":"IZftFLRmKGZivlPYjwzMZvLYCIne8epGsiBrUiXDRGM",use:"sig",crv:"P-256",kid:"IZftFLRmKGY=",x:"yxW76RQrbDUSOEHxYksWk5CaGGygxDJJ7A9jRiop-Fk",y:"acJj0XhU5iTVUTAoxOesystaMXYuClwhyP8iSLsOM1s"}},"L7XIA2gi2ps=":{co:"DE",kid:"L7XIA2gi2ps=",jwk:{kty:"EC","x5t#S256":"L7XIA2gi2ptXxahyfyOWtEHjbMlLN4Ij_XEM-Uj5Z7Y",use:"sig",crv:"P-256",kid:"L7XIA2gi2ps=",x:"orGGRfEic2GL5o9XnITdq3nd9d7pWDvy6waSkDMI630",y:"_sLwpbkgVd61kf0JC9xXX6XC9hTglmgEef7FzooaX68"}},"M8bcnysCMj4=":{co:"DE",kid:"M8bcnysCMj4=",jwk:{kty:"EC","x5t#S256":"M8bcnysCMj6GRnB8f2wQAW2eGX2NJFnHZHLwV_ZzdPQ",use:"sig",crv:"P-256",kid:"M8bcnysCMj4=",x:"qXPIlxahww0kgegwTgRNQWpChqH2PfXelyd1D77uo8c",y:"ctPLZQ4bBO86cs1l32U1ADMT7YMPiU6omi9RULb3ZMg"}},"MxhfdcoHinc=":{co:"DE",kid:"MxhfdcoHinc=",jwk:{kty:"EC","x5t#S256":"MxhfdcoHiner068ldBnuRylgVUMKNrXnx58fGyxqUPE",use:"sig",crv:"P-256",kid:"MxhfdcoHinc=",x:"KPuGAJsDLPU7vw4aDg52nFxuxz3AsJtWUmtsY7tQegw",y:"AlX5ZfnubECbusuQmZzg_oCnTCn547ge9fc_7RfagfY"}},"NCdyt3s+cak=":{co:"DE",kid:"NCdyt3s+cak=",jwk:{kty:"EC","x5t#S256":"NCdyt3s-cakVp9DHZFZRcrCgZ2K_ZXME1fbQVwnFEQg",use:"sig",crv:"P-256",kid:"NCdyt3s+cak=",x:"szk-l0BVoDOXZg5SKeeNbLUAggqLKB2a3NlMXWfxfdc",y:"HR7D6qpSlnBU2Qcw9_5CMsSYua5cZNVJNibBTRG47e8"}},"OKpEjMo/2MY=":{co:"DE",kid:"OKpEjMo/2MY=",jwk:{kty:"EC","x5t#S256":"OKpEjMo_2Mb-DavBfrmMZdjHQuDUv10q0KSwqDCFhSg",use:"sig",crv:"P-256",kid:"OKpEjMo/2MY=",x:"UCSPQOg4hIgEJzD2PHFjccnQzSQIvYs-gbBuJqHxv7s",y:"QgBKchI-VyH443zIzcQPrKPgHWchH8LM4Sq9gNf51Uk"}},"R7q7yd90ZPU=":{co:"DE",kid:"R7q7yd90ZPU=",jwk:{kty:"EC","x5t#S256":"R7q7yd90ZPUuLc9kHTVh8zzVx9aCfIAv5k2i-6rlx8s",use:"sig",crv:"P-256",kid:"R7q7yd90ZPU=",x:"_eGWuKcNV_od7Eh4EJuiqBPv-0yP4q-qzhOlNFdkzus",y:"lsupfoYY1R8XX8aeFw1bzlFdg_cH3_Nf7TXwbnOKQpg"}},"TGjTR+Re+yk=":{co:"DE",kid:"TGjTR+Re+yk=",jwk:{kty:"EC","x5t#S256":"TGjTR-Re-ylVtGGlp2kxyH-dzipfuMVRxauV7VAGkVg",use:"sig",crv:"P-256",kid:"TGjTR+Re+yk=",x:"h4UMl8PsQUsu36Hq7xK-dyGWGrELxsfzVOny20ZnkHg",y:"cgWMQVCBqBxGJe9G6c4xQSTeFixrYpWQ_9Gi1hP_spM"}},"TpQIkAHAym4=":{co:"DE",kid:"TpQIkAHAym4=",jwk:{kty:"EC","x5t#S256":"TpQIkAHAym6d8Ydd8vJXs1olxVD1hxo1c2OO8yx4qpY",use:"sig",crv:"P-256",kid:"TpQIkAHAym4=",x:"s77Dr92zb-HOBL9gdfCWOwkna-9D3Kdq0HgUqpVByi4",y:"5KspETwBSj2QQO-9asqActLhxYXWCMzQD83R4-yqz7A"}},"Uj77p+qIQNs=":{co:"DE",kid:"Uj77p+qIQNs=",jwk:{kty:"EC","x5t#S256":"Uj77p-qIQNu6AVowa4D5pty5y_tgjNbdxJ-xvOdkiic",use:"sig",crv:"P-256",kid:"Uj77p+qIQNs=",x:"opaKkUUE4nCgNpRBE9ugmShuJd907aOocVvFvxPLxiI",y:"eaqkNqavxlbKuVX_9Ff29Vd6wKCjvGzL8T-I5E1k8ak"}},"XkVWZqUeeFc=":{co:"DE",kid:"XkVWZqUeeFc=",jwk:{kty:"EC","x5t#S256":"XkVWZqUeeFc0suP6qTJGG-C723_K_z2geLisE5wmluI",use:"sig",crv:"P-256",kid:"XkVWZqUeeFc=",x:"h934IiMCsXp977pDeG7Wi11S-uGGoem6nSNbtCILcSQ",y:"-PvxahpSzgSbyGT0od4Ux8dle1fty86oukdnWoTp6P4"}},"XuCERkHu8kY=":{co:"DE",kid:"XuCERkHu8kY=",jwk:{kty:"EC","x5t#S256":"XuCERkHu8kYEmcX5BsPTeizGD9m6v8WAeVrRNXGUiMM",use:"sig",crv:"P-256",kid:"XuCERkHu8kY=",x:"yV_EBSORniEE7SMMNmvSWT3dOAuDuviDHFv7rvnrcZ0",y:"sMn0JCI8mD5K7VaxsIjXcDnGxyq3gdnlupYv_nw0DxA"}},"Yr8a8Rd+zqI=":{co:"DE",kid:"Yr8a8Rd+zqI=",jwk:{kty:"EC","x5t#S256":"Yr8a8Rd-zqJs00pi4eXOLYCEtNmQvtqv6gjDTY-HHa4",use:"sig",crv:"P-256",kid:"Yr8a8Rd+zqI=",x:"5eOmRsTsPlyUVzKnWK3xYlY04-DOffgg07nWx4FTa4k",y:"qLl0PZ3wsZjB4Kbmb9kcW1Us2M3sI3JimpJzRGA3QnU"}},"ZDoFfkn+yhY=":{co:"DE",kid:"ZDoFfkn+yhY=",jwk:{kty:"EC","x5t#S256":"ZDoFfkn-yhaz3n8XD9R3y3dJeQj_dusOVbWxVzKzAWs",use:"sig",crv:"P-256",kid:"ZDoFfkn+yhY=",x:"HZM5AMBImcqdKPFM6P5xx0LmZxo81NcnuydrdPUQaaY",y:"tDYbEXLbl-KgfGEndqRtdopcEknxHII7vCOwLBSUgDk"}},"bKmas9wa5tc=":{co:"DE",kid:"bKmas9wa5tc=",jwk:{kty:"EC","x5t#S256":"bKmas9wa5tdCg-Mqip2wZ4NF2HwirVKeBee36ose3WM",use:"sig",crv:"P-256",kid:"bKmas9wa5tc=",x:"aOhuajeY34pPu_12SnuMv2qlG8ErMOj7s0eAEM2679Y",y:"Fc7ImViyKdUtYzVrKCCSUxIi1lLY9ZqgrDDkd4AOwgQ"}},"c1XrnEBoj/c=":{co:"DE",kid:"c1XrnEBoj/c=",jwk:{kty:"EC","x5t#S256":"c1XrnEBoj_ee3RFQDz8mlpbduar3rP65U0Lvwq44GJs",use:"sig",crv:"P-256",kid:"c1XrnEBoj/c=",x:"UtMktlZKpvOfwhumIvsvpKMWE1LyMq32RkRCbVM5TBA",y:"cR7AlGHV0o26jyt3GfLWJApHGJcpbim0Dvvh2krBo0k"}},"dhSzPDr4G2M=":{co:"DE",kid:"dhSzPDr4G2M=",jwk:{kty:"EC","x5t#S256":"dhSzPDr4G2ONgZYpJtfqI5rADFSfd---DA8BZR7VAZQ",use:"sig",crv:"P-256",kid:"dhSzPDr4G2M=",x:"sLa_zRhSxxsmrPE_RwPNKXGblvI4JrdqfPNYpuPn3To",y:"ZBMW_76HddTLluwYrJphK2XCQvqFriLVtVB_sHFxyXE"}},"i5SVuCsR5TA=":{co:"DE",kid:"i5SVuCsR5TA=",jwk:{kty:"EC","x5t#S256":"i5SVuCsR5TDDPk16KDqH_zQdgG6gOMvAPkT6OEA-USA",use:"sig",crv:"P-256",kid:"i5SVuCsR5TA=",x:"5D4cdY3G91kHagLyAGon0ufC2jqzQ17V1wjvYHOLxZQ",y:"mNXr5kFYaLyFVEvQFOWe92nlvvtmcjVBYOy__WZNRO4"}},"izUDZjGtHWY=":{co:"DE",kid:"izUDZjGtHWY=",jwk:{kty:"EC","x5t#S256":"izUDZjGtHWZQQ-NkNguubTegCFdkFabjEbbro4Pay2I",use:"sig",crv:"P-256",kid:"izUDZjGtHWY=",x:"pobykjScOX2uy-5C_BYBXDRcVUVOBDWLUgUaIhP2q0E",y:"qBfBQQQ2AY8daXloX-DXfq7YwYr6-Vg3BZozFZ_hVc4"}},"juskqrNQf6k=":{co:"DE",kid:"juskqrNQf6k=",jwk:{kty:"EC","x5t#S256":"juskqrNQf6mMkFceGXcgvv__vSiwbjuqI-eSJXZJi8Q",use:"sig",crv:"P-256",kid:"juskqrNQf6k=",x:"gxLpjMDX1_tMRghYLQKMI0nK4UkZuK9pnAAJTC7BeQU",y:"Gh2BaeKSZAvM_1R3Fu-AqcE3k0SE87ODGX5ZDf1h7ak"}},"kjEx2H7huNE=":{co:"DE",kid:"kjEx2H7huNE=",jwk:{kty:"EC","x5t#S256":"kjEx2H7huNFl-233AhNFUd1KiMYFvaZFehoCjZJ8WQs",use:"sig",crv:"P-256",kid:"kjEx2H7huNE=",x:"tLZ1N2Y7UQHgRO3yKGyRTsJWdYFGDld5kbglFGHrMvY",y:"UMGuV6AXJR_cU6z93V3E7II55pex8eWGTpxh4STK3p8"}},"nHmZ5K96UY4=":{co:"DE",kid:"nHmZ5K96UY4=",jwk:{kty:"EC","x5t#S256":"nHmZ5K96UY4Dod3mgs9fFIoY30K8gw34rwYoUmEJsyw",use:"sig",crv:"P-256",kid:"nHmZ5K96UY4=",x:"x4HHLyxeH1wp_aPCCwyRxWVEcfUALP66kgwanudG4b8",y:"LqbxhTLFV6c4NKIRD2q1WvddgPVAbgpIwzOoxQLIGSE"}},"nPKEYm3gXzU=":{co:"DE",kid:"nPKEYm3gXzU=",jwk:{kty:"EC","x5t#S256":"nPKEYm3gXzWH_yQisF1kcwMY6eJHqqWQRs2FQuo0Ej0",use:"sig",crv:"P-256",kid:"nPKEYm3gXzU=",x:"Jmki-G1pd9DNiLX_eT709p_ZeCd_mcjrmRLoTgP6nlA",y:"6icVL2dK0OuMvy49lZOXoRh7blf0ZsrjVyWMRQefG3Q"}},"nTrG8glLUls=":{co:"DE",kid:"nTrG8glLUls=",jwk:{kty:"EC","x5t#S256":"nTrG8glLUlvrsSR5KvYKPiIPR_rsm-AyFNSW8JPsHew",use:"sig",crv:"P-256",kid:"nTrG8glLUls=",x:"d-grPnJ58prZvOeLC3vi9P2mnqlvvGNfsbT0HmxAVHA",y:"KDQe9z09ePSIRloTWRUjBUXpe77vL4uMD6GkriI62j8"}},"npo0ZWgdQSY=":{co:"DE",kid:"npo0ZWgdQSY=",jwk:{kty:"EC","x5t#S256":"npo0ZWgdQSa0UGAmDwQhIZnHdMwZkbd1KqrPir6cyCI",use:"sig",crv:"P-256",kid:"npo0ZWgdQSY=",x:"PdriVdFsidKrE0nr7S-75iO7-8LOtzFp99--4BLqKKM",y:"Cp_5gF74JCJxDecarIn02BVpPSpi3FBmw_XbcEJWgPs"}},"r9YkEJZgi9k=":{co:"DE",kid:"r9YkEJZgi9k=",jwk:{kty:"EC","x5t#S256":"r9YkEJZgi9mQZtiTcH3d-8vueMJfg1ItE9Qib3Hp_ZU",use:"sig",crv:"P-256",kid:"r9YkEJZgi9k=",x:"7f4SNNst1BMsb6Ub0yVCz01aDWB9I2_ajVbLyJpTr2o",y:"SsEqHEKYjNJnMvV1_nTGGJVGkFQTpraBP_358PMNrww"}},"rKMDA66RiLE=":{co:"DE",kid:"rKMDA66RiLE=",jwk:{kty:"EC","x5t#S256":"rKMDA66RiLEWKx3M1CG-cypSfMYddvS1roloyb71bV0",use:"sig",crv:"P-256",kid:"rKMDA66RiLE=",x:"bQZPoqfjpTx8m_wAZZWk3uoDxzfpiISsNSuZg_-9VN8",y:"3Enn6xBxUb0MDNgIzerzo4c1THY2deDEkSVDCRLvOS8"}},"rXP9L7xddL8=":{co:"DE",kid:"rXP9L7xddL8=",jwk:{kty:"EC","x5t#S256":"rXP9L7xddL8yTzBblruK_cJIN-FiRMJ_pfTRXwfdBt8",use:"sig",crv:"P-256",kid:"rXP9L7xddL8=",x:"-fBKs9tgAlGoiBIglL4JDLpguDzBcXqCuIulrUkBy_w",y:"Gaybb-37Iq1P2Ar3J-9Kz8zApaKnjxKAzwn9cFl_A6c"}},"sYXcYixrOGA=":{co:"DE",kid:"sYXcYixrOGA=",jwk:{kty:"EC","x5t#S256":"sYXcYixrOGAFoeElmKAYYmal4KvzrtFr2lg22sOz60o",use:"sig",crv:"P-256",kid:"sYXcYixrOGA=",x:"40rFr8baZEDNvONEE-Rxf5ePnZLLmqR-5Uwx_S5I2yk",y:"TIo2cmeHNpA9zskx5X0zWtZktPc151zSSqmcqotxhkM"}},"vjm0I2ATJ+Y=":{co:"DE",kid:"vjm0I2ATJ+Y=",jwk:{kty:"EC","x5t#S256":"vjm0I2ATJ-aFG04BjW-oSvUAOyECTAaOD33dp0c4TRI",use:"sig",crv:"P-256",kid:"vjm0I2ATJ+Y=",x:"2TqSv2wB9nB0Ev3u5VmckxWzq_L0fvl1HVI3ZBXCF-4",y:"5OeW6NM1AAVDwc-v3tT2g8QwiEvPjcm626VE98OQ9yM"}},"vq08l/LTxhk=":{co:"DE",kid:"vq08l/LTxhk=",jwk:{kty:"EC","x5t#S256":"vq08l_LTxhmTdGB2otiLSrhMTuKX_Y8UmAuUnTRDsG8",use:"sig",crv:"P-256",kid:"vq08l/LTxhk=",x:"DRVIqu7uo4HOgXlXyxYBl2L1arxxvDfwfgnYHjgVKQo",y:"RRI_oVfWBI0hAiUvmK4Rq-UV2VO3kcyr3yrUSNTzmsM"}},"wb/2450PPrc=":{co:"DE",kid:"wb/2450PPrc=",jwk:{kty:"EC","x5t#S256":"wb_2450PPrfgoBgStK78QjyEa_DQz2Z2TT6GxE2mVKU",use:"sig",crv:"P-256",kid:"wb/2450PPrc=",x:"lGYxcioPZFzAfJHtsB07FzUDpJlc6C18W2kcnCGEE1s",y:"o2oYrCumbxPlKEhoeAARjUDl_EcqTKeLfG84-1QKiO8"}},"wtYpyAmNmdk=":{co:"DE",kid:"wtYpyAmNmdk=",jwk:{kty:"EC","x5t#S256":"wtYpyAmNmdl5iVmp-87jCSfcj8B2O2wylC7fkk9Jrs4",use:"sig",crv:"P-256",kid:"wtYpyAmNmdk=",x:"6_QS0f7r433yqdq7XKh3OOKhOEigg-VVixYEToozbg8",y:"UIAKgAyGWA3t1hEJzvLvH6nc3dqLlWaOePxnNd4LM2A"}},"yWCRdph8XJs=":{co:"DE",kid:"yWCRdph8XJs=",jwk:{kty:"EC","x5t#S256":"yWCRdph8XJsbsnzH7bDul9pZsflGDL_dLNWbPkP0cUU",use:"sig",crv:"P-256",kid:"yWCRdph8XJs=",x:"gMhpOktfDD7Vn7Wm-BlHabFbpOs2UmCVrtIpcOFpIlo",y:"_PtsBz-f1UlGbJRMUqNvOH6cLqCeXinIw7r5Qj42TYU"}},"7z8+6oww2a8=":{co:"NO",kid:"7z8+6oww2a8=",jwk:{kty:"EC","x5t#S256":"7z8-6oww2a-UMGx64UCO1I7OD-OGAWtfPDYd_AzqMd8",crv:"P-256",kid:"7z8+6oww2a8=",x:"rbWQM5hj5SeR23DzCV0TVKrFhfYsmNVVSbPFxwyw4ZE",y:"H3q7Gd26dofq8NgYWy281R2SMFn54Wime9viXIlJLBU"}},"Er5OTMwLd78=":{co:"NO",kid:"Er5OTMwLd78=",jwk:{kty:"EC","x5t#S256":"Er5OTMwLd7_5zgX6kmv_WBiAyYesn6UnTpKQdqa-EeA",crv:"P-256",kid:"Er5OTMwLd78=",x:"fBeQBQBjyKpvjsCujqi15xnygRMyhjNsEy198LzTYuA",y:"fjI3tZcSLz2JHzvzxB0BYAOdoJ9umxwlxO-RlqqulDM"}},"cdm9Ymfwn2I=":{co:"NO",kid:"cdm9Ymfwn2I=",jwk:{kty:"EC","x5t#S256":"cdm9Ymfwn2IdP75j53-pa8iFnG3fziNR8_vG2I7UIxQ",crv:"P-256",kid:"cdm9Ymfwn2I=",x:"lH46JUamhvfj2ocSTxw9Eq7nVdP9OzBOxQ_zaWNXN5s",y:"nGoJWup67janw4mV0DHM-IKWeqXI7SZfsa2tgE82fT8"}},"BKBFhNFXWAU=":{co:"FI",kid:"BKBFhNFXWAU=",jwk:{kty:"EC","x5t#S256":"BKBFhNFXWAXpNBeRrjYnzNa6_qBqchgpbpS9oXn-FNM",use:"sig",crv:"P-256",kid:"BKBFhNFXWAU=",x:"epKcLfnTZIej9gSNJVmR8sRYMMgztnG9h0ZGWx7D1X0",y:"YN9lfxrSXOeR5KB_r6pG5ISiZ7wwSdSXbG5CipgSW9k"}},"ODqaG8mnbro=":{co:"BE",kid:"ODqaG8mnbro=",jwk:{kty:"EC","x5t#S256":"ODqaG8mnbroTgFCocQOAs0JYAh5GgBqHf6Mgp22ETNQ",crv:"P-256",kid:"ODqaG8mnbro=",x:"U_f_KsmP3NasU_jZo7aulTrd9GHoznfnwWvX8xmHtK4",y:"PRKKGzABuy4V56S0PmkcJpp0jHCFsvMD8TPEAzAVLcg"}},"KG9lzdohSY0=":{co:"PT",kid:"KG9lzdohSY0=",jwk:{kty:"EC","x5t#S256":"KG9lzdohSY3NIqr8IxfKJSFBX-svQMeALqy-rgoTpTs",crv:"P-256",kid:"KG9lzdohSY0=",x:"njK8A8ato900a-wQ1IaxJyaeUGQ5lwsYOCRlq47X4DI",y:"hnvj9y9trrWHBk1rQnpAamq3BM80hx_1_rOWnhEIGGA"}},"Jjql9rBrjHI=":{co:"BG",kid:"Jjql9rBrjHI=",jwk:{kty:"EC","x5t#S256":"Jjql9rBrjHLQMj5L09VoNRyb32McfGVQPT93jCLQ5lo",crv:"P-256",kid:"Jjql9rBrjHI=",x:"myxlsE2inBusapxY7LvRiPN0s-dsHnakaaa9M_5NDZY",y:"U5Y0mQs3iu-31jvTBUXBgl600GlzRNxYZFePmvdoUWs"}},"NAyCKly+hCg=":{co:"DK",kid:"NAyCKly+hCg=",jwk:{kty:"EC","x5t#S256":"NAyCKly-hCi4iWbIctz-PDhNvI3hpJZlcvsdX8DfyDA",crv:"P-256",kid:"NAyCKly+hCg=",x:"BmdgY_VORsecXxY_0xNNOzoJNRaVnMMmHs5jiXrGvaA",y:"zstY8w1Dsr0fvicYH9PmLhsqef1AGNECIe-W_iUJ5Rw"}},"7AfAwcpWOv0=":{co:"LT",kid:"7AfAwcpWOv0=",jwk:{kty:"RSA","x5t#S256":"7AfAwcpWOv3Yzs6M0T1pLauzkl4EoOLZ47KmcP-lg8Q",e:"AQAB",kid:"7AfAwcpWOv0=",n:"sIcppmCVhq96vMc4NtW8X-yV6O1oC7hfKnewK1_pxfByqlVTPpETDLAjNq9knNQpCs7vGjadCbDAylsQRK7qfU3sUUKamh6FgDhFo1dzC4mUHCy3XBL04XJie2eT_a6Wgjrn6NjEFk5M4Jl4N8u_RbfaVxqaOjUM0hBfuzfZeL2LT30POqDHj1hcyod1fIbG4vv2Upqxe3OX_WLr-WzSPbRkPwxcJjmYeNYODT0rEcd9VSzJpljaK-eDVwxT0wMRnCH2QLxdw8sR-oDYDTZBaabeHYyZ0CfYzSoBOZT3fVMAbjkVAl8GFyH8tUm4lMQbYEMbl_FkftcZQicaqvRdQQ"}},"lshLbYfCWRg=":{co:"LT",kid:"lshLbYfCWRg=",jwk:{kty:"RSA","x5t#S256":"lshLbYfCWRh3u6SgX7hMRwaahK1SSpscpRRNqleCix4",e:"AQAB",kid:"lshLbYfCWRg=",n:"nhBpxzeGXNlQs7U-j_Av1BUZ6CCgMR3bFLT4rRjO8KQ4IpAKqSCQ3j57MJqdumk3AUfHO5zhMZF4Awy0wqV3oFlyP49_56KKZxGARe5UkyfPjVbl8AZpLmgYoS_Ior53TLrwmT_-zvXynzFYbOi2OtCtqanG-9OUhSVRrXEEB-56PpCltE31wemX1behxDuCbE4tuqyTYODFw9Le3dGCbHWdjxi5W3XIUNo8j2u2PKue0KS76Xv0zAYItTgChgv7mM55_G109m4MfeU7AHah43bJth8K8y-SxG3RYHskmNZ7sfn3w8w7WyW7D3_tKHcMt3hgIh9z3DuWeR1C296JyQ"}},"02vdAOY/+gI=":{co:"LU",kid:"02vdAOY/+gI=",jwk:{kty:"EC","x5t#S256":"02vdAOY_-gKmnwVyS8JSbr0SeMhaGsNpKTlxF-VgMXE",crv:"P-256",kid:"02vdAOY/+gI=",x:"5EtYbOu-RuUcFAu1NN1rqsuKqNzpl0Y6bgg9wNKcmVI",y:"83wTvNYx9nXLqR7SpaezMuShowsgQCr4yVEhP35w3eY"}},"0kAwFy+vLpg=":{co:"LU",kid:"0kAwFy+vLpg=",jwk:{kty:"EC","x5t#S256":"0kAwFy-vLpiPZ7c145j7J-2K9HgoEu9TdVqwOwCC50k",crv:"P-256",kid:"0kAwFy+vLpg=",x:"vIs_H8NhtE23q5tR84V9WwbbdGDc3hh7mjrXom4PRzg",y:"xkbkr3wvTiBS7UczqIbHZ23BOthVjfhc9PboCXGqobQ"}},"bBnmkeVMV6A=":{co:"LU",kid:"bBnmkeVMV6A=",jwk:{kty:"EC","x5t#S256":"bBnmkeVMV6BQTvnKKOUMvtFNkuhrJRUsdWYUgvUwQsk",crv:"P-256",kid:"bBnmkeVMV6A=",x:"HTBJY0Z-T5I8EmqQmrbZAr8equIcKKE-YriIGw_AKJw",y:"sNGQI9Q3djEUzN_gBIjQEcVyBdPGtq4VLxQsshwidgw"}},"ln8K+9SqfuA=":{co:"LU",kid:"ln8K+9SqfuA=",jwk:{kty:"EC","x5t#S256":"ln8K-9SqfuDXnhld3cqBgP_xScoV_pHHZdGKsDEQuYU",crv:"P-256",kid:"ln8K+9SqfuA=",x:"ExXQauou3f3g77qOsZ0rSPFjoTDiKQDhG-Bpf34Yyoc",y:"hZGDATC_PdCmqpmS-LnswXPMcYNX9e9KnGVhyC46eKs"}},"25QCxBrBJvA=":{co:"HR",kid:"25QCxBrBJvA=",jwk:{kty:"EC","x5t#S256":"25QCxBrBJvBBALjD4A0vE9it6S_EOnuAU4l0vQbPwmU",crv:"P-256",kid:"25QCxBrBJvA=",x:"t5hwD0cJUB5TeQIAaE7nLjeef0vV5mamR30kjErGOcQ",y:"Xhnt-3Q65hQHjqiC2o0E4gV83Jz2jMVlHfUivWUXsc0"}},"MrT00mhDxLQ=":{co:"LV",kid:"MrT00mhDxLQ=",jwk:{kty:"EC","x5t#S256":"MrT00mhDxLSKKsuPfK3tumLbTbH-9-TT9ZjfgQJFevc",crv:"P-256",kid:"MrT00mhDxLQ=",x:"5_m2YdN8L81Ajoi-2brFJbul628alfXRXU26t7hRYEs",y:"77G--LUlZtg5vXG7oa4BSfv8F3nHcYdLU0hwpDHwdIU"}},"hFpY/ySOrwI=":{co:"LV",kid:"hFpY/ySOrwI=",jwk:{kty:"EC","x5t#S256":"hFpY_ySOrwJ3CHBv31aUeAOJpHV2R4WK5KVg6iWfkC0",crv:"P-256",kid:"hFpY/ySOrwI=",x:"PUwE7htr-kD1eVnJBfRf5tx0kA17qu4p1wRz3EKPxsI",y:"csiM5yKq_fh7JzHe5PSA_39HXqoz_Hbpc0tnBa1VZxU"}},"CvmI4xOoMj4=":{co:"FR",kid:"CvmI4xOoMj4=",jwk:{kty:"EC","x5t#S256":"CvmI4xOoMj5qGN9oHxdUlyJN94VP0t8CBLwXEdpc7Ng",crv:"P-256",kid:"CvmI4xOoMj4=",x:"sNCxAUi67vlLEBaGIqAk259l-dk6_Yw7hZL4JFqT6M8",y:"5gVyHOz_pmbSvdNyl4lWXpW6BAjjqExv_tp1RBYWmbg"}},"G3jDFQ1oK0Q=":{co:"FR",kid:"G3jDFQ1oK0Q=",jwk:{kty:"EC","x5t#S256":"G3jDFQ1oK0TFTZH73fI4Pqf5jaqrgqpWbURX9kQkGCg",crv:"P-256",kid:"G3jDFQ1oK0Q=",x:"EGSSdtJPZeYWU3QrR2cR4M2Cv6sYKuY870qkBKKREtk",y:"UnpeAsaX5vBJz2fjj1VQ18QK1nWEdDKCyujsfWhCJJs"}},"IMgNr10pfPQ=":{co:"FR",kid:"IMgNr10pfPQ=",jwk:{kty:"EC","x5t#S256":"IMgNr10pfPR2uyENjReGb2roflG5VgtJHyi4Ss6alJg",crv:"P-256",kid:"IMgNr10pfPQ=",x:"Cmvd9b56sHucHEi7GBjqapZy6IAZ4MFIFg7Acr85jXo",y:"f6AUjcxQT_Qp5LMC0eb8Jq_N-rkvSS-bHXcy0-CuPuQ"}},"YVpBYnLh1Hs=":{co:"FR",kid:"YVpBYnLh1Hs=",jwk:{kty:"EC","x5t#S256":"YVpBYnLh1Hu5lKpwfXKMPA7U0WaOo7xXLQ_9yicwvHU",crv:"P-256",kid:"YVpBYnLh1Hs=",x:"8SjDdFFGxTunJ0RQyxdGDbBKVUjHz9gKydhpKuTZAvY",y:"GTMxlVVezWISRkKjqeDsesFN8vs2Ouup3wHmgD3CDUc"}},"e+bFdywyJQE=":{co:"FR",kid:"e+bFdywyJQE=",jwk:{kty:"EC","x5t#S256":"e-bFdywyJQFs9jVxPy4gfyHW8eqMMGDE04puvDqkMXo",crv:"P-256",kid:"e+bFdywyJQE=",x:"RuPqA8PXwAZlb3MnIn-3UajY2JjRkt4v3rI4nUuQjh0",y:"t52Wf96w6mifCW6MPqShYHVgOdbGeqUCMiF--sGH6wo"}},"eQOY6BDp+vM=":{co:"FR",kid:"eQOY6BDp+vM=",jwk:{kty:"EC","x5t#S256":"eQOY6BDp-vNhfby793-jYrh53j3w7EKc8H--NBY7gdI",crv:"P-256",kid:"eQOY6BDp+vM=",x:"x2sQ7slwQ-IQrSLZwgIfafTa2g144vB8OXnI5WU67BE",y:"302s7D3HzW1lI-bqv3xQeRBG5WkhKUQOWMIcnwBCLeI"}},"fGLuvg6n5wk=":{co:"FR",kid:"fGLuvg6n5wk=",jwk:{kty:"EC","x5t#S256":"fGLuvg6n5wkxhiuHx3qRTCmFHOEcu1b_Yqkf4dShYg4",crv:"P-256",kid:"fGLuvg6n5wk=",x:"ImIFaugzwB5f_VyfQ3KTfTSoukwAPVSgHZWrtrc2j4E",y:"bgFKcPzm0ZwPaQYzfx3VHNc3JfUjv77AhJx5F4cY8-E"}},"lrxgMs2Duac=":{co:"FR",kid:"lrxgMs2Duac=",jwk:{kty:"EC","x5t#S256":"lrxgMs2DuacfGrkjdqhA1Fb4FZZhUJi0x-IH_TDWXCw",crv:"P-256",kid:"lrxgMs2Duac=",x:"7jO1wt-KJfoKi9O5dydU--nfENeQWdVACVEwAdquyYQ",y:"-ghFn6NcRtbVHDISiCO-1yWxivh9p8gLgrCdIE30-ZU"}},"4GkJs9YsYS4=":{co:"HU",kid:"4GkJs9YsYS4=",jwk:{kty:"EC","x5t#S256":"4GkJs9YsYS5Xhqs7YqGwjuJIF7eYjY-P9lXONAkWcD8",crv:"P-256",kid:"4GkJs9YsYS4=",x:"yN8tlsHEJlHHmms_54jGukHiHadMS0ckg70EQkyDuX4",y:"wNNN7ggomU6JCrqyEtfRDgJUBS0wi61Se9gnEk-_h_w"}},"Z7k1XpIWZOE=":{co:"SE",kid:"Z7k1XpIWZOE=",jwk:{kty:"EC","x5t#S256":"Z7k1XpIWZOHPEXBg3qNQHkGEOrdXrefPiS6ghhje2mk",use:"enc",crv:"P-256",kid:"Z7k1XpIWZOE=",x:"aLOo1IGTspZSdr2BqdAvKjZjHfW_Zq8VDrI6nEhBlXU",y:"K91Qg5c4616Ob-osdqhfUQskibB4GcVK6lkKRUG62zM"}},"90CNG8dcdn0=":{co:"SI",kid:"90CNG8dcdn0=",jwk:{kty:"EC","x5t#S256":"90CNG8dcdn1gEIm_D82XAsQ9eOd7XE9urjXV0MZyuCU",crv:"P-256",kid:"90CNG8dcdn0=",x:"EmxEg2iFDaol9DVnrqIY5zkPXrBANQlakmUfrBhogaA",y:"wtmWe35ENiHDiYBBeK0Esm9-IOYw8PPIO0GiJJ2iyjM"}},"6CDB1hL+uKU=":{co:"SK",kid:"6CDB1hL+uKU=",jwk:{kty:"EC","x5t#S256":"6CDB1hL-uKWVBtXsXk3Oiz_L5ozZgTsG5dPxG9YoWMY",crv:"P-256",kid:"6CDB1hL+uKU=",x:"6qxT6sSK3TDheWFHTBkfveooRhtUWqEqrELD9B7aAk4",y:"8Yz0tzARE7Zp1m-J0cwSDbxcKyw8UAqk1_CXr6d93OE"}},"PBpDVqnJ7Us=":{co:"IE",kid:"PBpDVqnJ7Us=",jwk:{kty:"EC","x5t#S256":"PBpDVqnJ7UubC6KtAsZiBINQLJPN0TylSWFH9AgYkxE",crv:"P-256",kid:"PBpDVqnJ7Us=",x:"TPE5ItolrGzLQLPqYxOT-orVmYJusLDsPWLwrK-bbJI",y:"gQbVwbKw9j8v6LFmK_SxeX3zkac8ZgVEJs6eyuLj4iM"}},"eNNsg2jd4wA=":{co:"IE",kid:"eNNsg2jd4wA=",jwk:{kty:"EC","x5t#S256":"eNNsg2jd4wBSYFAv2Bx_NsJ13l5-6KoTQZGxOAm7BDU",crv:"P-256",kid:"eNNsg2jd4wA=",x:"ZfUiZPt-jvUVd8fpPkv2xoXxluGZwuvys0oXWRnPOBc",y:"A3hpnDLMye4EDSktMTmd98bWP_a4Yr5o1VOuyB3ATPE"}},"EzYR1uk/E0I=":{co:"EE",kid:"EzYR1uk/E0I=",jwk:{kty:"EC","x5t#S256":"EzYR1uk_E0K-BbHtFA8_bV6Gl4veveR7CiYnwg74dYQ",crv:"P-256",kid:"EzYR1uk/E0I=",x:"vW8QeGk0YQMGQ_wG2vpPalRdoKNfd48O2qW5uP6gmgQ",y:"ZtTp60K9oLR91ysTX1Q3rjbqnqJrEkZA1mtw16sC3OA"}},"Ll3NP03zOxY=":{co:"CH",kid:"Ll3NP03zOxY=",jwk:{kty:"RSA","x5t#S256":"Ll3NP03zOxYSw6HRJR3HbI-TjLwk_Zni8IcXMMpL2ss",e:"AQAB",kid:"Ll3NP03zOxY=",n:"tk_51stJXU48RqD2lh4IdsxFrjlJfmTCrLr3cQNEXkrEoI3OEV8NnotE1RjVmQrqLTT04oxpWlcbMolXtJBtu3rOiLNwQvyVEbj_xSc6KT84Tp7GBo1P_kkunY-Vmab6HUCV_oGZYmsdiUP_OnTPX6Wy6delDhnrgHIDti73_TSsG7Zl1V6km7-KIkjAkVCEDkkUD7uffd4G-GBZ0B9F1KOT0IcFQNvDm0zlROVoGFlmPS8DWlrLHuIdMbB281uiDjcN-kNUt7rUyyj6TFgX9WCgEB_5mQBMRaaXK1zeDTaNkmC2S7IWxhMQsMBXJyAdbD9AnQOZc6XRjBauO7gz0w"}},"GvVR3e6VJIM=":{co:"MT",kid:"GvVR3e6VJIM=",jwk:{kty:"EC","x5t#S256":"GvVR3e6VJIPphwZ9N0I7Y2mN8V4LjB_FFcsCdFhlr20",crv:"P-256",kid:"GvVR3e6VJIM=",x:"1kpyGGbMShwokxGdJmH_WPJDcDONYigpXr7Z8jiiX9M",y:"D9X5I77B3eBpHHxx7a67LK9hS0f5ua4CNyIOcQyyVnU"}},"QacbC7DdD4U=":{co:"MT",kid:"QacbC7DdD4U=",jwk:{kty:"EC","x5t#S256":"QacbC7DdD4Wz73sW1EfU3R5hwqlFmmvgRuv7mqJyHXY",crv:"P-256",kid:"QacbC7DdD4U=",x:"fapP8-QeyFgXVvY41YkQudlUUh7IZBBpIdOJ34xYmxA",y:"hLh121VBarfyUp26VbBrHe2QT1Iy9ruSrPZqATAxDy4"}},"UZ1cSMaPcaQ=":{co:"MT",kid:"UZ1cSMaPcaQ=",jwk:{kty:"EC","x5t#S256":"UZ1cSMaPcaSGpl1kt7j-WgZ6SXJ2lDQeGtQpcOwQc68",crv:"P-256",kid:"UZ1cSMaPcaQ=",x:"1q1nvgXLGIbibQuYQU-f-Xs-mcbPmukAc3KQAyy_5KY",y:"R_p-ReGxuFdFyI6YV9Pd2MR4dSWx1js7oSrmp_RW6Mg"}},"bfoj2trt6bE=":{co:"MT",kid:"bfoj2trt6bE=",jwk:{kty:"EC","x5t#S256":"bfoj2trt6bGT-vf82PeELpWi79O_9NDwlyA_2A8w6Cw",crv:"P-256",kid:"bfoj2trt6bE=",x:"4DsoM1rJFjHyQPcX6WKDWZkouBehfQGxqOgwFAYyRKU",y:"260ri_rZM_LCX6PHY37LkESw0rmcbndCDrDAfWLEzKY"}},"ccgQ13tmkU8=":{co:"MT",kid:"ccgQ13tmkU8=",jwk:{kty:"EC","x5t#S256":"ccgQ13tmkU_IGa3FP9BzbeUCWaivVvc81P6KCF_934Y",crv:"P-256",kid:"ccgQ13tmkU8=",x:"Xj9fU7e4KVYe1VakCDZjYquHzkoxSHT8D33zeMDfyLY",y:"2IvxklaSkLT8AT2ZT8eua9im9sGqyCvAYMUoLELzCGo"}},"f6J92LRKpj0=":{co:"MT",kid:"f6J92LRKpj0=",jwk:{kty:"EC","x5t#S256":"f6J92LRKpj3rKUWUXOq0_mXKxXxvwaebEKm1nh1DFH4",crv:"P-256",kid:"f6J92LRKpj0=",x:"DSjY8ob2FU6g06KQpeZ2BAjhXnNxdEOMdex6l563qlM",y:"7zbGOmdsY1aA58fRJZ7OoW3kYzcA_i38KvE5_dkH5OE"}},"HeWuzGwEM5c=":{co:"IS",kid:"HeWuzGwEM5c=",jwk:{kty:"EC","x5t#S256":"HeWuzGwEM5c4ZAy3dWtSKZ7Rc1OowEcVHr-bPRr_zkc",crv:"P-256",kid:"HeWuzGwEM5c=",x:"vwlwjQL5cId7nINp_A_b-XNY_WzgX9sIOde8ggZmZjU",y:"7yGIQ4c-xb7OdqM5namrQ6d8iMD6a-pwDJmjU49CnWY"}},"Pbydc1LscXo=":{co:"IS",kid:"Pbydc1LscXo=",jwk:{kty:"EC","x5t#S256":"Pbydc1LscXpFpq56-LRLzLtXTAUvQLxIJchUVLo1I7Q",crv:"P-256",kid:"Pbydc1LscXo=",x:"O42X7C2X5bSDTnfSJwnk4qAjSk2m11Cy_mmFqryl7J0",y:"TIa2Q38u-5MuLktKNYltfNRL-dZgIltCd4t0nimHhDs"}},"NJpCsMLQco4=":{co:"IT",kid:"NJpCsMLQco4=",jwk:{kty:"EC","x5t#S256":"NJpCsMLQco5pJbcmDRgT7bJxxUQKoPU8f92i_qiXabs",crv:"P-256",kid:"NJpCsMLQco4=",x:"nL9-WnIp9fvbcocZSGUFlSw9ffW_jbMONzcvm1X4c-o",y:"VzjxLOwuP_N_j8UvEsHmtoYJv7SreDyNM_MIJyHoaI8"}},"vvYa1vaWkGg=":{co:"GR",kid:"vvYa1vaWkGg=",jwk:{kty:"EC","x5t#S256":"vvYa1vaWkGgsAumqgApI-8JmS1mJur496VbRXhZNL4I",crv:"P-256",kid:"vvYa1vaWkGg=",x:"aI7Y-lpY9cv5h5gKDrAzpkhl5bFPen_ohAMuJXU4uFc",y:"0LtFJ0gwhbf2x01nKisWHIpPGH5xflGUljihNzLJZRE"}},"/IcqIBnnZzc=":{co:"ES",kid:"/IcqIBnnZzc=",jwk:{kty:"EC","x5t#S256":"_IcqIBnnZzefMCgbTN9cCnD5PZL964iGmySbY2lLPO4",use:"sig",crv:"P-256",kid:"/IcqIBnnZzc=",x:"bxlQ_UTz0AxZWF-xQs-w-xveq5Eche9zf16LnDFYY_I",y:"vKWeperG9ipV8PGf5MKKc827-Swl9VcS7BjvUbPTsy4"}},"3IsdmTYkAAM=":{co:"ES",kid:"3IsdmTYkAAM=",jwk:{kty:"EC","x5t#S256":"3IsdmTYkAAN0vEzzv8wckxEw1-U1D1N-KsDzC-YRZaY",use:"sig",crv:"P-256",kid:"3IsdmTYkAAM=",x:"ManlPIcO9J8UBpHCAbku_KkAfiBrGLIre1buTIzhhok",y:"3C9GCDvg0Pbj7OlH8zyl80Ku_dVeSOWr4ZqUOo9sxbE"}},"4Qmniw7B0gc=":{co:"ES",kid:"4Qmniw7B0gc=",jwk:{kty:"EC","x5t#S256":"4Qmniw7B0gc96RZu354uwKsarncrg0dlvXm6XHqebtg",use:"sig",crv:"P-256",kid:"4Qmniw7B0gc=",x:"GwQNm-R4gtY5wWQTeJ9_kH1TqtnzC97I1EZQTE54p2Y",y:"yYV7y89iBZEOwkEHm0pO3MIIpEwznL0EoOdCcLqTDXw"}},"6ag2wJkSHtk=":{co:"ES",kid:"6ag2wJkSHtk=",jwk:{kty:"EC","x5t#S256":"6ag2wJkSHtnU_JHYmO9xwHnnQ8YRJORgaz464cMIlic",use:"sig",crv:"P-256",kid:"6ag2wJkSHtk=",x:"qF22rG5bDXpWn_tKy358h2KwYyaSKzCZV0HJptUQq7s",y:"FsX3gxPOh0qHmwa6Tr6Y4WV9v2ZExf2EZZIdM7Z5HJc"}},"ARrNkCRtprY=":{co:"ES",kid:"ARrNkCRtprY=",jwk:{kty:"EC","x5t#S256":"ARrNkCRtprbn6nuUoq8yW8dCGZKQ7JNgXDA7bOrTl-A",use:"sig",crv:"P-256",kid:"ARrNkCRtprY=",x:"blis8RR4Oc4Xqq4RZdhrJ0DnkAvK4vY8AamWbFg9T7M",y:"htey2vEyWE6txaiSXeSrbUz-9RqI8URdERCqRfrsALc"}},"BEnvMVnNFK8=":{co:"ES",kid:"BEnvMVnNFK8=",jwk:{kty:"EC","x5t#S256":"BEnvMVnNFK-d3PwvrxJrKsBwsUarHBGZ3M_4-wsNsOY",use:"sig",crv:"P-256",kid:"BEnvMVnNFK8=",x:"e1XUTCn6DkdbSOKlyzczFWQfDvtP31uGdjzVCzAkuxo",y:"KzXhF9xfNu4J8nC_5k80ZvJXw8c-uJRFHE8MNCO7p8A"}},"GMFMBu1RlCg=":{co:"ES",kid:"GMFMBu1RlCg=",jwk:{kty:"EC","x5t#S256":"GMFMBu1RlCjYQ-npp4hLqoyKY3kXPHgMjT2A-8E58FI",use:"sig",crv:"P-256",kid:"GMFMBu1RlCg=",x:"t3OX-XF_LZlHff6ZWiHRqQu4WBrgzNZYz4wFJkwkBmk",y:"P89ETrCyeBZcDiz7NnFBCCFdD7tXJp54L2uvhM0KWwA"}},"GuQPQRxbMsU=":{co:"ES",kid:"GuQPQRxbMsU=",jwk:{kty:"EC","x5t#S256":"GuQPQRxbMsVgY7dhAoT1J_TizNHhCwZ5FMJYbJK2dew",use:"sig",crv:"P-256",kid:"GuQPQRxbMsU=",x:"KMpkfLlexSZAyOl3FjSomlb4P8POpQb7PYz1bg8uca8",y:"kv5f4aT4ltFNgseYElb6HRCTiXXGzDAoEaBhx3cA_tU"}},"IaGR283U1jA=":{co:"ES",kid:"IaGR283U1jA=",jwk:{kty:"EC","x5t#S256":"IaGR283U1jAgl3B4ZTXhMyLC3l4UtsZendAbZTVGsL4",use:"sig",crv:"P-256",kid:"IaGR283U1jA=",x:"j_wPWM6e8JDYxW9673ivEvwlu2JAZpsNBrr2sQW5ppk",y:"Luq3KiVCseym739mcdQCXiEu_j0KtojXLoHw_kQv1X0"}},"JHd4CkNzadI=":{co:"ES",kid:"JHd4CkNzadI=",jwk:{kty:"EC","x5t#S256":"JHd4CkNzadJokWCr43qHdjraCRDd4ATWBIRUJNw2HP0",use:"sig",crv:"P-256",kid:"JHd4CkNzadI=",x:"DvCuOC6NlQCaL18-CEn4sbjC3NNnN4jBAmZo6lrGXbg",y:"yHwEN2Fpl3N4Ki50havOBBFevtjxcvcsi4KuCZhQHww"}},"MtI93IMknMk=":{co:"ES",kid:"MtI93IMknMk=",jwk:{kty:"EC","x5t#S256":"MtI93IMknMmRFOYlHBhFWYiDA71bBOhX_eEzzPx19NE",use:"sig",crv:"P-256",kid:"MtI93IMknMk=",x:"62orr7HL0POyQCqmgbbEqfcbcdcT4vyfQZEPYfxk69Y",y:"Ub_U_CMup1gMhIxdFcb5J3woP8fbooORxVq6XnVthKc"}},"NCc6YSsVioM=":{co:"ES",kid:"NCc6YSsVioM=",jwk:{kty:"EC","x5t#S256":"NCc6YSsVioMqVU_0VQGgB-WbsvN8-1WdphfeCNanEsk",use:"sig",crv:"P-256",kid:"NCc6YSsVioM=",x:"Uvljql1ZGpwzC92AbO4J751kqnIEXaCI8hYUIEArhRc",y:"qiXMeagpQBkpAxXG60z1fVrlLZg0PzaaFfhHo6gZpco"}},"YRYidQ+wetg=":{co:"ES",kid:"YRYidQ+wetg=",jwk:{kty:"EC","x5t#S256":"YRYidQ-wetjtUYj1OKaH-l1KNfRfWWaOpn3sUhRGqEw",use:"sig",crv:"P-256",kid:"YRYidQ+wetg=",x:"tdieg6q-5HvrfAd3ufPZthIWeQX4B_ytBp8iYAGpaJk",y:"pZCJnpZsj1nQABB-CT17nFzrAHD9bTerzpJNHh3l4B8"}},"YU9+X9nepqU=":{co:"ES",kid:"YU9+X9nepqU=",jwk:{kty:"EC","x5t#S256":"YU9-X9nepqX4bXSv-RaEcJiP23gjUPjMXsGfo2FQSRw",use:"sig",crv:"P-256",kid:"YU9+X9nepqU=",x:"gOuoVfBtfKWYpcffhNWfiCf4g4oZBdaPcdrn0HBtkQ8",y:"_cWKehZXxQD9WXtvS2jNXppxcY8kDVldynjZqHP7xWA"}},"ZcfkloEvfGQ=":{co:"ES",kid:"ZcfkloEvfGQ=",jwk:{kty:"EC","x5t#S256":"ZcfkloEvfGSuXvyPZV3YD_ujHUwWcu2lu63rTVLxktI",use:"sig",crv:"P-256",kid:"ZcfkloEvfGQ=",x:"V61Sl3v6NzBqyCbqSb8_fBodGle-b3RJ7Utk-uExDwY",y:"zsc0v_9hlE0RSluN6abJMq9xutP8XiQmnje0vQr7LHY"}},"e9SH8dtWwdY=":{co:"ES",kid:"e9SH8dtWwdY=",jwk:{kty:"EC","x5t#S256":"e9SH8dtWwdZ0IzPID5f-Jrx3ZXdcsBN_BvtYQj-hK7s",use:"sig",crv:"P-256",kid:"e9SH8dtWwdY=",x:"HZjrINN6u-ZGfRqaYqgqL-yZZCDlu-PKPCkVS_ysPos",y:"K6J7cJYc52z7KuVvndjcsV3mlAE_pU8kSstTQMThagA"}},"hgpHHrTb4ws=":{co:"ES",kid:"hgpHHrTb4ws=",jwk:{kty:"EC","x5t#S256":"hgpHHrTb4wswCsq78TQsEpgyinNyC1zpkCQlNM8inCI",use:"sig",crv:"P-256",kid:"hgpHHrTb4ws=",x:"li8eKthiom9EydKvhg7LHXj_f88_ZeNUpfEFm6kIAr0",y:"ytTQkUr9YKyZzYgXPZb4ILQI6hR0Ehk6L7UXBh3FbkQ"}},"qFNF2dC+mjQ=":{co:"ES",kid:"qFNF2dC+mjQ=",jwk:{kty:"EC","x5t#S256":"qFNF2dC-mjSR0IGpTUjjlt-SBep2WuO7oW4ZsojRXtQ",use:"sig",crv:"P-256",kid:"qFNF2dC+mjQ=",x:"3KVI7Sy-id-bprJ8Eh9AHtW-1qeC4qoHH1oK7HN87UI",y:"h_SsUIsdI6tEckm9nPuQjfpGwH7GBL1C3x06M9hVs1k"}},"tCM87WnaaQE=":{co:"ES",kid:"tCM87WnaaQE=",jwk:{kty:"EC","x5t#S256":"tCM87WnaaQGOLK-5bUR843ApnjIT2cWJyuftKuyAv-A",use:"sig",crv:"P-256",kid:"tCM87WnaaQE=",x:"DOg7lpxitz9-ytOAKFXxS7F4qc9IfKWrj388ETiCbLE",y:"ELqGHlhKfuMFzywhe0UaYOmcbfYhhvd2QMMZfINOTmo"}},"ub6Qmv9xtAo=":{co:"ES",kid:"ub6Qmv9xtAo=",jwk:{kty:"EC","x5t#S256":"ub6Qmv9xtAqgzif0xaYrDxyYRYVv5RSlPSZNRj7FYS8",use:"sig",crv:"P-256",kid:"ub6Qmv9xtAo=",x:"he-kvml2tx_-_wipHR5ttSw1PdmWGLpoEqzNiel2mWs",y:"GaL30gUfic64uzaR_LPEQUpxA3NJEE5dnUohAsvQ-OU"}},"x3ch4ml934I=":{co:"ES",kid:"x3ch4ml934I=",jwk:{kty:"EC","x5t#S256":"x3ch4ml934K1xSR9U9i77PgzgZsdlGx1pg2Q_7wn6uE",use:"sig",crv:"P-256",kid:"x3ch4ml934I=",x:"eC6-zmnjgdAUmYG4kIPJsMwSFSJclYoKuHKcIQ5PpX4",y:"MSsjN-hqdn5CrwEW8iWI3blPCczvZ60iC1cY7ikWqRc"}},"Is2JtrOJhik=":{co:"AT",kid:"Is2JtrOJhik=",jwk:{kty:"EC","x5t#S256":"Is2JtrOJhinpnQsaO73CXL3yZEx1jbytAn55PJ52JfU",crv:"P-256",kid:"Is2JtrOJhik=",x:"YE24qIKmdcfRWUh2TqklkfZ6nyNBpX4VHeLMxfFl8rk",y:"EPGZLtG3Jx-TmV3JJErfrSrPhRmfbSidVbTQ5nnZS-s"}},"7rZbUrXNlLk=":{co:"CY",kid:"7rZbUrXNlLk=",jwk:{kty:"EC","x5t#S256":"7rZbUrXNlLnQGiFeDlx4K5jUnCQx999TWiOKJmsE2Jo",crv:"P-256",kid:"7rZbUrXNlLk=",x:"7S_R06707Glu721qJqvxIFzQ2LSbq9P2uu6nRKCBLsE",y:"-a8j98F6YIC-oRodPNBeOtmxi07iP4V68RAdpEdlY8M"}},"e4lH6I4iMIM=":{co:"CZ",kid:"e4lH6I4iMIM=",jwk:{kty:"EC","x5t#S256":"e4lH6I4iMIMy1-9oEcKQdBq4tYiImWxzOjo7VZyuf-U",crv:"P-256",kid:"e4lH6I4iMIM=",x:"UIzSq5MMYg2oez_kdjVH73ZPmI3lAQZTJsLOGqhJNcY",y:"obJ_pubxS3jg1hTOv4V0Bki-erCI2yjK2Gte5SjQClM"}},"fNf883wPIEg=":{co:"CZ",kid:"fNf883wPIEg=",jwk:{kty:"EC","x5t#S256":"fNf883wPIEjxL_f14ybtwtvkhv7WINEpCCMMO8UL-b8",crv:"P-256",kid:"fNf883wPIEg=",x:"8Dj2k2EY_UqgKsSGvIwPRhLiMa2kYm-y02Sam1DJusQ",y:"CRTqWx2p5fcDPfFNsZ_WK6T4igl8J2kj4nl8l-xrJDo"}},"AN1EeLIMAmo=":{co:"PL",kid:"AN1EeLIMAmo=",jwk:{kty:"EC","x5t#S256":"AN1EeLIMAmqDUZSd_iEM4lWlHmE_fIMn5HCcHLhlrbU",crv:"P-256",kid:"AN1EeLIMAmo=",x:"RG4yI_SSv70zEtVjzIrn_CypR1e0BZO5u8bIgltZico",y:"4Pvfdp9muxrnMSus8vdcavBfFx-wdEiVO-apK_GdXfQ"}},"FDNJjaSCWi0=":{co:"PL",kid:"FDNJjaSCWi0=",jwk:{kty:"EC","x5t#S256":"FDNJjaSCWi24bflAWChU5rMog7UKeqC4ESgOFyL2Zp4",crv:"P-256",kid:"FDNJjaSCWi0=",x:"dxvWMfuk6CHCbffZWPS6bRgVYglYdED1NT1FCfXstUY",y:"fNQFpmDoerW2YDhfTjNZc6naRQ9bjphGdAPF12JpAdQ"}},"HhkeqvrtQ0U=":{co:"PL",kid:"HhkeqvrtQ0U=",jwk:{kty:"EC","x5t#S256":"HhkeqvrtQ0WdjNhplLpXTylB8zhZiRTjJBp_mk1K-sU",crv:"P-256",kid:"HhkeqvrtQ0U=",x:"gUesihG8ECIDnqxEoU9RouOR9y3NVLBUlpZ-ri-Ur7Q",y:"0CzkUAxN7PzOShhJZcAm7IE-nF1AE_JLp9dpjnCbe_I"}},"JkFekJel6/o=":{co:"LI",kid:"JkFekJel6/o=",jwk:{kty:"EC","x5t#S256":"JkFekJel6_o5qcYKV6J-r4XE4XRSndzyApPtGtYrAOk",crv:"P-256",kid:"JkFekJel6/o=",x:"BnFUjr8FpfpVaVFtCUW7Yg6JBk_n1TlJKEKpm_rZOvA",y:"BMyqcKEwqV6Vzz9Ujxob0F8yfouHQUB4G3cNkg6XGZk"}},"e/YRqyv++qY=":{co:"LI",kid:"e/YRqyv++qY=",jwk:{kty:"EC","x5t#S256":"e_YRqyv--qYkeb2tMnbk50CeKbJ7wO1KEH9vwG77pC0",crv:"P-256",kid:"e/YRqyv++qY=",x:"mCCGUDO95y6Rj40KX74cFgc99I9BnFoPBkZ3kcAyo2o",y:"v7JjeIG2FpKwtljBK7DfM2d-wvUYQBpR2AzfLTyW4gM"}},"jYpr5GHCDiQ=":{co:"LI",kid:"jYpr5GHCDiQ=",jwk:{kty:"EC","x5t#S256":"jYpr5GHCDiRmmYwxtuPM-HGgDmK6ds89vgfnZKiBAMs",crv:"P-256",kid:"jYpr5GHCDiQ=",x:"lHOTKQPe3GZKCAIsaBbPpAfJZ30ftIUsb_r6gHu19cI",y:"NtVzH4mQ0LiN8HvNns7Jsoy_4369c5UWKly5m6jq5CQ"}},"hA1+pwEOxCI=":{co:"RO",kid:"hA1+pwEOxCI=",jwk:{kty:"EC","x5t#S256":"hA1-pwEOxCJQVdJCo1UF20qctj0mp-xVM9O_oWi7NN0",crv:"P-256",kid:"hA1+pwEOxCI=",x:"IQ5LJGhrs3m__HC60__4N8WDL1DiHJRUTirld4U9ebA",y:"WGLE7cVpJxhtFLaJ9dsfMgx5u8Ju2kaBYXeTMVuBuXM"}},"3lTmAZX19GQ=":{co:"NL",kid:"3lTmAZX19GQ=",jwk:{kty:"EC","x5t#S256":"3lTmAZX19GQszm-yiitK_9hTftnElUPZI2StHXj3Rbo",crv:"P-256",kid:"3lTmAZX19GQ=",x:"_DBnhBhTf8TkfsTn4tLEb3mQLCsONkZbY4I5i0zh0Wg",y:"bA7qQ7IRp7uExOAIB-mP7gZ7Cfg-kJFQIpM2v67cPPc"}},"f+4yAPIGTWg=":{co:"NL",kid:"f+4yAPIGTWg=",jwk:{kty:"EC","x5t#S256":"f-4yAPIGTWgdZBliDCTlCY9f-uP7vx-cFb6eAcTbeHg",crv:"P-256",kid:"f+4yAPIGTWg=",x:"RyOtPhis4M-vOSM-4AoqtBot3s7AGrqQOSA2ZY3a25w",y:"-XuEJUaRMXdUt_fQgA76OY9Dcqq5v2s64RSLEgHPBSI"}},"pSEfhlMubh4=":{co:"NL",kid:"pSEfhlMubh4=",jwk:{kty:"EC","x5t#S256":"pSEfhlMubh6v9PGy_Jv3i0bXKcFoDZeYNC-zfrrU5nU",crv:"P-256",kid:"pSEfhlMubh4=",x:"iY-AGRWtd8tCUb5PQdEPaCWAZl0D_SIOtcDH8R8yrp8",y:"yU_DJjMVf8DNeVomX9PRMst4iV8BU_vWDgsqwQPwno4"}}},h=["6l81l8ozsOU=","+/bbaA9m0j0=","+3CK4II5kAg=","+Z3fx3xOKAQ=","/IcqIBnnZzc=","0J/NOaUzCAg=","19qvyYakWNI=","1vxpTLgc6ws=","2Rk3X8HntrI=","2c6RCwOmTGI=","3H2QEFR6mNI=","3IsdmTYkAAM=","428FOlUxNRM=","4Qmniw7B0gc=","5QR1PW8i5fU=","67BzmdT5oYo=","6EjzyhNlGDQ=","6ag2wJkSHtk=","6ek0DM8iSCs=","6jqyJk80bUU=","7/MOPvQI+WY=","727mZUPbpyc=","7JQ83GRvK3A=","9YMMwrfDdoo=","9cWXDDA52FQ=","ARrNkCRtprY=","Ayod4P+EpW8=","B2tu82ZFDgE=","B4BbJQx1lYQ=","BEnvMVnNFK8=","BkMNTz/RKb8=","CFUoOhVtOgo=","CtDYk/6d0xw=","DBCmGJjweMM=","DEsVUSvpFAE=","DhspllZjSVY=","FOKoNhMEwl0=","GMFMBu1RlCg=","GO0rf1TneQQ=","GZ2cfMLwyK8=","H6KcgU3y0DY=","HLY9BHAuz7E=","IaGR283U1jA=","JHd4CkNzadI=","JLxre3vSwyg=","Jj+9Dw7DUVU=","KFP4Rwxlab8=","Ks/eWTAFo+I=","Ld1KH5MrFsY=","MI7hF0OCF8Y=","MiLjTTO/H+I=","N1SUO3VrfMk=","NCc6YSsVioM=","NJpCsMLQco4=","OTAXaM3aBRM=","Ol12Ruv8LLo=","P8Gvy67UYZI=","R2I8VTnOBa4=","Rl7ZUeTLAC4=","SPQ+0opWAuM=","STPDGKKF4N8=","Sti09mkj+lQ=","TfwLMHDXIws=","Tn6X6w0+iBM=","U5vvB3k2Cj4=","Uy2dYAJ4Rdw=","VjUQ+HzmZm0=","WgxNQJs1Iwo=","X3SRAZXFzss=","XmYhV1P+0D4=","YRYidQ+wetg=","YTA6V2K8xQY=","YU9+X9nepqU=","ZcfkloEvfGQ=","b0RhLyvUxgs=","bIwe3F4lAk4=","cKqkRgtW0Xw=","coWnRsJwd/s=","dAacIEGMNcE=","dZl5Qc0tmyE=","dsXHUWEsRfA=","e9SH8dtWwdY=","eZx0UBq8T1E=","f1sfUVIx8CA=","f4ialzEsfzU=","ffE6u4r3Db0=","gklWpqtW+Tg=","gtsQTR82V6w=","hgpHHrTb4ws=","hyJmFP5BVx8=","jrxzCm2qFug=","kP2/7BRoXEs=","kcJv+6yBWTg=","kwL2uX0ViAA=","l3DTTvY1/h0=","lHHRhMo9GWg=","lrXFYdYTLMY=","m3TMC91/ewg=","mRxapyixSJ0=","mamG6Tt5Jl8=","mkooSvJQkZ0=","nSdp31pPUvQ=","oeoGLaBuFPY=","onphe00laog=","pXjP4Y6sns4=","pt8xqyMH4uE=","rjvkUVBSdaE=","snqSuA/dvgk=","tCM87WnaaQE=","u5Tohz8Qb+w=","uE7ViYTSegg=","ub6Qmv9xtAo=","uxvl+dsyrBw=","v58a8hf49kE=","wGR6OwOYF4k=","wRkEAKayPrE=","wTHYuP2pg1k=","xKOXcpzMVb0=","xZ7EcIR8I4Y=","xZUU+IopoVk=","y3g27v8r51I=","yLHLNvSl428=","yM/UEbTW72k=","yWoEMegrayo=","zMq8VEXlueo="],k={"country-2-codes":{valueSetId:"country-2-codes",valueSetDate:"2019-11-01",valueSetValues:{AD:{display:"Andorra",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AE:{display:"United Arab Emirates",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AF:{display:"Afghanistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AG:{display:"Antigua and Barbuda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AI:{display:"Anguilla",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AL:{display:"Albania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AM:{display:"Armenia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AO:{display:"Angola",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AQ:{display:"Antarctica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AR:{display:"Argentina",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AS:{display:"American Samoa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AT:{display:"Austria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AU:{display:"Australia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AW:{display:"Aruba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AX:{display:"Åland Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AZ:{display:"Azerbaijan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BA:{display:"Bosnia and Herzegovina",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BB:{display:"Barbados",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BD:{display:"Bangladesh",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BE:{display:"Belgium",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BF:{display:"Burkina Faso",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BG:{display:"Bulgaria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BH:{display:"Bahrain",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BI:{display:"Burundi",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BJ:{display:"Benin",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BL:{display:"Saint Barthélemy",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BM:{display:"Bermuda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BN:{display:"Brunei Darussalam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BO:{display:"Bolivia, Plurinational State of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BQ:{display:"Bonaire, Sint Eustatius and Saba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BR:{display:"Brazil",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BS:{display:"Bahamas",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BT:{display:"Bhutan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BV:{display:"Bouvet Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BW:{display:"Botswana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BY:{display:"Belarus",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BZ:{display:"Belize",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CA:{display:"Canada",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CC:{display:"Cocos (Keeling) Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CD:{display:"Congo, the Democratic Republic of the",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CF:{display:"Central African Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CG:{display:"Congo",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CH:{display:"Switzerland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CI:{display:"Côte d''Ivoire",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CK:{display:"Cook Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CL:{display:"Chile",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CM:{display:"Cameroon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CN:{display:"China",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CO:{display:"Colombia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CR:{display:"Costa Rica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CU:{display:"Cuba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CV:{display:"Cabo Verde",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CW:{display:"Curaçao",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CX:{display:"Christmas Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CY:{display:"Cyprus",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CZ:{display:"Czechia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DE:{display:"Germany",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DJ:{display:"Djibouti",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DK:{display:"Denmark",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DM:{display:"Dominica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DO:{display:"Dominican Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DZ:{display:"Algeria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EC:{display:"Ecuador",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EE:{display:"Estonia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EG:{display:"Egypt",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EH:{display:"Western Sahara",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ER:{display:"Eritrea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ES:{display:"Spain",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ET:{display:"Ethiopia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FI:{display:"Finland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FJ:{display:"Fiji",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FK:{display:"Falkland Islands (Malvinas)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FM:{display:"Micronesia, Federated States of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FO:{display:"Faroe Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FR:{display:"France",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GA:{display:"Gabon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GB:{display:"United Kingdom of Great Britain and Northern Ireland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GD:{display:"Grenada",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GE:{display:"Georgia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GF:{display:"French Guiana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GG:{display:"Guernsey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GH:{display:"Ghana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GI:{display:"Gibraltar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GL:{display:"Greenland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GM:{display:"Gambia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GN:{display:"Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GP:{display:"Guadeloupe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GQ:{display:"Equatorial Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GR:{display:"Greece",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GS:{display:"South Georgia and the South Sandwich Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GT:{display:"Guatemala",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GU:{display:"Guam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GW:{display:"Guinea-Bissau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GY:{display:"Guyana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HK:{display:"Hong Kong",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HM:{display:"Heard Island and McDonald Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HN:{display:"Honduras",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HR:{display:"Croatia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HT:{display:"Haiti",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HU:{display:"Hungary",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ID:{display:"Indonesia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IE:{display:"Ireland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IL:{display:"Israel",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IM:{display:"Isle of Man",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IN:{display:"India",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IO:{display:"British Indian Ocean Territory",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IQ:{display:"Iraq",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IR:{display:"Iran, Islamic Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IS:{display:"Iceland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IT:{display:"Italy",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JE:{display:"Jersey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JM:{display:"Jamaica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JO:{display:"Jordan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JP:{display:"Japan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KE:{display:"Kenya",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KG:{display:"Kyrgyzstan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KH:{display:"Cambodia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KI:{display:"Kiribati",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KM:{display:"Comoros",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KN:{display:"Saint Kitts and Nevis",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KP:{display:"Korea, Democratic People''s Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KR:{display:"Korea, Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KW:{display:"Kuwait",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KY:{display:"Cayman Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KZ:{display:"Kazakhstan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LA:{display:"Lao People''s Democratic Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LB:{display:"Lebanon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LC:{display:"Saint Lucia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LI:{display:"Liechtenstein",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LK:{display:"Sri Lanka",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LR:{display:"Liberia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LS:{display:"Lesotho",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LT:{display:"Lithuania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LU:{display:"Luxembourg",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LV:{display:"Latvia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LY:{display:"Libya",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MA:{display:"Morocco",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MC:{display:"Monaco",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MD:{display:"Moldova, Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ME:{display:"Montenegro",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MF:{display:"Saint Martin (French part)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MG:{display:"Madagascar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MH:{display:"Marshall Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MK:{display:"Macedonia, the former Yugoslav Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ML:{display:"Mali",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MM:{display:"Myanmar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MN:{display:"Mongolia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MO:{display:"Macao",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MP:{display:"Northern Mariana Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MQ:{display:"Martinique",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MR:{display:"Mauritania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MS:{display:"Montserrat",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MT:{display:"Malta",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MU:{display:"Mauritius",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MV:{display:"Maldives",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MW:{display:"Malawi",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MX:{display:"Mexico",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MY:{display:"Malaysia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MZ:{display:"Mozambique",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NA:{display:"Namibia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NC:{display:"New Caledonia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NE:{display:"Niger",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NF:{display:"Norfolk Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NG:{display:"Nigeria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NI:{display:"Nicaragua",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NL:{display:"Netherlands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NO:{display:"Norway",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NP:{display:"Nepal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NR:{display:"Nauru",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NU:{display:"Niue",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NZ:{display:"New Zealand",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},OM:{display:"Oman",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PA:{display:"Panama",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PE:{display:"Peru",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PF:{display:"French Polynesia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PG:{display:"Papua New Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PH:{display:"Philippines",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PK:{display:"Pakistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PL:{display:"Poland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PM:{display:"Saint Pierre and Miquelon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PN:{display:"Pitcairn",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PR:{display:"Puerto Rico",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PS:{display:"Palestine, State of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PT:{display:"Portugal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PW:{display:"Palau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PY:{display:"Paraguay",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},QA:{display:"Qatar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RE:{display:"Réunion",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RO:{display:"Romania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RS:{display:"Serbia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RU:{display:"Russian Federation",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RW:{display:"Rwanda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SA:{display:"Saudi Arabia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SB:{display:"Solomon Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SC:{display:"Seychelles",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SD:{display:"Sudan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SE:{display:"Sweden",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SG:{display:"Singapore",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SH:{display:"Saint Helena, Ascension and Tristan da Cunha",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SI:{display:"Slovenia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SJ:{display:"Svalbard and Jan Mayen",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SK:{display:"Slovakia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SL:{display:"Sierra Leone",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SM:{display:"San Marino",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SN:{display:"Senegal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SO:{display:"Somalia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SR:{display:"Suriname",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SS:{display:"South Sudan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ST:{display:"Sao Tome and Principe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SV:{display:"El Salvador",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SX:{display:"Sint Maarten (Dutch part)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SY:{display:"Syrian Arab Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SZ:{display:"Swaziland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TC:{display:"Turks and Caicos Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TD:{display:"Chad",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TF:{display:"French Southern Territories",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TG:{display:"Togo",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TH:{display:"Thailand",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TJ:{display:"Tajikistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TK:{display:"Tokelau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TL:{display:"Timor-Leste",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TM:{display:"Turkmenistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TN:{display:"Tunisia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TO:{display:"Tonga",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TR:{display:"Turkey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TT:{display:"Trinidad and Tobago",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TV:{display:"Tuvalu",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TW:{display:"Taiwan, Province of China",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TZ:{display:"Tanzania, United Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UA:{display:"Ukraine",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UG:{display:"Uganda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UM:{display:"United States Minor Outlying Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},US:{display:"United States of America",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UY:{display:"Uruguay",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UZ:{display:"Uzbekistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VA:{display:"Holy See",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VC:{display:"Saint Vincent and the Grenadines",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VE:{display:"Venezuela, Bolivarian Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VG:{display:"Virgin Islands, British",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VI:{display:"Virgin Islands,",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VN:{display:"Viet Nam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VU:{display:"Vanuatu",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},WF:{display:"Wallis and Futuna",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},WS:{display:"Samoa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},YE:{display:"Yemen",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},YT:{display:"Mayotte",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZA:{display:"South Africa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZM:{display:"Zambia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZW:{display:"Zimbabwe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""}}},"test-manf":{valueSetId:"covid-19-lab-test-manufacturer-and-name",valueSetDate:"2021-05-27",valueSetValues:{308:{display:"PCL Inc, PCL COVID19 Ag Rapid FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},344:{display:"SD BIOSENSOR Inc, STANDARD F COVID-19 Ag FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},345:{display:"SD BIOSENSOR Inc, STANDARD Q COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},768:{display:"ArcDia International Ltd, mariPOC SARS-CoV-2",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-19 17:12:12 CET"},1097:{display:"Quidel Corporation, Sofia SARS Antigen FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1114:{display:"Sugentech, Inc, SGTi-flex COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1144:{display:"Green Cross Medical Science Corp., GENEDIA W COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 09:31:09 CET"},1162:{display:"Nal von minden GmbH, NADAL COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1173:{display:"CerTest Biotec, CerTest SARS-CoV-2 Card test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:18:20 CET"},1180:{display:"MEDsan GmbH, MEDsan SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1190:{display:"möLab, COVID-19 Rapid Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1199:{display:"Oncosem Onkolojik Sistemler San. ve Tic. A.S., CAT",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1215:{display:"Hangzhou Laihe Biotech Co., Ltd, LYHER Novel Coronavirus (COVID-19) Antigen Test Kit(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1218:{display:"Siemens Healthineers, CLINITEST Rapid Covid-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1223:{display:"BIOSYNEX S.A., BIOSYNEX COVID-19 Ag BSS",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:18:20 CET"},1225:{display:"DDS DIAGNOSTIC, Test Rapid Covid-19 Antigen (tampon nazofaringian)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1232:{display:"Abbott Rapid Diagnostics, Panbio COVID-19 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-17 11:01:42 CET"},1236:{display:"BTNX Inc, Rapid Response COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:13 CET"},1244:{display:"GenBody, Inc, Genbody COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1246:{display:"VivaChek Biotech (Hangzhou) Co., Ltd, Vivadiag SARS CoV 2 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1253:{display:"GenSure Biotech Inc, GenSure COVID-19 Antigen Rapid Kit (REF: P2004)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1256:{display:"Hangzhou AllTest Biotech Co., Ltd, COVID-19 and Influenza A+B Antigen Combo Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1263:{display:"Humasis, Humasis COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1266:{display:"Labnovation Technologies Inc, SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1267:{display:"LumiQuick Diagnostics Inc, QuickProfile COVID-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1268:{display:"LumiraDX, LumiraDx SARS-CoV-2 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:18:20 CET"},1271:{display:"Precision Biosensor, Inc, Exdia COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1278:{display:"Xiamen Boson Biotech Co. Ltd, Rapid SARS-CoV-2 Antigen Test Card",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1295:{display:"Zhejiang Anji Saianfu Biotech Co., Ltd, reOpenTest COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1296:{display:"Zhejiang Anji Saianfu Biotech Co., Ltd, AndLucky COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1304:{display:"AMEDA Labordiagnostik GmbH, AMP Rapid Test SARS-CoV-2 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1319:{display:"SGA Medikal, V-Chek SARS-CoV-2 Ag Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1331:{display:"Beijing Lepu Medical Technology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1333:{display:"Joinstar Biomedical Technology Co., Ltd, COVID-19 Rapid Antigen Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1341:{display:"Qingdao Hightop Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1343:{display:"Zhezhiang Orient Gene Biotech Co., Ltd, Coronavirus Ag Rapid Test Cassette (Swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:18:20 CET"},1360:{display:"Guangdong Wesail Biotech Co., Ltd, COVID-19 Ag Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1363:{display:"Hangzhou Clongene Biotech Co., Ltd, Covid-19 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1365:{display:"Hangzhou Clongene Biotech Co., Ltd, COVID-19/Influenza A+B Antigen Combo Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1375:{display:"DIALAB GmbH, DIAQUICK COVID-19 Ag Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1392:{display:"Hangzhou Testsea Biotechnology Co., Ltd, COVID-19 Antigen Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1420:{display:"NanoEntek, FREND COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1437:{display:"Guangzhou Wondfo Biotech Co., Ltd, Wondfo 2019-nCoV Antigen Test (Lateral Flow Method)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1443:{display:"Vitrosens Biotechnology Co., Ltd, RapidFor SARS-CoV-2 Rapid Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1456:{display:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-19 17:10:21 CET"},1466:{display:"TODA PHARMA, TODA CORONADIAG Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1468:{display:"ACON Laboratories, Inc, Flowflex SARS-CoV-2 Antigen rapid test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1481:{display:"MP Biomedicals, Rapid SARS-CoV-2 Antigen Test Card",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1484:{display:"Beijing Wantai Biological Pharmacy Enterprise Co., Ltd, Wantai SARS-CoV-2 Ag Rapid Test (FIA)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:04:00 CET"},1489:{display:"Safecare Biotech (Hangzhou) Co. Ltd, COVID-19 Antigen Rapid Test Kit (Swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-12 12:58:25 CET"},1490:{display:"Safecare Biotech (Hangzhou) Co. Ltd, Multi-Respiratory Virus Antigen Test Kit(Swab)  (Influenza A+B/ COVID-19)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1574:{display:"Shenzhen Zhenrui Biotechnology Co., Ltd, Zhenrui ®COVID-19 Antigen Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1604:{display:"Roche (SD BIOSENSOR), SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1606:{display:"RapiGEN Inc, BIOCREDIT COVID-19 Ag - SARS-CoV 2 Antigen test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1654:{display:"Asan Pharmaceutical CO., LTD, Asan Easy Test COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1736:{display:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1747:{display:"Guangdong Hecin Scientific, Inc., 2019-nCoV Antigen Test Kit (colloidal gold method)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1763:{display:"Xiamen AmonMed Biotechnology Co., Ltd, COVID-19 Antigen Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1764:{display:"JOYSBIO (Tianjin) Biotechnology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 09:28:10 CET"},1767:{display:"Healgen Scientific, Coronavirus Ag Rapid Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 13:18:20 CET"},1769:{display:"Shenzhen Watmind Medical Co., Ltd, SARS-CoV-2 Ag Diagnostic Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1815:{display:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit (Colloidal Gold) - Nasal Swab",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-12 12:27:46 CET"},1822:{display:"Anbio (Xiamen) Biotechnology Co., Ltd, Rapid COVID-19 Antigen Test(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1833:{display:"AAZ-LMB, COVID-VIRO",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-17 11:02:12 CET"},1844:{display:"Hangzhou Immuno Biotech Co.,Ltd, Immunobio SARS-CoV-2 Antigen ANTERIOR NASAL Rapid Test Kit (minimal invasive)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 19:40:14 CET"},1870:{display:"Beijing Hotgen Biotech Co., Ltd, Novel Coronavirus 2019-nCoV Antigen Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:07:30 CET"},1884:{display:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-20 15:15:25 CET"},1906:{display:"Azure Biotech Inc, COVID-19 Antigen Rapid Test Device",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-19 17:14:21 CET"},1919:{display:"Core Technology Co., Ltd, Coretests COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-10 20:12:51 CET"},1934:{display:"Tody Laboratories Int., Coronavirus (SARS-CoV 2) Antigen - Oral Fluid",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-19 17:16:42 CET"},2010:{display:"Atlas Link Technology Co., Ltd., NOVA Test® SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 09:29:55 CET"},2017:{display:"Shenzhen Ultra-Diagnostics Biotec.Co.,Ltd, SARS-CoV-2 Antigen Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-19 17:15:38 CET"}}},"test-type":{valueSetId:"covid-19-lab-test-type",valueSetDate:"2021-04-27",valueSetValues:{"LP6464-4":{display:"Nucleic acid amplification with probe detection",lang:"en",active:!0,version:"2.69",system:"http://loinc.org"},"LP217198-3":{display:"Rapid immunoassay",lang:"en",active:!0,version:"2.69",system:"http://loinc.org"}}},"vaccine-medicinal-product":{valueSetId:"vaccines-covid-19-names",valueSetDate:"2021-04-27",valueSetValues:{"EU/1/20/1528":{display:"Comirnaty",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/20/1507":{display:"COVID-19 Vaccine Moderna",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/21/1529":{display:"Vaxzevria",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/20/1525":{display:"COVID-19 Vaccine Janssen",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},CVnCoV:{display:"CVnCoV",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"Sputnik-V":{display:"Sputnik-V",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},Convidecia:{display:"Convidecia",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},EpiVacCorona:{display:"EpiVacCorona",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"BBIBP-CorV":{display:"BBIBP-CorV",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"Inactivated-SARS-CoV-2-Vero-Cell":{display:"Inactivated SARS-CoV-2 (Vero Cell)",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},CoronaVac:{display:"CoronaVac",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},Covaxin:{display:"Covaxin (also known as BBV152 A, B, C)",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"}}},"disease-agent-targeted":{valueSetId:"disease-agent-targeted",valueSetDate:"2021-04-27",valueSetValues:{840539006:{display:"COVID-19",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"}}},"test-result":{valueSetId:"covid-19-lab-result",valueSetDate:"2021-04-27",valueSetValues:{260373001:{display:"Detected",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},260415e3:{display:"Not detected",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"}}},"vaccine-mah-manf":{valueSetId:"vaccines-covid-19-auth-holders",valueSetDate:"2021-04-27",valueSetValues:{"ORG-100001699":{display:"AstraZeneca AB",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100030215":{display:"Biontech Manufacturing GmbH",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100001417":{display:"Janssen-Cilag International",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100031184":{display:"Moderna Biotech Spain S.L.",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100006270":{display:"Curevac AG",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100013793":{display:"CanSino Biologics",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100020693":{display:"China Sinopharm International Corp. - Beijing location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100010771":{display:"Sinopharm Weiqida Europe Pharmaceutical s.r.o. - Prague location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100024420":{display:"Sinopharm Zhijun (Shenzhen) Pharmaceutical Co. Ltd. - Shenzhen location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100032020":{display:"Novavax CZ AS",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"Gamaleya-Research-Institute":{display:"Gamaleya Research Institute",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Vector-Institute":{display:"Vector Institute",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Sinovac-Biotech":{display:"Sinovac Biotech",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Bharat-Biotech":{display:"Bharat Biotech",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"}}},"vaccine-prophylaxis":{valueSetId:"sct-vaccines-covid-19",valueSetDate:"2021-04-27",valueSetValues:{1119305005:{display:"SARS-CoV-2 antigen vaccine",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},1119349007:{display:"SARS-CoV-2 mRNA vaccine",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},J07BX03:{display:"covid-19 vaccines",lang:"en",active:!0,version:"2021-01",system:"http://www.whocc.no/atc"}}}},b=async function(e){if(!e)return void p.myerror("kid is undefined");let i=w[e];if(void 0===i)return void p.myerror(`kid ${e} not found`);let t=i.jwk;if(void 0!==t)return t;p.myerror(`JWK for kid ${e} not found`)},f=function(e,i){if(!e)return"N/A";let t=k[i];if(!t)return e;let s=t.valueSetValues;if(!s)return e;let o=s[e];return o?o.display:e};class C{constructor(){}static async fromJWK(e){const i=e.kty;let t;if("EC"==i)t={name:"ECDSA",namedCurve:"P-256"};else{if("RSA"!=i)throw new Error(`Invalid key type specified: ${e.kty}`);t={name:"RSA-PSS",hash:"SHA-256"}}let s=e.d?["sign"]:["verify"];return await crypto.subtle.importKey("jwk",e,t,!0,s)}static async generateECDSAKeyPair(){return await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"])}static async generateEncryptionKey(){return await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}static async exportToJWK(e){return await crypto.subtle.exportKey("jwk",e)}static async exportToPEM(e){return await crypto.subtle.exportKey("spki",e)}static async importFromPEMRaw(e){const i=window.atob(e);console.log(i);const t=function(e){const i=new ArrayBuffer(e.length),t=new Uint8Array(i);for(let s=0,o=e.length;s<o;s++)t[s]=e.charCodeAt(s);return i}(i);return console.log(t),await crypto.subtle.importKey("spki",t,{name:"ECDSA",namedCurve:"P-256"},!0,["verify"])}static async sign(e,i){if("private"!=e.type)throw new Error("Not a private key");return await window.crypto.subtle.sign({name:"ECDSA",hash:{name:"SHA-256"}},e,i)}static async verify(e,i,t){if("public"!=e.type)throw new Error("Not a public key");let s;console.log("Inside VERIFY",e);try{s=await window.crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-256"}},e,i,t)}catch(o){throw`Verification of payload failed: ${o}`}return console.log("Result:",s),s}static async encryptMessage(e,i){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");let t=crypto.getRandomValues(new Uint8Array(12));return{iv:t,ciphertext:await crypto.subtle.encrypt({name:"AES-GCM",iv:t},e,i)}}static async decryptMessage(e,i,t){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");return await window.crypto.subtle.decrypt({name:"AES-GCM",iv:i},e,t)}}const x=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];var E;new TextEncoder,new TextDecoder;var S=new Map;S.set(-7,"ES256"),S.set(-37,"RSA");const A=class{static encode(e){var i,t=new ArrayBuffer(256),s=new DataView(t),o=0;function a(e){for(var a=t.byteLength,r=o+e;a<r;)a<<=1;if(a!==t.byteLength){var n=s;t=new ArrayBuffer(a),s=new DataView(t);for(var d=o+3>>2,c=0;c<d;++c)s.setUint32(c<<2,n.getUint32(c<<2))}return i=e,s}function r(){o+=i}function n(e){r(a(1).setUint8(o,e))}function d(e){for(var i=a(e.length),t=0;t<e.length;++t)i.setUint8(o+t,e[t]);r()}function c(e,i){var t;i<24?n(e<<5|i):i<256?(n(e<<5|24),n(i)):i<65536?(n(e<<5|25),t=i,r(a(2).setUint16(o,t))):i<4294967296?(n(e<<5|26),function(e){r(a(4).setUint32(o,e))}(i)):(n(e<<5|27),function(e){var i=e%POW_2_32,t=(e-i)/POW_2_32,s=a(8);s.setUint32(o,t),s.setUint32(o+4,i),r()}(i))}return function e(i){var t;if(!1===i)return n(244);if(!0===i)return n(245);if(null===i)return n(246);if(void 0===i)return n(247);switch(typeof i){case"number":if(Math.floor(i)===i){if(0<=i&&i<=POW_2_53)return c(0,i);if(-POW_2_53<=i&&i<0)return c(1,-(i+1))}return n(251),function(e){r(a(8).setFloat64(o,e))}(i);case"string":var s=[];for(t=0;t<i.length;++t){var l=i.charCodeAt(t);l<128?s.push(l):l<2048?(s.push(192|l>>6),s.push(128|63&l)):l<55296?(s.push(224|l>>12),s.push(128|l>>6&63),s.push(128|63&l)):(l=(1023&l)<<10,l|=1023&i.charCodeAt(++t),l+=65536,s.push(240|l>>18),s.push(128|l>>12&63),s.push(128|l>>6&63),s.push(128|63&l))}return c(3,s.length),d(s);default:var v;if(Array.isArray(i))for(c(4,v=i.length),t=0;t<v;++t)e(i[t]);else if(i instanceof Uint8Array)c(2,i.length),d(i);else if(i instanceof Map){c(5,v=i.size);for(let[t,s]of i)e(t),e(s)}else{var p=Object.keys(i);for(c(5,v=p.length),t=0;t<v;++t){var g=p[t];e(g),e(i[g])}}}}(e),t.slice(0,o)}static async verifyCWT(e,i){let[t,s,o,a]=A.decode(e);const r=["Signature1",t,new Uint8Array(0),o];let n=A.encode(r),d=!1;try{d=await C.verify(i,a,n),console.log("VERIFIED:",d)}catch(c){console.log("ERROR:",c)}return d}static decode(e,i,t){var s=new DataView(e),o=0;function a(e,i){return o+=e,i}function r(i){return a(i,new Uint8Array(e,o,i))}function n(){return a(1,s.getUint8(o))}function d(){return a(2,s.getUint16(o))}function c(){return a(4,s.getUint32(o))}function l(){return 255===s.getUint8(o)&&(o+=1,!0)}function v(e){if(e<24)return e;if(24===e)return n();if(25===e)return d();if(26===e)return c();if(27===e)return c()*POW_2_32+c();if(31===e)return-1;throw"Invalid length encoding"}function p(e){var i=n();if(255===i)return-1;var t=v(31&i);if(t<0||i>>5!==e)throw"Invalid indefinite length element";return t}function g(e,i){for(var t=0;t<i;++t){var s=n();128&s&&(s<224?(s=(31&s)<<6|63&n(),i-=1):s<240?(s=(15&s)<<12|(63&n())<<6|63&n(),i-=2):(s=(15&s)<<18|(63&n())<<12|(63&n())<<6|63&n(),i-=3)),s<65536?e.push(s):(s-=65536,e.push(55296|s>>10),e.push(56320|1023&s))}}"function"!=typeof i&&(i=function(e){return e}),"function"!=typeof t&&(t=function(){});var u=function e(){var c,u,y=n(),m=y>>5,w=31&y;if(7===m)switch(w){case 25:return function(){var e=new ArrayBuffer(4),i=new DataView(e),t=d(),s=32768&t,o=31744&t,a=1023&t;if(31744===o)o=261120;else if(0!==o)o+=114688;else if(0!==a)return(s?-1:1)*a*POW_2_24;return i.setUint32(0,s<<16|o<<13|a<<13),i.getFloat32(0)}();case 26:return a(4,s.getFloat32(o));case 27:return a(8,s.getFloat64(o))}if((u=v(w))<0&&(m<2||6<m))throw"Invalid length";switch(m){case 0:return u;case 1:return-1-u;case 2:if(u<0){for(var h=[],k=0;(u=p(m))>=0;)k+=u,h.push(r(u));var b=new Uint8Array(k),f=0;for(c=0;c<h.length;++c)b.set(h[c],f),f+=h[c].length;return b}return r(u);case 3:var C=[];if(u<0)for(;(u=p(m))>=0;)g(C,u);else g(C,u);return String.fromCharCode.apply(null,C);case 4:var x;if(u<0)for(console.log("INDEFINITE LENGTH ARRAY"),x=[];!l();)x.push(e());else for(x=new Array(u),c=0;c<u;++c)x[c]=e();return x;case 5:var E=new Map;for(c=0;c<u||u<0&&!l();++c){var S=e();E.set(S,e())}return E;case 6:return i(e(),u);case 7:switch(u){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return t(u)}}}();if(o!==e.byteLength)throw"Remaining bytes";return u}static async decodeCWT(e,i){var t=new DataView(e).getUint8(0),s=t>>5,o=31&t;if(6!=s)throw new Error(`COSE object must start with a tag: ${s}`);if(18!=o)throw new Error(`Not a COSE Single signature, tag: ${o}`);e=e.slice(1);let[a,r,n,d]=A.decode(e),c=function(e,i){let t=e.slice(),s=A.decode(t.buffer),o=s.get(1);if(void 0===o)throw"Missing algorithm in protected headers";let a=S.get(o);if(void 0===a)throw`Invalid algorithm specified: ${o}`;let r={};r.alg=a;let n=s.get(4);if(void 0===n&&(n=i.get(4)),void 0===n)throw"Missing kid in headers";let d="";for(let c=0;c<n.length;c++)d+=String.fromCodePoint(n[c]);return d=window.btoa(d),r.kid=d,r}(a,r),l=!1;if(i){let i=c.kid,t=await b(i);if(t){let i=await C.fromJWK(t);l=await A.verifyCWT(e,i)}else h.includes(i)&&(l="PRE",p.mywarn(`KEY ${i} found in PRE LIST`))}return n=function(e){e=e.slice();let i=A.decode(e.buffer);e={};for(let[r,n]of i)switch(r){case 1:e.iss=n;break;case 2:e.sub=n;break;case 3:e.aud=n;break;case 4:e.exp=n;break;case 5:e.nbf=n;break;case 6:e.iat=n;break;case 7:e.cti=n}let t=i.get(-260);if(null==t)throw"No hcert found";let s,o=t.get(1);if(null==o)throw"No EU COVID certificate found";try{e.version=o.get("ver"),e.foreName=o.get("nam").get("fn"),e.givenName=o.get("nam").get("gn"),e.fullName=e.foreName+", "+e.givenName,e.dateOfBirth=o.get("dob")}catch(a){throw`Error accessing required common fields: ${a}`}if(o.get("v"))e.certType="v",s=o.get("v")[0];else if(o.get("r"))e.certType="r",s=o.get("r")[0];else{if(!o.get("t"))throw"Invalid EU COVID certificate type";e.certType="t",s=o.get("t")[0]}return"v"===e.certType?(e.diseaseTargeted=f(s.get("tg"),"disease-agent-targeted"),e.vaccineProphylaxis=f(s.get("vp"),"vaccine-prophylaxis"),e.medicinalProduct=f(s.get("mp"),"vaccine-medicinal-product"),e.manufacturer=f(s.get("ma"),"vaccine-mah-manf"),e.doseNumber=s.get("dn"),e.doseTotal=s.get("sd"),e.dateVaccination=s.get("dt"),e.country=f(s.get("co"),"country-2-codes"),e.certificateIssuer=s.get("is"),e.uniqueIdentifier=s.get("ci")):"t"===e.certType?(e.diseaseTargeted=f(s.get("tg"),"disease-agent-targeted"),e.typeTest=f(s.get("tt"),"test-type"),e.testName=s.get("nm"),e.manufacturer=f(s.get("ma"),"test-manf"),e.timeSample=s.get("sc"),e.testResult=f(s.get("tr"),"test-result"),e.testingCentre=s.get("tc"),e.country=f(s.get("co"),"country-2-codes"),e.certificateIssuer=s.get("is"),e.uniqueIdentifier=s.get("ci")):"r"===e.certType&&(e.diseaseTargeted=f(s.get("tg"),"disease-agent-targeted"),e.datePositive=s.get("fr"),e.dateFrom=s.get("df"),e.dateUntil=s.get("du"),e.country=f(s.get("co"),"country-2-codes"),e.certificateIssuer=s.get("is"),e.uniqueIdentifier=s.get("ci")),e}(n),console.log("Payload:",n),[c,n,d,l]}static async decodeHC1QR(e,i=!1){if(!e.startsWith("HC1:"))throw"Certificate does not start with 'HC1:'";let t=function(e){if(null==e)throw new Error("utf8StringArg is null or undefined.");if(0===e.length)return[];var i=e.length%3;if(1===i)throw new Error("utf8StringArg has incorrect length.");if(void 0===E){E={};for(let e=0;e<x.length;++e)E[x[e]]=e}const t=new Array(e.length);for(let n=0;n<e.length;++n){const i=E[e[n]];if(void 0===i)throw new Error("Invalid character at position ".concat(n).concat("."));t[n]=i}const s=Math.trunc(t.length/3);var o=new Array(2*s+(2===i?1:0)),a=0;const r=3*s;for(let n=0;n<r;){const e=t[n++]+45*t[n++]+2025*t[n++];o[a++]=Math.trunc(e/256),o[a++]=e%256}return 0===i||(o[o.length-1]=t[t.length-2]+45*t[t.length-1]),o}(e=e.slice(4));t=new Uint8Array(t);let s=r(t),[o,a,n,d]=await A.decodeCWT(s.buffer,i);return[o,a,n,d]}static displayMB(e){var i=e>>5,t=31&e;switch(7===i&&console.log("FLOAT"),i){case 0:return void console.log(`Integer ${t}`);case 1:return void console.log("Negative Integer "+(-1-t));case 2:return console.log(`Bstr ${t}`),`Bstr ${t}`;case 3:return void console.log(`String ${t}`);case 4:return void console.log(`Array ${t}`);case 5:return void console.log(`Map ${t}`);case 6:return void console.log(`Tag ${t}`);case 7:switch(t){case 20:return void console.log("FALSE");case 21:return void console.log("TRUE");case 22:return void console.log("NULL");case 23:return void console.log("UNDEFINED");default:return void console.log("Simple Value")}}}};let I=A;i(I,"POW_2_24",5.960464477539063e-8),i(I,"POW_2_32",4294967296),i(I,"POW_2_53",Number.MAX_SAFE_INTEGER);var T,R=new Map;window.addEventListener("popstate",(async function(e){var i=T,t=void 0,s=e.state;null!=s&&(i=s.pageName,t=s.pageData),console.log("Popstate: ",i),await P(i,t)}));var D=new class{constructor(){console.log("Inside constructor of SCANRESULT"),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e,i){console.log("PRESENT Enter",e),this.qrContent="HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355",i.style.display="block";try{this.hcert=await I.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(t){return void p.myerror("Error verifying credential",t)}try{this.thehtml=this.renderDetail(this.hcert)}catch(t){return void p.myerror("Error rendering credential",t)}n(this.thehtml,i)}async exit(){}toggleView(e){document.querySelector(e).classList.toggle("w3-show")}renderDetail(e){let i=e[1],t="Unrecognized";return"v"==i.certType&&(t=a`

            <section class="section">
                <div class="subsection">
                    <img width="60px" src=${"\ndata:image/png;base64,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"} alt="EUlogo">
                    <h3 style="display: inline-block"><b>EU COVID CERTIFICATE</b></h3>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Vaccination</b></h4>
                    <p>Prueba</p>
                    <p>Prueba</p>
                    <div>Prueba</div>
                    <p>Prueba</p>
                    <p>Prueba</p>
                </div>
            </section>
            
            <div class="container">
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">Name</div>
                        <div class="valor">${i.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Date of birth</div>
                        <div class="valor">${i.dateOfBirth}</div>
                    </div>
                </section>
                
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">Dose number/Total doses</div>
                        <div class="valor">${i.doseNumber}/${i.doseTotal}</div>
                    </div>
        
                    <div class="subsection">
                        <div class="etiqueta">Date of vaccination</div>
                        <div class="valor">${i.dateVaccination}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Member State of vaccination</div>
                        <div class="valor">${i.country}</div>
                    </div>
                </section>
                
                <!-- <button @click=${()=>this.toggleView("#expandableSection")} class="w3-btn w3-block w3-black w3-left-align">Details</button> -->
            
                <!-- <div id="expandableSection" class="w3-hide"> -->

                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta mt-3">Disease targeted</div>
                            <div class="valor mt-3">${i.diseaseTargeted}</div>
                        </div>
                    </section>

                    <section class="section">
                
                        <div class="subsection">
                            <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                            <div class="valor mb-3">${i.vaccineProphylaxis}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Vaccine medicinal product</div>
                            <div class="valor mb-3">${i.medicinalProduct}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Manufacturer</div>
                            <div class="valor">${i.manufacturer}</div>            
                        </div>
                
                    </section>
                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta">Certificate identifier</div>
                            <div class="valor text-break">${i.uniqueIdentifier}</div>
                        </div>
                        <div class="subsection">
                            <div class="etiqueta">Certificate issuer</div>
                            <div class="valor">${i.certificateIssuer}</div>                
                        </div>
                    </section>
                                
                <!-- </div> -->
            </div>
            `),"t"==i.certType&&(t=a`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Test</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${i.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${i.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Test details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${i.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${i.certificateIssuer}</div>
                    </div>
            
                </div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${i.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Name</div>
                        <div class="valor mb-3">${i.typeTest}</div>
            
                        <div class="etiqueta">Manufacturer</div>
                        <div class="valor">${i.manufacturer}</div>
            
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Result</div>
                        <div class="valor mb-3">${i.testResult}</div>
            
                        <div class="etiqueta">Date/Time of Sample Collection</div>
                        <div class="valor mb-3">${i.timeSample}</div>
            
                        <div class="etiqueta">Testing Centre</div>
                        <div class="valor">${i.testingCentre}</div>
                    </div>
                </div>
            
            </div>
            `),"r"==i.certType&&(t=a`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Recovery</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${i.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${i.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Recovery details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${i.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Date of positive</div>
                        <div class="valor mb-3">${i.datePositive}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid from</div>
                        <div class="valor mb-3">${i.dateFrom}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid to</div>
                        <div class="valor">${i.dateUntil}</div>
                    </div>
            
                </div>
            
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${i.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${i.certificateIssuer}</div>
            
                        <div class="etiqueta">Country of Test</div>
                        <div class="valor">${i.country}</div>
            
                    </div>
            
                </div>
            </div>
            `),t}};async function P(e,i){console.log(R);try{for(let[i,t]of R)t.style.display="none",i!==e&&t.exit&&await t.exit(t)}catch(s){return void p.myerror("Trying to call exit",s)}let t=R.get(e);void 0===t&&(e="page404"),window.scrollTo(0,0);try{t.enter?await t.enter(i,t):"displayhcert"===e?await D.enter(i,t):t.style.display="block"}catch(s){return void p.myerror("Calling enter()",s)}}async function j(){await M(T)}async function M(e,i){i||(i={}),void 0===R.get(e)&&(p.myerror("Target page does not exist: ",e),e="page404"),window.history.pushState({pageName:e,pageData:i},`${e}`),await P(e,i)}class L extends o{constructor(){console.log("Inside constructor of ROUTER"),super()}render(){return console.log("Rendering ROUTER"),a`
        <header-bar></header-bar>
        `}}i(L,"styles",[y]);customElements.define("router-elem",L);class B extends o{constructor(){console.log("Inside constructor of JRMPAGE"),super()}enter(){console.log("Enter JRMPAGE"),this.style.display="block",this.requestUpdate()}}i(B,"styles",[y]);const N=class extends B{constructor(){console.log("Inside constructor of DEMO PAGE"),super()}render(){return a`
        <!-- =========================================== -->
        <!-- PASSENGER HOME                              -->
        <!-- =========================================== -->
        <div class="w3-container">
            <h2>You do not have any credentials yet</h2>
            <p>Click the button below to add credentials</p>
        </div>
        <div class="plus radius w3-card-4 fab"></div>
        `}enter(){console.log("Enter page DEMO"),this.style.display="block",this.requestUpdate()}};let Y=N;i(Y,"styles",[N.styles,s`
        .plus {
            --t:3px;   /* Thickness */
            --l:60px;  /* size of the symbol */
            --s:55%;    /* Size of the plus inside */
            --c1:#fff; /* Plus color*/
            --c2: rgb(63, 81, 181); /* background color*/

            display:inline-block;
            width:var(--l);
            height:var(--l);
            
            background:
                linear-gradient(var(--c1),var(--c1)) content-box,
                linear-gradient(var(--c1),var(--c1)) content-box,
                var(--c2);
            background-position:center;
            background-size: var(--s) var(--t),var(--t) var(--s);
            background-repeat:no-repeat;
        }

        .radius {
            border-radius:50%;
        }
        .fab {
            position: fixed;
            bottom: 45px;
            right: 30px
        }
        `]),customElements.define("passenger-home",Y);customElements.define("demo-page",class extends B{static get properties(){return{perico1:{type:Object},perico2:{attribute:!1}}}constructor(){console.log("Inside constructor of DEMO PAGE"),super(),this.perico1="default 111111",this.perico2="default 222222"}render(){return a`
        <!-- =========================================== -->
        <!-- HOME PAGE for demos. It has several roles   -->
        <!-- and the user can choose                     -->
        <!-- =========================================== -->
        
        <div class="w3-container">
            <a @click=${()=>M("passenger")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a @click=${()=>M("verifier")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>
            
            <a @click=${()=>M("issuerHome")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a @click=${()=>M("pubcreds")}>
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a @click=${()=>M("admin")}>
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
        </div>
        `}enter(){console.log("Enter page DEMO",this.perico1,this.perico2),this.style.display="block",this.requestUpdate()}});var U="scanqr-page";class V extends o{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANQR"),super(),this.codeReader=new d,this.videoInputDevices=[],this.selectedDeviceId=void 0,this.selectHtml=a``,this.resultObj=void 0,this.result=void 0,this.videoElem=void 0}render(){return a`
        <!-- =========================================== -->
        <!-- SCAN QR PAGE.                               -->
        <!-- =========================================== -->
                    
        <div id="videoPlaceholder">
        </div>
        
        <div id="footer" class="w3-bar w3-xlarge">
            ${this.videoInputDevices.length>0?a`
                    ${this.getCamerasList()}
                    <button class="w3-btn w3-indigo w3-xlarge w3-hover-indigo" @click=${this.toggleView}>
                        Select Camera
                    </button>`:a``}
        </div>
        `}toggleView(e){this.renderRoot.querySelector("#selectList").classList.toggle("w3-show")}getCamerasList(){let e=a``;return this.videoInputDevices.length>0&&(e=a`
            <ul id="selectList" class="w3-ul w3-border w3-white w3-hide w3-large" >
                ${this.videoInputDevices.map((e=>a`<li class=${e.deviceId===this.selectedDeviceId?"w3-large w3-pale-blue":"w3-large"} id="${e.deviceId}" @click=${this.selected}>${e.deviceId===this.selectedDeviceId?a`*`:a``} ${e.label}</li>`))}
            </ul>
            `),e}async enter(){if(console.log("SCANQR Enter",this.clientWidth),this.style.display="block",this.result=void 0,void 0===this.videoElem){let t={video:{facingMode:"environment"}};try{var e=await navigator.mediaDevices.getUserMedia(t)}catch(i){if(i instanceof NotAllowedError)throw i;if(i instanceof NotFoundError)throw i}let s=e.getVideoTracks()[0].getSettings().deviceId;this.selectedDeviceId=s,this.videoInputDevices=await this.codeReader.listVideoInputDevices();let o=this.renderRoot.querySelector("#videoPlaceholder");this.videoElem=document.createElement("video"),this.videoElem.style.width="100%",o.append(this.videoElem)}this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,i)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),M("displayhcert",e)),!i||i instanceof c||(console.error(i),this.result=i,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}selected(e){console.log(e.target.id),this.selectedDeviceId=e.target.id,this.toggleView(),this.codeReader.reset(),this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,i)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),M("displayhcert",e)),!i||i instanceof c||(console.error(i),this.result=i,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}async exit(){this.codeReader.reset()}}i(V,"styles",[y,s`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(U,V),U="scanqr-result";class G extends o{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANRESULT"),super(),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e){console.log("PRESENT Enter",e),this.qrContent=e.text,this.style.display="block";try{this.hcert=await I.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(i){return void p.myerror("Error verifying credential",i)}try{this.thehtml=function(e){let i=e[1],t="Unrecognized";"v"==i.certType&&(t=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Vaccination</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${i.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${i.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Vaccination details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${i.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${i.certificateIssuer}</div>
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${i.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                    <div class="valor mb-3">${i.vaccineProphylaxis}</div>

                    <div class="etiqueta">Vaccine medicinal product</div>
                    <div class="valor mb-3">${i.medicinalProduct}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${i.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Dose number/Total doses</div>
                    <div class="valor mb-3">${i.doseNumber}/${i.doseTotal}</div>

                    <div class="etiqueta">Date of vaccination</div>
                    <div class="valor mb-3">${i.dateVaccination}</div>

                    <div class="etiqueta">Member State of vaccination</div>
                    <div class="valor">${i.country}</div>
                </div>
            </div>

        </div>
        `);"t"==i.certType&&(t=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Test</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${i.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${i.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Test details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${i.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${i.certificateIssuer}</div>        
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${i.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Name</div>
                    <div class="valor mb-3">${i.typeTest}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${i.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Result</div>
                    <div class="valor mb-3">${i.testResult}</div>

                    <div class="etiqueta">Date/Time of Sample Collection</div>
                    <div class="valor mb-3">${i.timeSample}</div>

                    <div class="etiqueta">Testing Centre</div>
                    <div class="valor">${i.testingCentre}</div>
                </div>
            </div>

        </div>
        `);"r"==i.certType&&(t=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Recovery</div>
        </div>
        
        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${i.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${i.dateOfBirth}</div>
            </div>
        </div>
        
        <div class="container">
            <div class="hcert subtitle">Recovery details</div>
        </div>
        
        <div class="container mb-2 border">
            <div class="row">
              <div class="col">
                <div class="etiqueta mt-3">Disease targeted</div>
              </div>
              <div class="col">
                <div class="valor mt-3">${i.diseaseTargeted}</div>
              </div>
            </div>
        </div>
        
        
        <div class="container border">
        
            <div class="row mb-3">
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Date of positive</div>
                    <div class="valor mb-3">${i.datePositive}</div>
                </div>            
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid from</div>
                    <div class="valor mb-3">${i.dateFrom}</div>
                </div>
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid to</div>
                    <div class="valor">${i.dateUntil}</div>
                </div>
        
            </div>
        
        </div>
        
        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${i.uniqueIdentifier}</strong></div>
        
                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${i.certificateIssuer}</div>        
        
                    <div class="etiqueta">Country of Test</div>
                    <div class="valor">${i.country}</div>        
        
                </div>
        
            </div>
        </div>
        `);return t}(this.hcert)}catch(i){return void p.myerror("Error rendering credential",i)}this.requestUpdate()}async exit(){}}i(G,"styles",[y,s`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(U,G);class O extends o{constructor(){console.log("Inside constructor of PAGE404"),super()}render(){return a`
        <div class="jrmpage w3-container">
            <h1>The page does not exist!</h1>
        </div>
        `}enter(){console.log("Enter page"),this.style.display="block",this.requestUpdate()}}i(O,"styles",[y]),customElements.define("page-404",O);var Q=[{name:"displayhcert",tagName:"div"},{name:"demo",tagName:"demo-page"},{name:"passenger",tagName:"passenger-home"},{name:"verifier",tagName:"scanqr-page"},{name:"scanresult",tagName:"scanqr-result"},{name:"page404",tagName:"page-404"}];document.body.innerHTML="";let q=document.createElement("router-elem");document.body.append(q);for(let J=0;J<Q.length;J++){let e=document.createElement(Q[J].tagName);e.style.display="none",document.body.append(e),K=Q[J].name,H=e,console.log("ROUTER: register page:",K),R.set(K,H)}var K,H,F="displayhcert";if(window.location.search.length>0){let e=new URLSearchParams(window.location.search);null!==e.get("home")?F="passenger":null!==e.get("verifier")?F="verifier":null!==e.get("demo")?F="demo":null!==e.get("admin")?F="admin":null!==e.get("pubcred")?F="pubcreds":p.mywarn("URL parameter not recognised",window.location.search)}console.log("Home_page:",F),T=F;const z="https://safeislandtest.hesusruiz.org";window.addEventListener("load",(async e=>{await async function(){if(console.log("Performing OneTime Initialization"),1!=await async function(e){try{var i=await g.settings.get(e)}catch(t){console.error(t),alert("Error in get setting")}if(null!=i)return i.value}("initialized")){try{await u("apiHost",z)}catch(e){p.myerror("Onetime initialization error")}await u("initialized",!0)}}();let i=window.location.search,t=new URLSearchParams(i),s=t.get("id");if(s){var o="https://api.lanzarotesafe.org/sms/"+s;await requestQRAndDisplay(o,"displayCredentialPage","fromPassengerScan")}else{if(s=t.get("pubid"),s){o="https://safeislandtest.hesusruiz.org/api/verifiable-credential/v1/public/"+s;return console.log("Public Credential",o),void(await requestQRAndDisplay(o,"displayCredentialPage","fromPassengerScan"))}await j()}}));
