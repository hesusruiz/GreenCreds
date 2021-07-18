var e=Object.defineProperty,t=(t,r,o)=>(((t,r,o)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o})(t,"symbol"!=typeof r?r+"":r,o),o);import{D as r,i as o,h as i,T as a,B as n,N as s}from"./vendor.6f639057.js";class d extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,d),this.name="Warning"}}async function l(e,t,...r){var o={timestamp:Date.now(),level:e,desc:t};r.length>0&&(o.more=r);try{await v.logs.add(o)}catch(a){console.error("Error in log add")}if(!(await v.logs.count()<=1e3)){var i=await v.logs.orderBy("id").first();try{await v.logs.delete(i.id)}catch(a){console.error("Error in log prune")}}}var c={mywarn:async function(e,...t){{let r=e;try{r=new d(e).stack}catch{}console.warn(e,...t),l("W",r,...t)}},myerror:async function(e,...t){let r=e;try{r=new Error(e).stack}catch{}console.error(r,...t),l("E",r,...t)},recentLogs:async function(){return await v.logs.reverse().limit(200).toArray()},clearLogs:async function(){await v.logs.clear(),alert("Logs cleared"),location.reload()}};const v=new r("SafeIslandNew");async function w(e,t){try{await v.settings.put({key:e,value:t})}catch(r){console.error(r),alert("Error in put setting")}}v.version(.5).stores({credentials:"hash, timestamp, type",settings:"key",logs:"++id, timestamp"});const p=o`
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
`;class h extends i{constructor(){console.log("Inside constructor of HEADERBAR"),super()}render(){return a`
        <div class="w3-bar w3-xlarge w3-indigo">
          <div class="w3-bar-item" @click=${b}>SafeIsland</div>
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
        `}toggleView(e){this.renderRoot.querySelector("#vertMenu").classList.toggle("w3-show")}}t(h,"styles",[p]),customElements.define("header-bar",h);var m,u=new Map;async function g(e,t){try{for(let[t,o]of u)o.style.display="none",t!==e&&o.exit&&await o.exit(o);let r=u.get(e);void 0===r&&(e="page404"),window.scrollTo(0,0),r.enter?await r.enter(t):r.style.display="block"}catch(r){return void c.myerror(r)}}async function b(){await f(m)}async function f(e,t){t||(t={}),void 0===u.get(e)&&(c.myerror("Target page does not exist: ",e),e="page404"),window.history.pushState({pageName:e,pageData:t},`${e}`),await g(e,t)}window.addEventListener("popstate",(async function(e){var t=m,r=void 0,o=e.state;null!=o&&(t=o.pageName,r=o.pageData),console.log("Popstate: ",t),await g(t,r)}));class y extends i{constructor(){console.log("Inside constructor of ROUTER"),super()}render(){return console.log("Rendering ROUTER"),a`
        <header-bar></header-bar>
        `}}t(y,"styles",[p]);customElements.define("router-elem",y);class x{constructor(){}static async fromJWK(e){const t=e.kty;let r;if("EC"==t)r={name:"ECDSA",namedCurve:"P-256"};else{if("RSA"!=t)throw new Error(`Invalid key type specified: ${e.kty}`);r={name:"RSA-PSS",hash:"SHA-256"}}let o=e.d?["sign"]:["verify"];return await crypto.subtle.importKey("jwk",e,r,!0,o)}static async generateECDSAKeyPair(){return await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"])}static async generateEncryptionKey(){return await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}static async exportToJWK(e){return await crypto.subtle.exportKey("jwk",e)}static async exportToPEM(e){return await crypto.subtle.exportKey("spki",e)}static async importFromPEMRaw(e){const t=window.atob(e);console.log(t);const r=function(e){const t=new ArrayBuffer(e.length),r=new Uint8Array(t);for(let o=0,i=e.length;o<i;o++)r[o]=e.charCodeAt(o);return t}(t);return console.log(r),await crypto.subtle.importKey("spki",r,{name:"ECDSA",namedCurve:"P-256"},!0,["verify"])}static async sign(e,t){if("private"!=e.type)throw new Error("Not a private key");return await window.crypto.subtle.sign({name:"ECDSA",hash:{name:"SHA-256"}},e,t)}static async verify(e,t,r){if("public"!=e.type)throw new Error("Not a public key");let o;console.log("Inside VERIFY",e);try{o=await window.crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-256"}},e,t,r)}catch(i){throw`Verification of payload failed: ${i}`}return console.log("Result:",o),o}static async encryptMessage(e,t){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");let r=crypto.getRandomValues(new Uint8Array(12));return{iv:r,ciphertext:await crypto.subtle.encrypt({name:"AES-GCM",iv:r},e,t)}}static async decryptMessage(e,t,r){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");return await window.crypto.subtle.decrypt({name:"AES-GCM",iv:t},e,r)}}const k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];var E;var I={publicKeys:void 0,init:async function(){if(void 0===this.publicKeys)try{let e=await fetch("src/assets/all_jwk_keys.json");this.publicKeys=await e.json(),await w("publicKeys",this.publicKeys)}catch(e){throw"ERROR getting the Trusted List"}},get:async function(e){if(await this.init(),!e)throw"kid is undefined";let t=this.publicKeys[e];if(void 0===t)throw`Entry not found for kid: ${e}`;let r=t.jwk;if(void 0===r)throw`Entry for kid: ${e} des not have jwk`;return r}},C={valueSets:void 0,init:async function(e=!1){try{let e=await fetch("src/assets/value-sets.json");this.valueSets=await e.json(),await w("valueSets",this.valueSets)}catch(t){throw console.log("ERROR getting the value sets",t),"ERROR getting the value sets"}},get:function(e,t){if(!e)return"N/A";let r=this.valueSets[t];if(!r)return e;let o=r.valueSetValues;if(!o)return e;let i=o[e];return i?i.display:e}};new TextEncoder,new TextDecoder;var q=new Map;q.set(-7,"ES256"),q.set(-37,"RSA");const T=class{static encode(e){var t,r=new ArrayBuffer(256),o=new DataView(r),i=0;function a(e){for(var a=r.byteLength,n=i+e;a<n;)a<<=1;if(a!==r.byteLength){var s=o;r=new ArrayBuffer(a),o=new DataView(r);for(var d=i+3>>2,l=0;l<d;++l)o.setUint32(l<<2,s.getUint32(l<<2))}return t=e,o}function n(){i+=t}function s(e){n(a(1).setUint8(i,e))}function d(e){for(var t=a(e.length),r=0;r<e.length;++r)t.setUint8(i+r,e[r]);n()}function l(e,t){var r;t<24?s(e<<5|t):t<256?(s(e<<5|24),s(t)):t<65536?(s(e<<5|25),r=t,n(a(2).setUint16(i,r))):t<4294967296?(s(e<<5|26),function(e){n(a(4).setUint32(i,e))}(t)):(s(e<<5|27),function(e){var t=e%POW_2_32,r=(e-t)/POW_2_32,o=a(8);o.setUint32(i,r),o.setUint32(i+4,t),n()}(t))}return function e(t){var r;if(!1===t)return s(244);if(!0===t)return s(245);if(null===t)return s(246);if(void 0===t)return s(247);switch(typeof t){case"number":if(Math.floor(t)===t){if(0<=t&&t<=POW_2_53)return l(0,t);if(-POW_2_53<=t&&t<0)return l(1,-(t+1))}return s(251),function(e){n(a(8).setFloat64(i,e))}(t);case"string":var o=[];for(r=0;r<t.length;++r){var c=t.charCodeAt(r);c<128?o.push(c):c<2048?(o.push(192|c>>6),o.push(128|63&c)):c<55296?(o.push(224|c>>12),o.push(128|c>>6&63),o.push(128|63&c)):(c=(1023&c)<<10,c|=1023&t.charCodeAt(++r),c+=65536,o.push(240|c>>18),o.push(128|c>>12&63),o.push(128|c>>6&63),o.push(128|63&c))}return l(3,o.length),d(o);default:var v;if(Array.isArray(t))for(l(4,v=t.length),r=0;r<v;++r)e(t[r]);else if(t instanceof Uint8Array)l(2,t.length),d(t);else if(t instanceof Map){l(5,v=t.size);for(let[r,o]of t)e(r),e(o)}else{var w=Object.keys(t);for(l(5,v=w.length),r=0;r<v;++r){var p=w[r];e(p),e(t[p])}}}}(e),r.slice(0,i)}static async verifyCWT(e,t){let[r,o,i,a]=T.decode(e);const n=["Signature1",r,new Uint8Array(0),i];let s=T.encode(n),d=!1;try{d=await x.verify(t,a,s),console.log("VERIFIED:",d)}catch(l){console.log("ERROR:",l)}return d}static decode(e,t,r){var o=new DataView(e),i=0;function a(e,t){return i+=e,t}function n(t){return a(t,new Uint8Array(e,i,t))}function s(){return a(1,o.getUint8(i))}function d(){return a(2,o.getUint16(i))}function l(){return a(4,o.getUint32(i))}function c(){return 255===o.getUint8(i)&&(i+=1,!0)}function v(e){if(e<24)return e;if(24===e)return s();if(25===e)return d();if(26===e)return l();if(27===e)return l()*POW_2_32+l();if(31===e)return-1;throw"Invalid length encoding"}function w(e){var t=s();if(255===t)return-1;var r=v(31&t);if(r<0||t>>5!==e)throw"Invalid indefinite length element";return r}function p(e,t){for(var r=0;r<t;++r){var o=s();128&o&&(o<224?(o=(31&o)<<6|63&s(),t-=1):o<240?(o=(15&o)<<12|(63&s())<<6|63&s(),t-=2):(o=(15&o)<<18|(63&s())<<12|(63&s())<<6|63&s(),t-=3)),o<65536?e.push(o):(o-=65536,e.push(55296|o>>10),e.push(56320|1023&o))}}"function"!=typeof t&&(t=function(e){return e}),"function"!=typeof r&&(r=function(){});var h=function e(){var l,h,m=s(),u=m>>5,g=31&m;if(7===u)switch(g){case 25:return function(){var e=new ArrayBuffer(4),t=new DataView(e),r=d(),o=32768&r,i=31744&r,a=1023&r;if(31744===i)i=261120;else if(0!==i)i+=114688;else if(0!==a)return(o?-1:1)*a*POW_2_24;return t.setUint32(0,o<<16|i<<13|a<<13),t.getFloat32(0)}();case 26:return a(4,o.getFloat32(i));case 27:return a(8,o.getFloat64(i))}if((h=v(g))<0&&(u<2||6<u))throw"Invalid length";switch(u){case 0:return h;case 1:return-1-h;case 2:if(h<0){for(var b=[],f=0;(h=w(u))>=0;)f+=h,b.push(n(h));var y=new Uint8Array(f),x=0;for(l=0;l<b.length;++l)y.set(b[l],x),x+=b[l].length;return y}return n(h);case 3:var k=[];if(h<0)for(;(h=w(u))>=0;)p(k,h);else p(k,h);return String.fromCharCode.apply(null,k);case 4:var E;if(h<0)for(console.log("INDEFINITE LENGTH ARRAY"),E=[];!c();)E.push(e());else for(E=new Array(h),l=0;l<h;++l)E[l]=e();return E;case 5:var I=new Map;for(l=0;l<h||h<0&&!c();++l){var C=e();I.set(C,e())}return I;case 6:return t(e(),h);case 7:switch(h){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return r(h)}}}();if(i!==e.byteLength)throw"Remaining bytes";return h}static async decodeCWT(e,t){var r=new DataView(e).getUint8(0),o=r>>5,i=31&r;if(6!=o)throw new Error(`COSE object must start with a tag: ${o}`);if(18!=i)throw new Error(`Not a COSE Single signature, tag: ${i}`);e=e.slice(1);let[a,n,s,d]=T.decode(e),l=function(e,t){let r=e.slice(),o=T.decode(r.buffer),i=o.get(1);if(void 0===i)throw"Missing algorithm in protected headers";let a=q.get(i);if(void 0===a)throw`Invalid algorithm specified: ${i}`;let n={};n.alg=a;let s=o.get(4);if(void 0===s&&(s=t.get(4)),void 0===s)throw"Missing kid in headers";let d="";for(let l=0;l<s.length;l++)d+=String.fromCodePoint(s[l]);return d=window.btoa(d),n.kid=d,n}(a,n),c=!1;if(t){let t=l.kid,r=await I.get(t),o=await x.fromJWK(r);c=await T.verifyCWT(e,o)}return s=function(e){e=e.slice();let t=T.decode(e.buffer);e={};for(let[n,s]of t)switch(n){case 1:e.iss=s;break;case 2:e.sub=s;break;case 3:e.aud=s;break;case 4:e.exp=s;break;case 5:e.nbf=s;break;case 6:e.iat=s;break;case 7:e.cti=s}let r=t.get(-260);if(null==r)throw"No hcert found";let o,i=r.get(1);if(null==i)throw"No EU COVID certificate found";try{e.version=i.get("ver"),e.foreName=i.get("nam").get("fn"),e.givenName=i.get("nam").get("gn"),e.fullName=e.foreName+", "+e.givenName,e.dateOfBirth=i.get("dob")}catch(a){throw`Error accessing required common fields: ${a}`}if(i.get("v"))e.certType="v",o=i.get("v")[0];else if(i.get("r"))e.certType="r",o=i.get("r")[0];else{if(!i.get("t"))throw"Invalid EU COVID certificate type";e.certType="t",o=i.get("t")[0]}return"v"===e.certType?(e.diseaseTargeted=C.get(o.get("tg"),"disease-agent-targeted"),e.vaccineProphylaxis=C.get(o.get("vp"),"vaccine-prophylaxis"),e.medicinalProduct=C.get(o.get("mp"),"vaccine-medicinal-product"),e.manufacturer=C.get(o.get("ma"),"vaccine-mah-manf"),e.doseNumber=o.get("dn"),e.doseTotal=o.get("sd"),e.dateVaccination=o.get("dt"),e.country=C.get(o.get("co"),"country-2-codes"),e.certificateIssuer=o.get("is"),e.uniqueIdentifier=o.get("ci")):"t"===e.certType?(e.diseaseTargeted=C.get(o.get("tg"),"disease-agent-targeted"),e.typeTest=C.get(o.get("tt"),"test-type"),e.testName=o.get("nm"),e.manufacturer=C.get(o.get("ma"),"test-manf"),e.timeSample=o.get("sc"),e.testResult=C.get(o.get("tr"),"test-result"),e.testingCentre=o.get("tc"),e.country=C.get(o.get("co"),"country-2-codes"),e.certificateIssuer=o.get("is"),e.uniqueIdentifier=o.get("ci")):"r"===e.certType&&(e.diseaseTargeted=C.get(o.get("tg"),"disease-agent-targeted"),e.datePositive=o.get("fr"),e.dateFrom=o.get("df"),e.dateUntil=o.get("du"),e.country=C.get(o.get("co"),"country-2-codes"),e.certificateIssuer=o.get("is"),e.uniqueIdentifier=o.get("ci")),e}(s),console.log("Payload:",s),[l,s,d,c]}static async decodeHC1QR(e,t=!1){if(!e.startsWith("HC1:"))throw"Certificate does not start with 'HC1:'";let r=function(e){if(null==e)throw new Error("utf8StringArg is null or undefined.");if(0===e.length)return[];var t=e.length%3;if(1===t)throw new Error("utf8StringArg has incorrect length.");if(void 0===E){E={};for(let e=0;e<k.length;++e)E[k[e]]=e}const r=new Array(e.length);for(let s=0;s<e.length;++s){const t=E[e[s]];if(void 0===t)throw new Error("Invalid character at position ".concat(s).concat("."));r[s]=t}const o=Math.trunc(r.length/3);var i=new Array(2*o+(2===t?1:0)),a=0;const n=3*o;for(let s=0;s<n;){const e=r[s++]+45*r[s++]+2025*r[s++];i[a++]=Math.trunc(e/256),i[a++]=e%256}return 0===t||(i[i.length-1]=r[r.length-2]+45*r[r.length-1]),i}(e=e.slice(4));r=new Uint8Array(r);let o=pako.inflate(r),[i,a,n,s]=await T.decodeCWT(o.buffer,t);return[i,a,n,s]}static displayMB(e){var t=e>>5,r=31&e;switch(7===t&&console.log("FLOAT"),t){case 0:return void console.log(`Integer ${r}`);case 1:return void console.log("Negative Integer "+(-1-r));case 2:return console.log(`Bstr ${r}`),`Bstr ${r}`;case 3:return void console.log(`String ${r}`);case 4:return void console.log(`Array ${r}`);case 5:return void console.log(`Map ${r}`);case 6:return void console.log(`Tag ${r}`);case 7:switch(r){case 20:return void console.log("FALSE");case 21:return void console.log("TRUE");case 22:return void console.log("NULL");case 23:return void console.log("UNDEFINED");default:return void console.log("Simple Value")}}}};let $=T;t($,"POW_2_24",5.960464477539063e-8),t($,"POW_2_32",4294967296),t($,"POW_2_53",Number.MAX_SAFE_INTEGER);class D extends i{constructor(){console.log("Inside constructor of JRMPAGE"),super()}enter(){console.log("Enter JRMPAGE"),this.style.display="block",this.requestUpdate()}}t(D,"styles",[p]);const A=class extends D{constructor(){console.log("Inside constructor of DEMO PAGE"),super()}render(){return a`
        <!-- =========================================== -->
        <!-- PASSENGER HOME                              -->
        <!-- =========================================== -->
        <div class="w3-container">
            <h2>You do not have any credentials yet</h2>
            <p>Click the button below to add credentials</p>
        </div>
        <div class="plus radius w3-card-4 fab"></div>
        `}enter(){console.log("Enter page DEMO"),this.style.display="block",this.requestUpdate()}};let S=A;t(S,"styles",[A.styles,o`
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
        `]),customElements.define("passenger-home",S);customElements.define("demo-page",class extends D{static get properties(){return{perico1:{type:Object},perico2:{attribute:!1}}}constructor(){console.log("Inside constructor of DEMO PAGE"),super(),this.perico1="default 111111",this.perico2="default 222222"}render(){return a`
        <!-- =========================================== -->
        <!-- HOME PAGE for demos. It has several roles   -->
        <!-- and the user can choose                     -->
        <!-- =========================================== -->
        
        <div class="w3-container">
            <a @click=${()=>f("passenger")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a @click=${()=>f("verifier")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>
            
            <a @click=${()=>f("issuerHome")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a @click=${()=>f("pubcreds")}>
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a @click=${()=>f("admin")}>
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
        </div>
        `}enter(){console.log("Enter page DEMO",this.perico1,this.perico2),this.style.display="block",this.requestUpdate()}});var R="scanqr-page";class N extends i{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANQR"),super(),this.codeReader=new n,this.videoInputDevices=[],this.selectedDeviceId=void 0,this.selectHtml=a``,this.resultObj=void 0,this.result=void 0,this.videoElem=void 0}render(){return a`
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
            `),e}async enter(){if(console.log("SCANQR Enter",this.clientWidth),this.style.display="block",this.result=void 0,void 0===this.videoElem){let r={video:{facingMode:"environment"}};try{var e=await navigator.mediaDevices.getUserMedia(r)}catch(t){if(t instanceof NotAllowedError)throw t;if(t instanceof NotFoundError)throw t}let o=e.getVideoTracks()[0].getSettings().deviceId;this.selectedDeviceId=o,this.videoInputDevices=await this.codeReader.listVideoInputDevices();let i=this.renderRoot.querySelector("#videoPlaceholder");this.videoElem=document.createElement("video"),this.videoElem.style.width="100%",i.append(this.videoElem)}this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,t)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),f("scanresult",e)),!t||t instanceof s||(console.error(t),this.result=t,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}selected(e){console.log(e.target.id),this.selectedDeviceId=e.target.id,this.toggleView(),this.codeReader.reset(),this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,t)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),f("scanresult",e)),!t||t instanceof s||(console.error(t),this.result=t,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}async exit(){this.codeReader.reset()}}t(N,"styles",[p,o`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(R,N),R="scanqr-result";class P extends i{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANRESULT"),super(),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e){console.log("PRESENT Enter",e),this.qrContent=e.text,this.style.display="block";try{this.hcert=await $.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(t){return void c.myerror("Error verifying credential",t)}try{this.thehtml=function(e){let t=e[1],r="Unrecognized";"v"==t.certType&&(r=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Vaccination</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${t.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${t.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Vaccination details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${t.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${t.certificateIssuer}</div>
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${t.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                    <div class="valor mb-3">${t.vaccineProphylaxis}</div>

                    <div class="etiqueta">Vaccine medicinal product</div>
                    <div class="valor mb-3">${t.medicinalProduct}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${t.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Dose number/Total doses</div>
                    <div class="valor mb-3">${t.doseNumber}/${t.doseTotal}</div>

                    <div class="etiqueta">Date of vaccination</div>
                    <div class="valor mb-3">${t.dateVaccination}</div>

                    <div class="etiqueta">Member State of vaccination</div>
                    <div class="valor">${t.country}</div>
                </div>
            </div>

        </div>
        `);"t"==t.certType&&(r=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Test</div>
        </div>

        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${t.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${t.dateOfBirth}</div>
            </div>
        </div>

        <div class="container">
            <div class="hcert subtitle">Test details</div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${t.uniqueIdentifier}</strong></div>

                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${t.certificateIssuer}</div>        
                </div>

            </div>
        </div>

        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                </div>
                <div class="col">
                    <div class="valor mt-3">${t.diseaseTargeted}</div>
                </div>
            </div>
        </div>

        <div class="container border">

            <div class="row mb-3">

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Name</div>
                    <div class="valor mb-3">${t.typeTest}</div>

                    <div class="etiqueta">Manufacturer</div>
                    <div class="valor">${t.manufacturer}</div>

                </div>

                <div class="col-sm">
                    <div class="etiqueta mt-3">Test Result</div>
                    <div class="valor mb-3">${t.testResult}</div>

                    <div class="etiqueta">Date/Time of Sample Collection</div>
                    <div class="valor mb-3">${t.timeSample}</div>

                    <div class="etiqueta">Testing Centre</div>
                    <div class="valor">${t.testingCentre}</div>
                </div>
            </div>

        </div>
        `);"r"==t.certType&&(r=a`
        <div class="container mb-2 border bg-light">
            <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
            <div class="hcert subtitle">Recovery</div>
        </div>
        
        <div class="container mb-2 border">
            <div class="mb-2">
                <div class="etiqueta mt-3">Name</div>
                <div class="valor mb-3">${t.fullName}</div>
            </div>
            <div>
                <div class="etiqueta">Date of birth</div>
                <div class="valor">${t.dateOfBirth}</div>
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
                <div class="valor mt-3">${t.diseaseTargeted}</div>
              </div>
            </div>
        </div>
        
        
        <div class="container border">
        
            <div class="row mb-3">
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Date of positive</div>
                    <div class="valor mb-3">${t.datePositive}</div>
                </div>            
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid from</div>
                    <div class="valor mb-3">${t.dateFrom}</div>
                </div>
        
                <div class="col-sm">
                    <div class="etiqueta mt-3">Valid to</div>
                    <div class="valor">${t.dateUntil}</div>
                </div>
        
            </div>
        
        </div>
        
        <div class="container mb-2 border">
            <div class="row">
                <div class="col">
                    <div class="etiqueta mt-3">Certificate identifier</div>
                    <div class="etiqueta mb-3 text-break"><strong>${t.uniqueIdentifier}</strong></div>
        
                    <div class="etiqueta">Certificate issuer</div>
                    <div class="valor">${t.certificateIssuer}</div>        
        
                    <div class="etiqueta">Country of Test</div>
                    <div class="valor">${t.country}</div>        
        
                </div>
        
            </div>
        </div>
        `);return r}(this.hcert)}catch(t){return void c.myerror("Error rendering credential",t)}this.requestUpdate()}async exit(){}}t(P,"styles",[p,o`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(R,P);class U extends i{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANRESULT"),super(),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e){console.log("PRESENT Enter",e),this.qrContent="HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355",this.style.display="block";try{this.hcert=await $.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(t){return void c.myerror("Error verifying credential",t)}try{this.thehtml=this.renderDetail(this.hcert)}catch(t){return void c.myerror("Error rendering credential",t)}this.requestUpdate()}async exit(){}toggleView(e){this.renderRoot.querySelector(e).classList.toggle("w3-show")}renderDetail(e){let t=e[1],r="Unrecognized";return"v"==t.certType&&(r=a`
                
            <section class="section">
                <div class="subsection">
                    <img class="" width="60px" src="src/assets/eulogo.png" alt="EUlogo">
                    <h4 style="display: inline-block"><b>EU COVID CERTIFICATE</b></h4>
                </div>
                <div class="subsection">
                    <h4 class="w3-center"><b>Vaccination</b></h4>
                </div>
            </section>
            
            <div class="container">
                <section class="section">
                    <div class="subsection">
                        <div class="etiqueta">Name</div>
                        <div class="valor">${t.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Date of birth</div>
                        <div class="valor">${t.dateOfBirth}</div>
                    </div>
                </section>
                
                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">Dose number/Total doses</div>
                        <div class="valor">${t.doseNumber}/${t.doseTotal}</div>
                    </div>
        
                    <div class="subsection">
                        <div class="etiqueta">Date of vaccination</div>
                        <div class="valor">${t.dateVaccination}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">Member State of vaccination</div>
                        <div class="valor">${t.country}</div>
                    </div>
                </div>
                
                <button @click=${()=>this.toggleView("#expandableSection")} class="w3-btn w3-block w3-black w3-left-align">Details</button>
            
                <section id="expandableSection" class="section w3-hide">

                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta mt-3">Disease targeted</div>
                            <div class="valor mt-3">${t.diseaseTargeted}</div>
                        </div>
                    </section>

                    <div class="section">
                
                        <div class="subsection">
                            <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                            <div class="valor mb-3">${t.vaccineProphylaxis}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Vaccine medicinal product</div>
                            <div class="valor mb-3">${t.medicinalProduct}</div>
                        </div>
                
                        <div class="subsection">
                            <div class="etiqueta">Manufacturer</div>
                            <div class="valor">${t.manufacturer}</div>            
                        </div>
                
                    </div>
                    <section class="section">
                        <div class="subsection">
                            <div class="etiqueta">Certificate identifier</div>
                            <div class="valor text-break">${t.uniqueIdentifier}</div>
                        </div>
                        <div class="subsection">
                            <div class="etiqueta">Certificate issuer</div>
                            <div class="valor">${t.certificateIssuer}</div>                
                        </div>
                    </section>
                                
                </section>
            </div>
            `),"t"==t.certType&&(r=a`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Test</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${t.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${t.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Test details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${t.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${t.certificateIssuer}</div>
                    </div>
            
                </div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${t.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Name</div>
                        <div class="valor mb-3">${t.typeTest}</div>
            
                        <div class="etiqueta">Manufacturer</div>
                        <div class="valor">${t.manufacturer}</div>
            
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Result</div>
                        <div class="valor mb-3">${t.testResult}</div>
            
                        <div class="etiqueta">Date/Time of Sample Collection</div>
                        <div class="valor mb-3">${t.timeSample}</div>
            
                        <div class="etiqueta">Testing Centre</div>
                        <div class="valor">${t.testingCentre}</div>
                    </div>
                </div>
            
            </div>
            `),"r"==t.certType&&(r=a`
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Recovery</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${t.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${t.dateOfBirth}</div>
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
                        <div class="valor mt-3">${t.diseaseTargeted}</div>
                    </div>
                </div>
            </div>
            
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Date of positive</div>
                        <div class="valor mb-3">${t.datePositive}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid from</div>
                        <div class="valor mb-3">${t.dateFrom}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid to</div>
                        <div class="valor">${t.dateUntil}</div>
                    </div>
            
                </div>
            
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${t.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${t.certificateIssuer}</div>
            
                        <div class="etiqueta">Country of Test</div>
                        <div class="valor">${t.country}</div>
            
                    </div>
            
                </div>
            </div>
            `),r}}t(U,"styles",[p,o`
        .container{padding:0.01em 16px}
        .section{padding:0.01em 16px;margin-top:0px;margin-bottom:16px;border:1px solid #ccc}
        .valor{font-weight:600}
        `]),customElements.define("display-hcert",U);class L extends i{constructor(){console.log("Inside constructor of PAGE404"),super()}render(){return a`
        <div class="jrmpage w3-container">
            <h1>The page does not exist!</h1>
        </div>
        `}enter(){console.log("Enter page"),this.style.display="block",this.requestUpdate()}}t(L,"styles",[p]),customElements.define("page-404",L);var O=[{name:"demo",tagName:"demo-page"},{name:"passenger",tagName:"passenger-home"},{name:"verifier",tagName:"scanqr-page"},{name:"scanresult",tagName:"scanqr-result"},{name:"displayhcert",tagName:"display-hcert"},{name:"page404",tagName:"page-404"}];let V=document.createElement("router-elem");document.body.replaceChildren(V);for(let B=0;B<O.length;B++){let e=document.createElement(O[B].tagName);e.style.display="none",document.body.append(e),M=O[B].name,F=e,console.log("ROUTER: register page:",M),u.set(M,F)}var M,F,K="displayhcert";if(window.location.search.length>0){let e=new URLSearchParams(window.location.search);null!==e.get("home")?K="passenger":null!==e.get("verifier")?K="verifierScanQR":null!==e.get("demo")?K="demo":null!==e.get("admin")?K="admin":null!==e.get("pubcred")?K="pubcreds":c.mywarn("URL parameter not recognised",window.location.search)}console.log("Home_page:",K),m=K;const z="https://safeislandtest.hesusruiz.org";window.addEventListener("load",(async e=>{await async function(){if(console.log("Performing OneTime Initialization"),await I.init(),await C.init(),1!=await async function(e){try{var t=await v.settings.get(e)}catch(r){console.error(r),alert("Error in get setting")}if(null!=t)return t.value}("initialized")){try{await w("apiHost",z)}catch(e){c.myerror("Onetime initialization error")}await w("initialized",!0)}}();let t=window.location.search,r=new URLSearchParams(t),o=r.get("id");if(o){var i="https://api.lanzarotesafe.org/sms/"+o;await requestQRAndDisplay(i,"displayCredentialPage","fromPassengerScan")}else{if(o=r.get("pubid"),o){i="https://safeislandtest.hesusruiz.org/api/verifiable-credential/v1/public/"+o;return console.log("Public Credential",i),void(await requestQRAndDisplay(i,"displayCredentialPage","fromPassengerScan"))}await b()}}));
