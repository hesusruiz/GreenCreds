var e=Object.defineProperty,t=(t,r,i)=>(((t,r,i)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i})(t,"symbol"!=typeof r?r+"":r,i),i);import{D as r,i,h as o,T as a,B as d,N as s}from"./vendor.6f639057.js";class c extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,c),this.name="Warning"}}async function n(e,t,...r){var i={timestamp:Date.now(),level:e,desc:t};r.length>0&&(i.more=r);try{await v.logs.add(i)}catch(a){console.error("Error in log add")}if(!(await v.logs.count()<=1e3)){var o=await v.logs.orderBy("id").first();try{await v.logs.delete(o.id)}catch(a){console.error("Error in log prune")}}}var l={mywarn:async function(e,...t){{let r=e;try{r=new c(e).stack}catch{}console.warn(e,...t),n("W",r,...t)}},myerror:async function(e,...t){let r=e;try{r=new Error(e).stack}catch{}console.error(r,...t),n("E",r,...t)},recentLogs:async function(){return await v.logs.reverse().limit(200).toArray()},clearLogs:async function(){await v.logs.clear(),alert("Logs cleared"),location.reload()}};const v=new r("SafeIslandNew");async function w(e,t){try{await v.settings.put({key:e,value:t})}catch(r){console.error(r),alert("Error in put setting")}}v.version(.5).stores({credentials:"hash, timestamp, type",settings:"key",logs:"++id, timestamp"});const p=i`
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
`;class h extends o{constructor(){console.log("Inside constructor of HEADERBAR"),super()}render(){return a`
        <div class="w3-bar w3-xlarge w3-indigo">
          <div class="w3-bar-item" @click=${m}>SafeIsland</div>
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
        `}toggleView(e){this.renderRoot.querySelector("#vertMenu").classList.toggle("w3-show")}}t(h,"styles",[p]),customElements.define("header-bar",h);var g,k=new Map;async function u(e,t){try{for(let[t,i]of k)i.style.display="none",t!==e&&i.exit&&await i.exit(i);let r=k.get(e);void 0===r&&(e="page404"),window.scrollTo(0,0),r.enter?await r.enter(t):r.style.display="block"}catch(r){return void l.myerror(r)}}async function m(){await b(g)}async function b(e,t){t||(t={}),void 0===k.get(e)&&(l.myerror("Target page does not exist: ",e),e="page404"),window.history.pushState({pageName:e,pageData:t},`${e}`),await u(e,t)}window.addEventListener("popstate",(async function(e){var t=g,r=void 0,i=e.state;null!=i&&(t=i.pageName,r=i.pageData),console.log("Popstate: ",t),await u(t,r)}));class f extends o{constructor(){console.log("Inside constructor of ROUTER"),super()}render(){return console.log("Rendering ROUTER"),a`
        <header-bar></header-bar>
        `}}t(f,"styles",[p]);customElements.define("router-elem",f);var y={"0L7AaIwu+EY=":{co:"DE",kid:"0L7AaIwu+EY=",jwk:{kty:"EC","x5t#S256":"0L7AaIwu-EbkrTSIRA5WLXt7ylS-tCXSLfXKTu-wMH4",use:"sig",crv:"P-256",kid:"0L7AaIwu+EY=",x:"UdPPsk9xzY1vM1zdjgvHDsRCST55Y9SJBJUXI5uqGb4",y:"nJKU-8UBRm5vlhkLhSfRNMN2csqm_T_27DCUJiZK6ZI"}},"1+da8dKEjlE=":{co:"DE",kid:"1+da8dKEjlE=",jwk:{kty:"EC","x5t#S256":"1-da8dKEjlG3e33N-3hzXGwTVPpwtE6ZO-0MR6W3XLY",use:"sig",crv:"P-256",kid:"1+da8dKEjlE=",x:"qD56CIMWer5HDRhCpUrq5lZ6F8WrFPy_IDwjgb44oE0",y:"gRC5NcQW4178-5Ej6X946ePMDyO1li3Mf1eStQOqGzQ"}},"2BGoyFIyYPs=":{co:"DE",kid:"2BGoyFIyYPs=",jwk:{kty:"EC","x5t#S256":"2BGoyFIyYPvvSNrVQKxtVzAxLVXJJcAvsrb-bgk45kg",use:"sig",crv:"P-256",kid:"2BGoyFIyYPs=",x:"tGEETBc2arnjxxBWO3aDW-rwFgwmhqPbxhaUuOEC6kk",y:"Hdxj4ZlzxWCrZhTOCEA49Qn6rtmyB2ukahfbhDG7ccE"}},"2JelGO/ymxQ=":{co:"DE",kid:"2JelGO/ymxQ=",jwk:{kty:"EC","x5t#S256":"2JelGO_ymxTkn_NAT7T9ump9DpveX44uzauJdlTvNUM",use:"sig",crv:"P-256",kid:"2JelGO/ymxQ=",x:"eL12fn7-nUNW-9T9zJLaiZF18rfzL1I735fT-3zuKrw",y:"kdytqDCDAQxW66y1b2t1HjhGWs_rFMFClhzINh4ELbY"}},"3LCRmucB9kU=":{co:"DE",kid:"3LCRmucB9kU=",jwk:{kty:"EC","x5t#S256":"3LCRmucB9kXIskHtE2CqQuz82j7x1mtN60qYFeJN2Tg",use:"sig",crv:"P-256",kid:"3LCRmucB9kU=",x:"tgz2ifmTj_vZbBaz6xlNCdQlw4FQU7v3dUrJYQEigk4",y:"C8_HWNXN6Rs2Dt90464Df0J_sh2mDB5evtOhpOwLlus"}},"3jqajzfHpKE=":{co:"DE",kid:"3jqajzfHpKE=",jwk:{kty:"EC","x5t#S256":"3jqajzfHpKHtVFGoUOJWH-tzuACc061HQ4vH5bBhomE",use:"sig",crv:"P-256",kid:"3jqajzfHpKE=",x:"8nZrLqMlw5EvdfvJXgxb2rXj9OBT2UWBqAFLeCoQXuY",y:"PmDmSaVLS-MBUBzBj278qFr73H1ra892Vx8GmooEBvw"}},"3lrBUHc4iQE=":{co:"DE",kid:"3lrBUHc4iQE=",jwk:{kty:"EC","x5t#S256":"3lrBUHc4iQFFT4ijNwQ0XQ3JBXYGflkGmvw8IPBqCqE",use:"sig",crv:"P-256",kid:"3lrBUHc4iQE=",x:"71N2pH6YyC6gfUHwiEJDzIxwMIW_Hs-Cgn_gPQbZAkE",y:"XMl_y0xNo9oGQ_IS7OeUxK00yqJLx5KxDlrR2JCA4ck"}},"3oYtiEZ9wp4=":{co:"DE",kid:"3oYtiEZ9wp4=",jwk:{kty:"EC","x5t#S256":"3oYtiEZ9wp7-LJlqmCoXomD__1zifwmgzNUYOy4DrH0",use:"sig",crv:"P-256",kid:"3oYtiEZ9wp4=",x:"5sqOpW4x66Hmcposox406LFRWyGIvH2CA-Di7pgvWYI",y:"CS1-7KExN-mCsed7z2EVISrc3sSe5yPdDLQpYOjbEwM"}},"5xtSr6KkAGA=":{co:"DE",kid:"5xtSr6KkAGA=",jwk:{kty:"EC","x5t#S256":"5xtSr6KkAGCKZUV0K9U2AYQPgxpC8Tfgkpum3cs7vxg",use:"sig",crv:"P-256",kid:"5xtSr6KkAGA=",x:"zma5iz5ZBIh1KDZhj9fSnqJoKK9weOGB_91w6FpdAUg",y:"xRChg6YY_zHRkX1a6P4Esh0YaWkIIWSV0QxAjrkgM6k"}},"6FNkACSMLEc=":{co:"DE",kid:"6FNkACSMLEc=",jwk:{kty:"EC","x5t#S256":"6FNkACSMLEcjKozFVKIjAQ7G0cCj3LxgjtX_hEnNmQc",use:"sig",crv:"P-256",kid:"6FNkACSMLEc=",x:"8xghqNrE21susvTQHV9fwN3RWhBIdCYBu3laCz66Nas",y:"Ksqrk-OzyV7jon0lIjWNv6jsg7rtAHvDCiB3lJjecHQ"}},"6VdOPLF8/Fg=":{co:"DE",kid:"6VdOPLF8/Fg=",jwk:{kty:"EC","x5t#S256":"6VdOPLF8_Fh3xVqjvoX56hVYN3YXa7WtPE0A5S9-ibI",use:"sig",crv:"P-256",kid:"6VdOPLF8/Fg=",x:"HrXK9pJSpMrEB4xUrXTTnb7RakIRzDtNh6ugnjfV510",y:"zRbLuayqKSWGAzpPwX8uTMjboOpw95EklFMucnj64Jg"}},"7XLhQx1KXdQ=":{co:"DE",kid:"7XLhQx1KXdQ=",jwk:{kty:"EC","x5t#S256":"7XLhQx1KXdTDHuhabTJrmpuyrTe1wyGo7BUYX-nTCVA",use:"sig",crv:"P-256",kid:"7XLhQx1KXdQ=",x:"kkxNdS0EZvjP8j17j2k92vHZpX3qSNMDbCqBYPvmqzg",y:"9Y5zRKrAGUqfLqacKEoYJkD3VEpguY70miND4iEVCYY"}},"8AnF/hcilSo=":{co:"DE",kid:"8AnF/hcilSo=",jwk:{kty:"EC","x5t#S256":"8AnF_hcilSrBZdnzWKGe0JqqYbbN_fBXjLDJUrGhb48",use:"sig",crv:"P-256",kid:"8AnF/hcilSo=",x:"Ol2NFM-2gkakrrAa7g-F7KOXRziS4ydbxiNbm3XTu-I",y:"_Sz_qEijCzniTgXIyQN0aq6gIln6DK4lhndC0WDOk1k"}},"9IZVOkJRZPQ=":{co:"DE",kid:"9IZVOkJRZPQ=",jwk:{kty:"EC","x5t#S256":"9IZVOkJRZPQlcH_i8mu2ajp4NFhgQ35P4zUfZxac8W0",use:"sig",crv:"P-256",kid:"9IZVOkJRZPQ=",x:"65QJlG4NQ1UKM3_5Yf6n9u430S0gtEarOF4e-WrILwU",y:"GppLDtsyX0oAMFyVdmc83pzUZpdYhX33X-Fe8sc4C1M"}},"9v3FozjKAUo=":{co:"DE",kid:"9v3FozjKAUo=",jwk:{kty:"EC","x5t#S256":"9v3FozjKAUqiedlFvFFydFBz-_VipHqOFZO__LkTZk4",use:"sig",crv:"P-256",kid:"9v3FozjKAUo=",x:"zIzHRqk76vDGIUAj3dIo3UVev41tak5P5oxO-zaOlsI",y:"p8VDW6PcqiHKTqO7LSPFi64n-EUWomaENLb2oUhx9os"}},"AQCGDydsS1Q=":{co:"DE",kid:"AQCGDydsS1Q=",jwk:{kty:"EC","x5t#S256":"AQCGDydsS1SrTLpOO4BoDq4Bkkp4MzKODdwPiXVRH58",use:"sig",crv:"P-256",kid:"AQCGDydsS1Q=",x:"M7zYPRk1r4viA_oG6BxLec1shhb0JoDGjLAUuPxmGSM",y:"MPmgkGVHGOTLVKp1Q98f_5L4rhWQ7pn-uYtFdaOxrHs"}},"CvktK3hdjeY=":{co:"DE",kid:"CvktK3hdjeY=",jwk:{kty:"EC","x5t#S256":"CvktK3hdjebD5OXrksqfmu5lko49q3X8_0-SzucpccE",use:"sig",crv:"P-256",kid:"CvktK3hdjeY=",x:"uCgNX5VUmp7_lN7_UDF5kRDz7qvWnpgFOKwv1AxJXbQ",y:"r8CY-QAzj_cBgLKHKEibT69y2425qgKp3a4K9_N9frY"}},"DusseXrzqO8=":{co:"DE",kid:"DusseXrzqO8=",jwk:{kty:"EC","x5t#S256":"DusseXrzqO84DsUlO-upPN6-Rgnup9BpT31nHd771rw",use:"sig",crv:"P-256",kid:"DusseXrzqO8=",x:"xfciFuh1jL3LBPzaNAVmmVTL87eJ6wVctSg393nUcXw",y:"VS9b-bwoKeo1pUXSYJVSY_I0RtE3xdzi4w1BwD59qwM"}},"IZftFLRmKGY=":{co:"DE",kid:"IZftFLRmKGY=",jwk:{kty:"EC","x5t#S256":"IZftFLRmKGZivlPYjwzMZvLYCIne8epGsiBrUiXDRGM",use:"sig",crv:"P-256",kid:"IZftFLRmKGY=",x:"yxW76RQrbDUSOEHxYksWk5CaGGygxDJJ7A9jRiop-Fk",y:"acJj0XhU5iTVUTAoxOesystaMXYuClwhyP8iSLsOM1s"}},"L7XIA2gi2ps=":{co:"DE",kid:"L7XIA2gi2ps=",jwk:{kty:"EC","x5t#S256":"L7XIA2gi2ptXxahyfyOWtEHjbMlLN4Ij_XEM-Uj5Z7Y",use:"sig",crv:"P-256",kid:"L7XIA2gi2ps=",x:"orGGRfEic2GL5o9XnITdq3nd9d7pWDvy6waSkDMI630",y:"_sLwpbkgVd61kf0JC9xXX6XC9hTglmgEef7FzooaX68"}},"M8bcnysCMj4=":{co:"DE",kid:"M8bcnysCMj4=",jwk:{kty:"EC","x5t#S256":"M8bcnysCMj6GRnB8f2wQAW2eGX2NJFnHZHLwV_ZzdPQ",use:"sig",crv:"P-256",kid:"M8bcnysCMj4=",x:"qXPIlxahww0kgegwTgRNQWpChqH2PfXelyd1D77uo8c",y:"ctPLZQ4bBO86cs1l32U1ADMT7YMPiU6omi9RULb3ZMg"}},"MxhfdcoHinc=":{co:"DE",kid:"MxhfdcoHinc=",jwk:{kty:"EC","x5t#S256":"MxhfdcoHiner068ldBnuRylgVUMKNrXnx58fGyxqUPE",use:"sig",crv:"P-256",kid:"MxhfdcoHinc=",x:"KPuGAJsDLPU7vw4aDg52nFxuxz3AsJtWUmtsY7tQegw",y:"AlX5ZfnubECbusuQmZzg_oCnTCn547ge9fc_7RfagfY"}},"NCdyt3s+cak=":{co:"DE",kid:"NCdyt3s+cak=",jwk:{kty:"EC","x5t#S256":"NCdyt3s-cakVp9DHZFZRcrCgZ2K_ZXME1fbQVwnFEQg",use:"sig",crv:"P-256",kid:"NCdyt3s+cak=",x:"szk-l0BVoDOXZg5SKeeNbLUAggqLKB2a3NlMXWfxfdc",y:"HR7D6qpSlnBU2Qcw9_5CMsSYua5cZNVJNibBTRG47e8"}},"OKpEjMo/2MY=":{co:"DE",kid:"OKpEjMo/2MY=",jwk:{kty:"EC","x5t#S256":"OKpEjMo_2Mb-DavBfrmMZdjHQuDUv10q0KSwqDCFhSg",use:"sig",crv:"P-256",kid:"OKpEjMo/2MY=",x:"UCSPQOg4hIgEJzD2PHFjccnQzSQIvYs-gbBuJqHxv7s",y:"QgBKchI-VyH443zIzcQPrKPgHWchH8LM4Sq9gNf51Uk"}},"R7q7yd90ZPU=":{co:"DE",kid:"R7q7yd90ZPU=",jwk:{kty:"EC","x5t#S256":"R7q7yd90ZPUuLc9kHTVh8zzVx9aCfIAv5k2i-6rlx8s",use:"sig",crv:"P-256",kid:"R7q7yd90ZPU=",x:"_eGWuKcNV_od7Eh4EJuiqBPv-0yP4q-qzhOlNFdkzus",y:"lsupfoYY1R8XX8aeFw1bzlFdg_cH3_Nf7TXwbnOKQpg"}},"TGjTR+Re+yk=":{co:"DE",kid:"TGjTR+Re+yk=",jwk:{kty:"EC","x5t#S256":"TGjTR-Re-ylVtGGlp2kxyH-dzipfuMVRxauV7VAGkVg",use:"sig",crv:"P-256",kid:"TGjTR+Re+yk=",x:"h4UMl8PsQUsu36Hq7xK-dyGWGrELxsfzVOny20ZnkHg",y:"cgWMQVCBqBxGJe9G6c4xQSTeFixrYpWQ_9Gi1hP_spM"}},"TpQIkAHAym4=":{co:"DE",kid:"TpQIkAHAym4=",jwk:{kty:"EC","x5t#S256":"TpQIkAHAym6d8Ydd8vJXs1olxVD1hxo1c2OO8yx4qpY",use:"sig",crv:"P-256",kid:"TpQIkAHAym4=",x:"s77Dr92zb-HOBL9gdfCWOwkna-9D3Kdq0HgUqpVByi4",y:"5KspETwBSj2QQO-9asqActLhxYXWCMzQD83R4-yqz7A"}},"Uj77p+qIQNs=":{co:"DE",kid:"Uj77p+qIQNs=",jwk:{kty:"EC","x5t#S256":"Uj77p-qIQNu6AVowa4D5pty5y_tgjNbdxJ-xvOdkiic",use:"sig",crv:"P-256",kid:"Uj77p+qIQNs=",x:"opaKkUUE4nCgNpRBE9ugmShuJd907aOocVvFvxPLxiI",y:"eaqkNqavxlbKuVX_9Ff29Vd6wKCjvGzL8T-I5E1k8ak"}},"XkVWZqUeeFc=":{co:"DE",kid:"XkVWZqUeeFc=",jwk:{kty:"EC","x5t#S256":"XkVWZqUeeFc0suP6qTJGG-C723_K_z2geLisE5wmluI",use:"sig",crv:"P-256",kid:"XkVWZqUeeFc=",x:"h934IiMCsXp977pDeG7Wi11S-uGGoem6nSNbtCILcSQ",y:"-PvxahpSzgSbyGT0od4Ux8dle1fty86oukdnWoTp6P4"}},"XuCERkHu8kY=":{co:"DE",kid:"XuCERkHu8kY=",jwk:{kty:"EC","x5t#S256":"XuCERkHu8kYEmcX5BsPTeizGD9m6v8WAeVrRNXGUiMM",use:"sig",crv:"P-256",kid:"XuCERkHu8kY=",x:"yV_EBSORniEE7SMMNmvSWT3dOAuDuviDHFv7rvnrcZ0",y:"sMn0JCI8mD5K7VaxsIjXcDnGxyq3gdnlupYv_nw0DxA"}},"Yr8a8Rd+zqI=":{co:"DE",kid:"Yr8a8Rd+zqI=",jwk:{kty:"EC","x5t#S256":"Yr8a8Rd-zqJs00pi4eXOLYCEtNmQvtqv6gjDTY-HHa4",use:"sig",crv:"P-256",kid:"Yr8a8Rd+zqI=",x:"5eOmRsTsPlyUVzKnWK3xYlY04-DOffgg07nWx4FTa4k",y:"qLl0PZ3wsZjB4Kbmb9kcW1Us2M3sI3JimpJzRGA3QnU"}},"ZDoFfkn+yhY=":{co:"DE",kid:"ZDoFfkn+yhY=",jwk:{kty:"EC","x5t#S256":"ZDoFfkn-yhaz3n8XD9R3y3dJeQj_dusOVbWxVzKzAWs",use:"sig",crv:"P-256",kid:"ZDoFfkn+yhY=",x:"HZM5AMBImcqdKPFM6P5xx0LmZxo81NcnuydrdPUQaaY",y:"tDYbEXLbl-KgfGEndqRtdopcEknxHII7vCOwLBSUgDk"}},"bKmas9wa5tc=":{co:"DE",kid:"bKmas9wa5tc=",jwk:{kty:"EC","x5t#S256":"bKmas9wa5tdCg-Mqip2wZ4NF2HwirVKeBee36ose3WM",use:"sig",crv:"P-256",kid:"bKmas9wa5tc=",x:"aOhuajeY34pPu_12SnuMv2qlG8ErMOj7s0eAEM2679Y",y:"Fc7ImViyKdUtYzVrKCCSUxIi1lLY9ZqgrDDkd4AOwgQ"}},"c1XrnEBoj/c=":{co:"DE",kid:"c1XrnEBoj/c=",jwk:{kty:"EC","x5t#S256":"c1XrnEBoj_ee3RFQDz8mlpbduar3rP65U0Lvwq44GJs",use:"sig",crv:"P-256",kid:"c1XrnEBoj/c=",x:"UtMktlZKpvOfwhumIvsvpKMWE1LyMq32RkRCbVM5TBA",y:"cR7AlGHV0o26jyt3GfLWJApHGJcpbim0Dvvh2krBo0k"}},"dhSzPDr4G2M=":{co:"DE",kid:"dhSzPDr4G2M=",jwk:{kty:"EC","x5t#S256":"dhSzPDr4G2ONgZYpJtfqI5rADFSfd---DA8BZR7VAZQ",use:"sig",crv:"P-256",kid:"dhSzPDr4G2M=",x:"sLa_zRhSxxsmrPE_RwPNKXGblvI4JrdqfPNYpuPn3To",y:"ZBMW_76HddTLluwYrJphK2XCQvqFriLVtVB_sHFxyXE"}},"i5SVuCsR5TA=":{co:"DE",kid:"i5SVuCsR5TA=",jwk:{kty:"EC","x5t#S256":"i5SVuCsR5TDDPk16KDqH_zQdgG6gOMvAPkT6OEA-USA",use:"sig",crv:"P-256",kid:"i5SVuCsR5TA=",x:"5D4cdY3G91kHagLyAGon0ufC2jqzQ17V1wjvYHOLxZQ",y:"mNXr5kFYaLyFVEvQFOWe92nlvvtmcjVBYOy__WZNRO4"}},"izUDZjGtHWY=":{co:"DE",kid:"izUDZjGtHWY=",jwk:{kty:"EC","x5t#S256":"izUDZjGtHWZQQ-NkNguubTegCFdkFabjEbbro4Pay2I",use:"sig",crv:"P-256",kid:"izUDZjGtHWY=",x:"pobykjScOX2uy-5C_BYBXDRcVUVOBDWLUgUaIhP2q0E",y:"qBfBQQQ2AY8daXloX-DXfq7YwYr6-Vg3BZozFZ_hVc4"}},"juskqrNQf6k=":{co:"DE",kid:"juskqrNQf6k=",jwk:{kty:"EC","x5t#S256":"juskqrNQf6mMkFceGXcgvv__vSiwbjuqI-eSJXZJi8Q",use:"sig",crv:"P-256",kid:"juskqrNQf6k=",x:"gxLpjMDX1_tMRghYLQKMI0nK4UkZuK9pnAAJTC7BeQU",y:"Gh2BaeKSZAvM_1R3Fu-AqcE3k0SE87ODGX5ZDf1h7ak"}},"kjEx2H7huNE=":{co:"DE",kid:"kjEx2H7huNE=",jwk:{kty:"EC","x5t#S256":"kjEx2H7huNFl-233AhNFUd1KiMYFvaZFehoCjZJ8WQs",use:"sig",crv:"P-256",kid:"kjEx2H7huNE=",x:"tLZ1N2Y7UQHgRO3yKGyRTsJWdYFGDld5kbglFGHrMvY",y:"UMGuV6AXJR_cU6z93V3E7II55pex8eWGTpxh4STK3p8"}},"nHmZ5K96UY4=":{co:"DE",kid:"nHmZ5K96UY4=",jwk:{kty:"EC","x5t#S256":"nHmZ5K96UY4Dod3mgs9fFIoY30K8gw34rwYoUmEJsyw",use:"sig",crv:"P-256",kid:"nHmZ5K96UY4=",x:"x4HHLyxeH1wp_aPCCwyRxWVEcfUALP66kgwanudG4b8",y:"LqbxhTLFV6c4NKIRD2q1WvddgPVAbgpIwzOoxQLIGSE"}},"nPKEYm3gXzU=":{co:"DE",kid:"nPKEYm3gXzU=",jwk:{kty:"EC","x5t#S256":"nPKEYm3gXzWH_yQisF1kcwMY6eJHqqWQRs2FQuo0Ej0",use:"sig",crv:"P-256",kid:"nPKEYm3gXzU=",x:"Jmki-G1pd9DNiLX_eT709p_ZeCd_mcjrmRLoTgP6nlA",y:"6icVL2dK0OuMvy49lZOXoRh7blf0ZsrjVyWMRQefG3Q"}},"nTrG8glLUls=":{co:"DE",kid:"nTrG8glLUls=",jwk:{kty:"EC","x5t#S256":"nTrG8glLUlvrsSR5KvYKPiIPR_rsm-AyFNSW8JPsHew",use:"sig",crv:"P-256",kid:"nTrG8glLUls=",x:"d-grPnJ58prZvOeLC3vi9P2mnqlvvGNfsbT0HmxAVHA",y:"KDQe9z09ePSIRloTWRUjBUXpe77vL4uMD6GkriI62j8"}},"npo0ZWgdQSY=":{co:"DE",kid:"npo0ZWgdQSY=",jwk:{kty:"EC","x5t#S256":"npo0ZWgdQSa0UGAmDwQhIZnHdMwZkbd1KqrPir6cyCI",use:"sig",crv:"P-256",kid:"npo0ZWgdQSY=",x:"PdriVdFsidKrE0nr7S-75iO7-8LOtzFp99--4BLqKKM",y:"Cp_5gF74JCJxDecarIn02BVpPSpi3FBmw_XbcEJWgPs"}},"r9YkEJZgi9k=":{co:"DE",kid:"r9YkEJZgi9k=",jwk:{kty:"EC","x5t#S256":"r9YkEJZgi9mQZtiTcH3d-8vueMJfg1ItE9Qib3Hp_ZU",use:"sig",crv:"P-256",kid:"r9YkEJZgi9k=",x:"7f4SNNst1BMsb6Ub0yVCz01aDWB9I2_ajVbLyJpTr2o",y:"SsEqHEKYjNJnMvV1_nTGGJVGkFQTpraBP_358PMNrww"}},"rKMDA66RiLE=":{co:"DE",kid:"rKMDA66RiLE=",jwk:{kty:"EC","x5t#S256":"rKMDA66RiLEWKx3M1CG-cypSfMYddvS1roloyb71bV0",use:"sig",crv:"P-256",kid:"rKMDA66RiLE=",x:"bQZPoqfjpTx8m_wAZZWk3uoDxzfpiISsNSuZg_-9VN8",y:"3Enn6xBxUb0MDNgIzerzo4c1THY2deDEkSVDCRLvOS8"}},"rXP9L7xddL8=":{co:"DE",kid:"rXP9L7xddL8=",jwk:{kty:"EC","x5t#S256":"rXP9L7xddL8yTzBblruK_cJIN-FiRMJ_pfTRXwfdBt8",use:"sig",crv:"P-256",kid:"rXP9L7xddL8=",x:"-fBKs9tgAlGoiBIglL4JDLpguDzBcXqCuIulrUkBy_w",y:"Gaybb-37Iq1P2Ar3J-9Kz8zApaKnjxKAzwn9cFl_A6c"}},"sYXcYixrOGA=":{co:"DE",kid:"sYXcYixrOGA=",jwk:{kty:"EC","x5t#S256":"sYXcYixrOGAFoeElmKAYYmal4KvzrtFr2lg22sOz60o",use:"sig",crv:"P-256",kid:"sYXcYixrOGA=",x:"40rFr8baZEDNvONEE-Rxf5ePnZLLmqR-5Uwx_S5I2yk",y:"TIo2cmeHNpA9zskx5X0zWtZktPc151zSSqmcqotxhkM"}},"vjm0I2ATJ+Y=":{co:"DE",kid:"vjm0I2ATJ+Y=",jwk:{kty:"EC","x5t#S256":"vjm0I2ATJ-aFG04BjW-oSvUAOyECTAaOD33dp0c4TRI",use:"sig",crv:"P-256",kid:"vjm0I2ATJ+Y=",x:"2TqSv2wB9nB0Ev3u5VmckxWzq_L0fvl1HVI3ZBXCF-4",y:"5OeW6NM1AAVDwc-v3tT2g8QwiEvPjcm626VE98OQ9yM"}},"vq08l/LTxhk=":{co:"DE",kid:"vq08l/LTxhk=",jwk:{kty:"EC","x5t#S256":"vq08l_LTxhmTdGB2otiLSrhMTuKX_Y8UmAuUnTRDsG8",use:"sig",crv:"P-256",kid:"vq08l/LTxhk=",x:"DRVIqu7uo4HOgXlXyxYBl2L1arxxvDfwfgnYHjgVKQo",y:"RRI_oVfWBI0hAiUvmK4Rq-UV2VO3kcyr3yrUSNTzmsM"}},"wb/2450PPrc=":{co:"DE",kid:"wb/2450PPrc=",jwk:{kty:"EC","x5t#S256":"wb_2450PPrfgoBgStK78QjyEa_DQz2Z2TT6GxE2mVKU",use:"sig",crv:"P-256",kid:"wb/2450PPrc=",x:"lGYxcioPZFzAfJHtsB07FzUDpJlc6C18W2kcnCGEE1s",y:"o2oYrCumbxPlKEhoeAARjUDl_EcqTKeLfG84-1QKiO8"}},"wtYpyAmNmdk=":{co:"DE",kid:"wtYpyAmNmdk=",jwk:{kty:"EC","x5t#S256":"wtYpyAmNmdl5iVmp-87jCSfcj8B2O2wylC7fkk9Jrs4",use:"sig",crv:"P-256",kid:"wtYpyAmNmdk=",x:"6_QS0f7r433yqdq7XKh3OOKhOEigg-VVixYEToozbg8",y:"UIAKgAyGWA3t1hEJzvLvH6nc3dqLlWaOePxnNd4LM2A"}},"yWCRdph8XJs=":{co:"DE",kid:"yWCRdph8XJs=",jwk:{kty:"EC","x5t#S256":"yWCRdph8XJsbsnzH7bDul9pZsflGDL_dLNWbPkP0cUU",use:"sig",crv:"P-256",kid:"yWCRdph8XJs=",x:"gMhpOktfDD7Vn7Wm-BlHabFbpOs2UmCVrtIpcOFpIlo",y:"_PtsBz-f1UlGbJRMUqNvOH6cLqCeXinIw7r5Qj42TYU"}},"7z8+6oww2a8=":{co:"NO",kid:"7z8+6oww2a8=",jwk:{kty:"EC","x5t#S256":"7z8-6oww2a-UMGx64UCO1I7OD-OGAWtfPDYd_AzqMd8",crv:"P-256",kid:"7z8+6oww2a8=",x:"rbWQM5hj5SeR23DzCV0TVKrFhfYsmNVVSbPFxwyw4ZE",y:"H3q7Gd26dofq8NgYWy281R2SMFn54Wime9viXIlJLBU"}},"Er5OTMwLd78=":{co:"NO",kid:"Er5OTMwLd78=",jwk:{kty:"EC","x5t#S256":"Er5OTMwLd7_5zgX6kmv_WBiAyYesn6UnTpKQdqa-EeA",crv:"P-256",kid:"Er5OTMwLd78=",x:"fBeQBQBjyKpvjsCujqi15xnygRMyhjNsEy198LzTYuA",y:"fjI3tZcSLz2JHzvzxB0BYAOdoJ9umxwlxO-RlqqulDM"}},"cdm9Ymfwn2I=":{co:"NO",kid:"cdm9Ymfwn2I=",jwk:{kty:"EC","x5t#S256":"cdm9Ymfwn2IdP75j53-pa8iFnG3fziNR8_vG2I7UIxQ",crv:"P-256",kid:"cdm9Ymfwn2I=",x:"lH46JUamhvfj2ocSTxw9Eq7nVdP9OzBOxQ_zaWNXN5s",y:"nGoJWup67janw4mV0DHM-IKWeqXI7SZfsa2tgE82fT8"}},"BKBFhNFXWAU=":{co:"FI",kid:"BKBFhNFXWAU=",jwk:{kty:"EC","x5t#S256":"BKBFhNFXWAXpNBeRrjYnzNa6_qBqchgpbpS9oXn-FNM",use:"sig",crv:"P-256",kid:"BKBFhNFXWAU=",x:"epKcLfnTZIej9gSNJVmR8sRYMMgztnG9h0ZGWx7D1X0",y:"YN9lfxrSXOeR5KB_r6pG5ISiZ7wwSdSXbG5CipgSW9k"}},"ODqaG8mnbro=":{co:"BE",kid:"ODqaG8mnbro=",jwk:{kty:"EC","x5t#S256":"ODqaG8mnbroTgFCocQOAs0JYAh5GgBqHf6Mgp22ETNQ",crv:"P-256",kid:"ODqaG8mnbro=",x:"U_f_KsmP3NasU_jZo7aulTrd9GHoznfnwWvX8xmHtK4",y:"PRKKGzABuy4V56S0PmkcJpp0jHCFsvMD8TPEAzAVLcg"}},"KG9lzdohSY0=":{co:"PT",kid:"KG9lzdohSY0=",jwk:{kty:"EC","x5t#S256":"KG9lzdohSY3NIqr8IxfKJSFBX-svQMeALqy-rgoTpTs",crv:"P-256",kid:"KG9lzdohSY0=",x:"njK8A8ato900a-wQ1IaxJyaeUGQ5lwsYOCRlq47X4DI",y:"hnvj9y9trrWHBk1rQnpAamq3BM80hx_1_rOWnhEIGGA"}},"Jjql9rBrjHI=":{co:"BG",kid:"Jjql9rBrjHI=",jwk:{kty:"EC","x5t#S256":"Jjql9rBrjHLQMj5L09VoNRyb32McfGVQPT93jCLQ5lo",crv:"P-256",kid:"Jjql9rBrjHI=",x:"myxlsE2inBusapxY7LvRiPN0s-dsHnakaaa9M_5NDZY",y:"U5Y0mQs3iu-31jvTBUXBgl600GlzRNxYZFePmvdoUWs"}},"NAyCKly+hCg=":{co:"DK",kid:"NAyCKly+hCg=",jwk:{kty:"EC","x5t#S256":"NAyCKly-hCi4iWbIctz-PDhNvI3hpJZlcvsdX8DfyDA",crv:"P-256",kid:"NAyCKly+hCg=",x:"BmdgY_VORsecXxY_0xNNOzoJNRaVnMMmHs5jiXrGvaA",y:"zstY8w1Dsr0fvicYH9PmLhsqef1AGNECIe-W_iUJ5Rw"}},"7AfAwcpWOv0=":{co:"LT",kid:"7AfAwcpWOv0=",jwk:{kty:"RSA","x5t#S256":"7AfAwcpWOv3Yzs6M0T1pLauzkl4EoOLZ47KmcP-lg8Q",e:"AQAB",kid:"7AfAwcpWOv0=",n:"sIcppmCVhq96vMc4NtW8X-yV6O1oC7hfKnewK1_pxfByqlVTPpETDLAjNq9knNQpCs7vGjadCbDAylsQRK7qfU3sUUKamh6FgDhFo1dzC4mUHCy3XBL04XJie2eT_a6Wgjrn6NjEFk5M4Jl4N8u_RbfaVxqaOjUM0hBfuzfZeL2LT30POqDHj1hcyod1fIbG4vv2Upqxe3OX_WLr-WzSPbRkPwxcJjmYeNYODT0rEcd9VSzJpljaK-eDVwxT0wMRnCH2QLxdw8sR-oDYDTZBaabeHYyZ0CfYzSoBOZT3fVMAbjkVAl8GFyH8tUm4lMQbYEMbl_FkftcZQicaqvRdQQ"}},"lshLbYfCWRg=":{co:"LT",kid:"lshLbYfCWRg=",jwk:{kty:"RSA","x5t#S256":"lshLbYfCWRh3u6SgX7hMRwaahK1SSpscpRRNqleCix4",e:"AQAB",kid:"lshLbYfCWRg=",n:"nhBpxzeGXNlQs7U-j_Av1BUZ6CCgMR3bFLT4rRjO8KQ4IpAKqSCQ3j57MJqdumk3AUfHO5zhMZF4Awy0wqV3oFlyP49_56KKZxGARe5UkyfPjVbl8AZpLmgYoS_Ior53TLrwmT_-zvXynzFYbOi2OtCtqanG-9OUhSVRrXEEB-56PpCltE31wemX1behxDuCbE4tuqyTYODFw9Le3dGCbHWdjxi5W3XIUNo8j2u2PKue0KS76Xv0zAYItTgChgv7mM55_G109m4MfeU7AHah43bJth8K8y-SxG3RYHskmNZ7sfn3w8w7WyW7D3_tKHcMt3hgIh9z3DuWeR1C296JyQ"}},"02vdAOY/+gI=":{co:"LU",kid:"02vdAOY/+gI=",jwk:{kty:"EC","x5t#S256":"02vdAOY_-gKmnwVyS8JSbr0SeMhaGsNpKTlxF-VgMXE",crv:"P-256",kid:"02vdAOY/+gI=",x:"5EtYbOu-RuUcFAu1NN1rqsuKqNzpl0Y6bgg9wNKcmVI",y:"83wTvNYx9nXLqR7SpaezMuShowsgQCr4yVEhP35w3eY"}},"0kAwFy+vLpg=":{co:"LU",kid:"0kAwFy+vLpg=",jwk:{kty:"EC","x5t#S256":"0kAwFy-vLpiPZ7c145j7J-2K9HgoEu9TdVqwOwCC50k",crv:"P-256",kid:"0kAwFy+vLpg=",x:"vIs_H8NhtE23q5tR84V9WwbbdGDc3hh7mjrXom4PRzg",y:"xkbkr3wvTiBS7UczqIbHZ23BOthVjfhc9PboCXGqobQ"}},"bBnmkeVMV6A=":{co:"LU",kid:"bBnmkeVMV6A=",jwk:{kty:"EC","x5t#S256":"bBnmkeVMV6BQTvnKKOUMvtFNkuhrJRUsdWYUgvUwQsk",crv:"P-256",kid:"bBnmkeVMV6A=",x:"HTBJY0Z-T5I8EmqQmrbZAr8equIcKKE-YriIGw_AKJw",y:"sNGQI9Q3djEUzN_gBIjQEcVyBdPGtq4VLxQsshwidgw"}},"ln8K+9SqfuA=":{co:"LU",kid:"ln8K+9SqfuA=",jwk:{kty:"EC","x5t#S256":"ln8K-9SqfuDXnhld3cqBgP_xScoV_pHHZdGKsDEQuYU",crv:"P-256",kid:"ln8K+9SqfuA=",x:"ExXQauou3f3g77qOsZ0rSPFjoTDiKQDhG-Bpf34Yyoc",y:"hZGDATC_PdCmqpmS-LnswXPMcYNX9e9KnGVhyC46eKs"}},"25QCxBrBJvA=":{co:"HR",kid:"25QCxBrBJvA=",jwk:{kty:"EC","x5t#S256":"25QCxBrBJvBBALjD4A0vE9it6S_EOnuAU4l0vQbPwmU",crv:"P-256",kid:"25QCxBrBJvA=",x:"t5hwD0cJUB5TeQIAaE7nLjeef0vV5mamR30kjErGOcQ",y:"Xhnt-3Q65hQHjqiC2o0E4gV83Jz2jMVlHfUivWUXsc0"}},"MrT00mhDxLQ=":{co:"LV",kid:"MrT00mhDxLQ=",jwk:{kty:"EC","x5t#S256":"MrT00mhDxLSKKsuPfK3tumLbTbH-9-TT9ZjfgQJFevc",crv:"P-256",kid:"MrT00mhDxLQ=",x:"5_m2YdN8L81Ajoi-2brFJbul628alfXRXU26t7hRYEs",y:"77G--LUlZtg5vXG7oa4BSfv8F3nHcYdLU0hwpDHwdIU"}},"hFpY/ySOrwI=":{co:"LV",kid:"hFpY/ySOrwI=",jwk:{kty:"EC","x5t#S256":"hFpY_ySOrwJ3CHBv31aUeAOJpHV2R4WK5KVg6iWfkC0",crv:"P-256",kid:"hFpY/ySOrwI=",x:"PUwE7htr-kD1eVnJBfRf5tx0kA17qu4p1wRz3EKPxsI",y:"csiM5yKq_fh7JzHe5PSA_39HXqoz_Hbpc0tnBa1VZxU"}},"CvmI4xOoMj4=":{co:"FR",kid:"CvmI4xOoMj4=",jwk:{kty:"EC","x5t#S256":"CvmI4xOoMj5qGN9oHxdUlyJN94VP0t8CBLwXEdpc7Ng",crv:"P-256",kid:"CvmI4xOoMj4=",x:"sNCxAUi67vlLEBaGIqAk259l-dk6_Yw7hZL4JFqT6M8",y:"5gVyHOz_pmbSvdNyl4lWXpW6BAjjqExv_tp1RBYWmbg"}},"G3jDFQ1oK0Q=":{co:"FR",kid:"G3jDFQ1oK0Q=",jwk:{kty:"EC","x5t#S256":"G3jDFQ1oK0TFTZH73fI4Pqf5jaqrgqpWbURX9kQkGCg",crv:"P-256",kid:"G3jDFQ1oK0Q=",x:"EGSSdtJPZeYWU3QrR2cR4M2Cv6sYKuY870qkBKKREtk",y:"UnpeAsaX5vBJz2fjj1VQ18QK1nWEdDKCyujsfWhCJJs"}},"IMgNr10pfPQ=":{co:"FR",kid:"IMgNr10pfPQ=",jwk:{kty:"EC","x5t#S256":"IMgNr10pfPR2uyENjReGb2roflG5VgtJHyi4Ss6alJg",crv:"P-256",kid:"IMgNr10pfPQ=",x:"Cmvd9b56sHucHEi7GBjqapZy6IAZ4MFIFg7Acr85jXo",y:"f6AUjcxQT_Qp5LMC0eb8Jq_N-rkvSS-bHXcy0-CuPuQ"}},"YVpBYnLh1Hs=":{co:"FR",kid:"YVpBYnLh1Hs=",jwk:{kty:"EC","x5t#S256":"YVpBYnLh1Hu5lKpwfXKMPA7U0WaOo7xXLQ_9yicwvHU",crv:"P-256",kid:"YVpBYnLh1Hs=",x:"8SjDdFFGxTunJ0RQyxdGDbBKVUjHz9gKydhpKuTZAvY",y:"GTMxlVVezWISRkKjqeDsesFN8vs2Ouup3wHmgD3CDUc"}},"e+bFdywyJQE=":{co:"FR",kid:"e+bFdywyJQE=",jwk:{kty:"EC","x5t#S256":"e-bFdywyJQFs9jVxPy4gfyHW8eqMMGDE04puvDqkMXo",crv:"P-256",kid:"e+bFdywyJQE=",x:"RuPqA8PXwAZlb3MnIn-3UajY2JjRkt4v3rI4nUuQjh0",y:"t52Wf96w6mifCW6MPqShYHVgOdbGeqUCMiF--sGH6wo"}},"eQOY6BDp+vM=":{co:"FR",kid:"eQOY6BDp+vM=",jwk:{kty:"EC","x5t#S256":"eQOY6BDp-vNhfby793-jYrh53j3w7EKc8H--NBY7gdI",crv:"P-256",kid:"eQOY6BDp+vM=",x:"x2sQ7slwQ-IQrSLZwgIfafTa2g144vB8OXnI5WU67BE",y:"302s7D3HzW1lI-bqv3xQeRBG5WkhKUQOWMIcnwBCLeI"}},"fGLuvg6n5wk=":{co:"FR",kid:"fGLuvg6n5wk=",jwk:{kty:"EC","x5t#S256":"fGLuvg6n5wkxhiuHx3qRTCmFHOEcu1b_Yqkf4dShYg4",crv:"P-256",kid:"fGLuvg6n5wk=",x:"ImIFaugzwB5f_VyfQ3KTfTSoukwAPVSgHZWrtrc2j4E",y:"bgFKcPzm0ZwPaQYzfx3VHNc3JfUjv77AhJx5F4cY8-E"}},"lrxgMs2Duac=":{co:"FR",kid:"lrxgMs2Duac=",jwk:{kty:"EC","x5t#S256":"lrxgMs2DuacfGrkjdqhA1Fb4FZZhUJi0x-IH_TDWXCw",crv:"P-256",kid:"lrxgMs2Duac=",x:"7jO1wt-KJfoKi9O5dydU--nfENeQWdVACVEwAdquyYQ",y:"-ghFn6NcRtbVHDISiCO-1yWxivh9p8gLgrCdIE30-ZU"}},"4GkJs9YsYS4=":{co:"HU",kid:"4GkJs9YsYS4=",jwk:{kty:"EC","x5t#S256":"4GkJs9YsYS5Xhqs7YqGwjuJIF7eYjY-P9lXONAkWcD8",crv:"P-256",kid:"4GkJs9YsYS4=",x:"yN8tlsHEJlHHmms_54jGukHiHadMS0ckg70EQkyDuX4",y:"wNNN7ggomU6JCrqyEtfRDgJUBS0wi61Se9gnEk-_h_w"}},"Z7k1XpIWZOE=":{co:"SE",kid:"Z7k1XpIWZOE=",jwk:{kty:"EC","x5t#S256":"Z7k1XpIWZOHPEXBg3qNQHkGEOrdXrefPiS6ghhje2mk",use:"enc",crv:"P-256",kid:"Z7k1XpIWZOE=",x:"aLOo1IGTspZSdr2BqdAvKjZjHfW_Zq8VDrI6nEhBlXU",y:"K91Qg5c4616Ob-osdqhfUQskibB4GcVK6lkKRUG62zM"}},"90CNG8dcdn0=":{co:"SI",kid:"90CNG8dcdn0=",jwk:{kty:"EC","x5t#S256":"90CNG8dcdn1gEIm_D82XAsQ9eOd7XE9urjXV0MZyuCU",crv:"P-256",kid:"90CNG8dcdn0=",x:"EmxEg2iFDaol9DVnrqIY5zkPXrBANQlakmUfrBhogaA",y:"wtmWe35ENiHDiYBBeK0Esm9-IOYw8PPIO0GiJJ2iyjM"}},"6CDB1hL+uKU=":{co:"SK",kid:"6CDB1hL+uKU=",jwk:{kty:"EC","x5t#S256":"6CDB1hL-uKWVBtXsXk3Oiz_L5ozZgTsG5dPxG9YoWMY",crv:"P-256",kid:"6CDB1hL+uKU=",x:"6qxT6sSK3TDheWFHTBkfveooRhtUWqEqrELD9B7aAk4",y:"8Yz0tzARE7Zp1m-J0cwSDbxcKyw8UAqk1_CXr6d93OE"}},"PBpDVqnJ7Us=":{co:"IE",kid:"PBpDVqnJ7Us=",jwk:{kty:"EC","x5t#S256":"PBpDVqnJ7UubC6KtAsZiBINQLJPN0TylSWFH9AgYkxE",crv:"P-256",kid:"PBpDVqnJ7Us=",x:"TPE5ItolrGzLQLPqYxOT-orVmYJusLDsPWLwrK-bbJI",y:"gQbVwbKw9j8v6LFmK_SxeX3zkac8ZgVEJs6eyuLj4iM"}},"eNNsg2jd4wA=":{co:"IE",kid:"eNNsg2jd4wA=",jwk:{kty:"EC","x5t#S256":"eNNsg2jd4wBSYFAv2Bx_NsJ13l5-6KoTQZGxOAm7BDU",crv:"P-256",kid:"eNNsg2jd4wA=",x:"ZfUiZPt-jvUVd8fpPkv2xoXxluGZwuvys0oXWRnPOBc",y:"A3hpnDLMye4EDSktMTmd98bWP_a4Yr5o1VOuyB3ATPE"}},"EzYR1uk/E0I=":{co:"EE",kid:"EzYR1uk/E0I=",jwk:{kty:"EC","x5t#S256":"EzYR1uk_E0K-BbHtFA8_bV6Gl4veveR7CiYnwg74dYQ",crv:"P-256",kid:"EzYR1uk/E0I=",x:"vW8QeGk0YQMGQ_wG2vpPalRdoKNfd48O2qW5uP6gmgQ",y:"ZtTp60K9oLR91ysTX1Q3rjbqnqJrEkZA1mtw16sC3OA"}},"Ll3NP03zOxY=":{co:"CH",kid:"Ll3NP03zOxY=",jwk:{kty:"RSA","x5t#S256":"Ll3NP03zOxYSw6HRJR3HbI-TjLwk_Zni8IcXMMpL2ss",e:"AQAB",kid:"Ll3NP03zOxY=",n:"tk_51stJXU48RqD2lh4IdsxFrjlJfmTCrLr3cQNEXkrEoI3OEV8NnotE1RjVmQrqLTT04oxpWlcbMolXtJBtu3rOiLNwQvyVEbj_xSc6KT84Tp7GBo1P_kkunY-Vmab6HUCV_oGZYmsdiUP_OnTPX6Wy6delDhnrgHIDti73_TSsG7Zl1V6km7-KIkjAkVCEDkkUD7uffd4G-GBZ0B9F1KOT0IcFQNvDm0zlROVoGFlmPS8DWlrLHuIdMbB281uiDjcN-kNUt7rUyyj6TFgX9WCgEB_5mQBMRaaXK1zeDTaNkmC2S7IWxhMQsMBXJyAdbD9AnQOZc6XRjBauO7gz0w"}},"GvVR3e6VJIM=":{co:"MT",kid:"GvVR3e6VJIM=",jwk:{kty:"EC","x5t#S256":"GvVR3e6VJIPphwZ9N0I7Y2mN8V4LjB_FFcsCdFhlr20",crv:"P-256",kid:"GvVR3e6VJIM=",x:"1kpyGGbMShwokxGdJmH_WPJDcDONYigpXr7Z8jiiX9M",y:"D9X5I77B3eBpHHxx7a67LK9hS0f5ua4CNyIOcQyyVnU"}},"QacbC7DdD4U=":{co:"MT",kid:"QacbC7DdD4U=",jwk:{kty:"EC","x5t#S256":"QacbC7DdD4Wz73sW1EfU3R5hwqlFmmvgRuv7mqJyHXY",crv:"P-256",kid:"QacbC7DdD4U=",x:"fapP8-QeyFgXVvY41YkQudlUUh7IZBBpIdOJ34xYmxA",y:"hLh121VBarfyUp26VbBrHe2QT1Iy9ruSrPZqATAxDy4"}},"UZ1cSMaPcaQ=":{co:"MT",kid:"UZ1cSMaPcaQ=",jwk:{kty:"EC","x5t#S256":"UZ1cSMaPcaSGpl1kt7j-WgZ6SXJ2lDQeGtQpcOwQc68",crv:"P-256",kid:"UZ1cSMaPcaQ=",x:"1q1nvgXLGIbibQuYQU-f-Xs-mcbPmukAc3KQAyy_5KY",y:"R_p-ReGxuFdFyI6YV9Pd2MR4dSWx1js7oSrmp_RW6Mg"}},"bfoj2trt6bE=":{co:"MT",kid:"bfoj2trt6bE=",jwk:{kty:"EC","x5t#S256":"bfoj2trt6bGT-vf82PeELpWi79O_9NDwlyA_2A8w6Cw",crv:"P-256",kid:"bfoj2trt6bE=",x:"4DsoM1rJFjHyQPcX6WKDWZkouBehfQGxqOgwFAYyRKU",y:"260ri_rZM_LCX6PHY37LkESw0rmcbndCDrDAfWLEzKY"}},"ccgQ13tmkU8=":{co:"MT",kid:"ccgQ13tmkU8=",jwk:{kty:"EC","x5t#S256":"ccgQ13tmkU_IGa3FP9BzbeUCWaivVvc81P6KCF_934Y",crv:"P-256",kid:"ccgQ13tmkU8=",x:"Xj9fU7e4KVYe1VakCDZjYquHzkoxSHT8D33zeMDfyLY",y:"2IvxklaSkLT8AT2ZT8eua9im9sGqyCvAYMUoLELzCGo"}},"f6J92LRKpj0=":{co:"MT",kid:"f6J92LRKpj0=",jwk:{kty:"EC","x5t#S256":"f6J92LRKpj3rKUWUXOq0_mXKxXxvwaebEKm1nh1DFH4",crv:"P-256",kid:"f6J92LRKpj0=",x:"DSjY8ob2FU6g06KQpeZ2BAjhXnNxdEOMdex6l563qlM",y:"7zbGOmdsY1aA58fRJZ7OoW3kYzcA_i38KvE5_dkH5OE"}},"HeWuzGwEM5c=":{co:"IS",kid:"HeWuzGwEM5c=",jwk:{kty:"EC","x5t#S256":"HeWuzGwEM5c4ZAy3dWtSKZ7Rc1OowEcVHr-bPRr_zkc",crv:"P-256",kid:"HeWuzGwEM5c=",x:"vwlwjQL5cId7nINp_A_b-XNY_WzgX9sIOde8ggZmZjU",y:"7yGIQ4c-xb7OdqM5namrQ6d8iMD6a-pwDJmjU49CnWY"}},"Pbydc1LscXo=":{co:"IS",kid:"Pbydc1LscXo=",jwk:{kty:"EC","x5t#S256":"Pbydc1LscXpFpq56-LRLzLtXTAUvQLxIJchUVLo1I7Q",crv:"P-256",kid:"Pbydc1LscXo=",x:"O42X7C2X5bSDTnfSJwnk4qAjSk2m11Cy_mmFqryl7J0",y:"TIa2Q38u-5MuLktKNYltfNRL-dZgIltCd4t0nimHhDs"}},"NJpCsMLQco4=":{co:"IT",kid:"NJpCsMLQco4=",jwk:{kty:"EC","x5t#S256":"NJpCsMLQco5pJbcmDRgT7bJxxUQKoPU8f92i_qiXabs",crv:"P-256",kid:"NJpCsMLQco4=",x:"nL9-WnIp9fvbcocZSGUFlSw9ffW_jbMONzcvm1X4c-o",y:"VzjxLOwuP_N_j8UvEsHmtoYJv7SreDyNM_MIJyHoaI8"}},"vvYa1vaWkGg=":{co:"GR",kid:"vvYa1vaWkGg=",jwk:{kty:"EC","x5t#S256":"vvYa1vaWkGgsAumqgApI-8JmS1mJur496VbRXhZNL4I",crv:"P-256",kid:"vvYa1vaWkGg=",x:"aI7Y-lpY9cv5h5gKDrAzpkhl5bFPen_ohAMuJXU4uFc",y:"0LtFJ0gwhbf2x01nKisWHIpPGH5xflGUljihNzLJZRE"}},"/IcqIBnnZzc=":{co:"ES",kid:"/IcqIBnnZzc=",jwk:{kty:"EC","x5t#S256":"_IcqIBnnZzefMCgbTN9cCnD5PZL964iGmySbY2lLPO4",use:"sig",crv:"P-256",kid:"/IcqIBnnZzc=",x:"bxlQ_UTz0AxZWF-xQs-w-xveq5Eche9zf16LnDFYY_I",y:"vKWeperG9ipV8PGf5MKKc827-Swl9VcS7BjvUbPTsy4"}},"3IsdmTYkAAM=":{co:"ES",kid:"3IsdmTYkAAM=",jwk:{kty:"EC","x5t#S256":"3IsdmTYkAAN0vEzzv8wckxEw1-U1D1N-KsDzC-YRZaY",use:"sig",crv:"P-256",kid:"3IsdmTYkAAM=",x:"ManlPIcO9J8UBpHCAbku_KkAfiBrGLIre1buTIzhhok",y:"3C9GCDvg0Pbj7OlH8zyl80Ku_dVeSOWr4ZqUOo9sxbE"}},"4Qmniw7B0gc=":{co:"ES",kid:"4Qmniw7B0gc=",jwk:{kty:"EC","x5t#S256":"4Qmniw7B0gc96RZu354uwKsarncrg0dlvXm6XHqebtg",use:"sig",crv:"P-256",kid:"4Qmniw7B0gc=",x:"GwQNm-R4gtY5wWQTeJ9_kH1TqtnzC97I1EZQTE54p2Y",y:"yYV7y89iBZEOwkEHm0pO3MIIpEwznL0EoOdCcLqTDXw"}},"6ag2wJkSHtk=":{co:"ES",kid:"6ag2wJkSHtk=",jwk:{kty:"EC","x5t#S256":"6ag2wJkSHtnU_JHYmO9xwHnnQ8YRJORgaz464cMIlic",use:"sig",crv:"P-256",kid:"6ag2wJkSHtk=",x:"qF22rG5bDXpWn_tKy358h2KwYyaSKzCZV0HJptUQq7s",y:"FsX3gxPOh0qHmwa6Tr6Y4WV9v2ZExf2EZZIdM7Z5HJc"}},"ARrNkCRtprY=":{co:"ES",kid:"ARrNkCRtprY=",jwk:{kty:"EC","x5t#S256":"ARrNkCRtprbn6nuUoq8yW8dCGZKQ7JNgXDA7bOrTl-A",use:"sig",crv:"P-256",kid:"ARrNkCRtprY=",x:"blis8RR4Oc4Xqq4RZdhrJ0DnkAvK4vY8AamWbFg9T7M",y:"htey2vEyWE6txaiSXeSrbUz-9RqI8URdERCqRfrsALc"}},"BEnvMVnNFK8=":{co:"ES",kid:"BEnvMVnNFK8=",jwk:{kty:"EC","x5t#S256":"BEnvMVnNFK-d3PwvrxJrKsBwsUarHBGZ3M_4-wsNsOY",use:"sig",crv:"P-256",kid:"BEnvMVnNFK8=",x:"e1XUTCn6DkdbSOKlyzczFWQfDvtP31uGdjzVCzAkuxo",y:"KzXhF9xfNu4J8nC_5k80ZvJXw8c-uJRFHE8MNCO7p8A"}},"GMFMBu1RlCg=":{co:"ES",kid:"GMFMBu1RlCg=",jwk:{kty:"EC","x5t#S256":"GMFMBu1RlCjYQ-npp4hLqoyKY3kXPHgMjT2A-8E58FI",use:"sig",crv:"P-256",kid:"GMFMBu1RlCg=",x:"t3OX-XF_LZlHff6ZWiHRqQu4WBrgzNZYz4wFJkwkBmk",y:"P89ETrCyeBZcDiz7NnFBCCFdD7tXJp54L2uvhM0KWwA"}},"GuQPQRxbMsU=":{co:"ES",kid:"GuQPQRxbMsU=",jwk:{kty:"EC","x5t#S256":"GuQPQRxbMsVgY7dhAoT1J_TizNHhCwZ5FMJYbJK2dew",use:"sig",crv:"P-256",kid:"GuQPQRxbMsU=",x:"KMpkfLlexSZAyOl3FjSomlb4P8POpQb7PYz1bg8uca8",y:"kv5f4aT4ltFNgseYElb6HRCTiXXGzDAoEaBhx3cA_tU"}},"IaGR283U1jA=":{co:"ES",kid:"IaGR283U1jA=",jwk:{kty:"EC","x5t#S256":"IaGR283U1jAgl3B4ZTXhMyLC3l4UtsZendAbZTVGsL4",use:"sig",crv:"P-256",kid:"IaGR283U1jA=",x:"j_wPWM6e8JDYxW9673ivEvwlu2JAZpsNBrr2sQW5ppk",y:"Luq3KiVCseym739mcdQCXiEu_j0KtojXLoHw_kQv1X0"}},"JHd4CkNzadI=":{co:"ES",kid:"JHd4CkNzadI=",jwk:{kty:"EC","x5t#S256":"JHd4CkNzadJokWCr43qHdjraCRDd4ATWBIRUJNw2HP0",use:"sig",crv:"P-256",kid:"JHd4CkNzadI=",x:"DvCuOC6NlQCaL18-CEn4sbjC3NNnN4jBAmZo6lrGXbg",y:"yHwEN2Fpl3N4Ki50havOBBFevtjxcvcsi4KuCZhQHww"}},"MtI93IMknMk=":{co:"ES",kid:"MtI93IMknMk=",jwk:{kty:"EC","x5t#S256":"MtI93IMknMmRFOYlHBhFWYiDA71bBOhX_eEzzPx19NE",use:"sig",crv:"P-256",kid:"MtI93IMknMk=",x:"62orr7HL0POyQCqmgbbEqfcbcdcT4vyfQZEPYfxk69Y",y:"Ub_U_CMup1gMhIxdFcb5J3woP8fbooORxVq6XnVthKc"}},"NCc6YSsVioM=":{co:"ES",kid:"NCc6YSsVioM=",jwk:{kty:"EC","x5t#S256":"NCc6YSsVioMqVU_0VQGgB-WbsvN8-1WdphfeCNanEsk",use:"sig",crv:"P-256",kid:"NCc6YSsVioM=",x:"Uvljql1ZGpwzC92AbO4J751kqnIEXaCI8hYUIEArhRc",y:"qiXMeagpQBkpAxXG60z1fVrlLZg0PzaaFfhHo6gZpco"}},"YRYidQ+wetg=":{co:"ES",kid:"YRYidQ+wetg=",jwk:{kty:"EC","x5t#S256":"YRYidQ-wetjtUYj1OKaH-l1KNfRfWWaOpn3sUhRGqEw",use:"sig",crv:"P-256",kid:"YRYidQ+wetg=",x:"tdieg6q-5HvrfAd3ufPZthIWeQX4B_ytBp8iYAGpaJk",y:"pZCJnpZsj1nQABB-CT17nFzrAHD9bTerzpJNHh3l4B8"}},"YU9+X9nepqU=":{co:"ES",kid:"YU9+X9nepqU=",jwk:{kty:"EC","x5t#S256":"YU9-X9nepqX4bXSv-RaEcJiP23gjUPjMXsGfo2FQSRw",use:"sig",crv:"P-256",kid:"YU9+X9nepqU=",x:"gOuoVfBtfKWYpcffhNWfiCf4g4oZBdaPcdrn0HBtkQ8",y:"_cWKehZXxQD9WXtvS2jNXppxcY8kDVldynjZqHP7xWA"}},"ZcfkloEvfGQ=":{co:"ES",kid:"ZcfkloEvfGQ=",jwk:{kty:"EC","x5t#S256":"ZcfkloEvfGSuXvyPZV3YD_ujHUwWcu2lu63rTVLxktI",use:"sig",crv:"P-256",kid:"ZcfkloEvfGQ=",x:"V61Sl3v6NzBqyCbqSb8_fBodGle-b3RJ7Utk-uExDwY",y:"zsc0v_9hlE0RSluN6abJMq9xutP8XiQmnje0vQr7LHY"}},"e9SH8dtWwdY=":{co:"ES",kid:"e9SH8dtWwdY=",jwk:{kty:"EC","x5t#S256":"e9SH8dtWwdZ0IzPID5f-Jrx3ZXdcsBN_BvtYQj-hK7s",use:"sig",crv:"P-256",kid:"e9SH8dtWwdY=",x:"HZjrINN6u-ZGfRqaYqgqL-yZZCDlu-PKPCkVS_ysPos",y:"K6J7cJYc52z7KuVvndjcsV3mlAE_pU8kSstTQMThagA"}},"hgpHHrTb4ws=":{co:"ES",kid:"hgpHHrTb4ws=",jwk:{kty:"EC","x5t#S256":"hgpHHrTb4wswCsq78TQsEpgyinNyC1zpkCQlNM8inCI",use:"sig",crv:"P-256",kid:"hgpHHrTb4ws=",x:"li8eKthiom9EydKvhg7LHXj_f88_ZeNUpfEFm6kIAr0",y:"ytTQkUr9YKyZzYgXPZb4ILQI6hR0Ehk6L7UXBh3FbkQ"}},"qFNF2dC+mjQ=":{co:"ES",kid:"qFNF2dC+mjQ=",jwk:{kty:"EC","x5t#S256":"qFNF2dC-mjSR0IGpTUjjlt-SBep2WuO7oW4ZsojRXtQ",use:"sig",crv:"P-256",kid:"qFNF2dC+mjQ=",x:"3KVI7Sy-id-bprJ8Eh9AHtW-1qeC4qoHH1oK7HN87UI",y:"h_SsUIsdI6tEckm9nPuQjfpGwH7GBL1C3x06M9hVs1k"}},"tCM87WnaaQE=":{co:"ES",kid:"tCM87WnaaQE=",jwk:{kty:"EC","x5t#S256":"tCM87WnaaQGOLK-5bUR843ApnjIT2cWJyuftKuyAv-A",use:"sig",crv:"P-256",kid:"tCM87WnaaQE=",x:"DOg7lpxitz9-ytOAKFXxS7F4qc9IfKWrj388ETiCbLE",y:"ELqGHlhKfuMFzywhe0UaYOmcbfYhhvd2QMMZfINOTmo"}},"ub6Qmv9xtAo=":{co:"ES",kid:"ub6Qmv9xtAo=",jwk:{kty:"EC","x5t#S256":"ub6Qmv9xtAqgzif0xaYrDxyYRYVv5RSlPSZNRj7FYS8",use:"sig",crv:"P-256",kid:"ub6Qmv9xtAo=",x:"he-kvml2tx_-_wipHR5ttSw1PdmWGLpoEqzNiel2mWs",y:"GaL30gUfic64uzaR_LPEQUpxA3NJEE5dnUohAsvQ-OU"}},"x3ch4ml934I=":{co:"ES",kid:"x3ch4ml934I=",jwk:{kty:"EC","x5t#S256":"x3ch4ml934K1xSR9U9i77PgzgZsdlGx1pg2Q_7wn6uE",use:"sig",crv:"P-256",kid:"x3ch4ml934I=",x:"eC6-zmnjgdAUmYG4kIPJsMwSFSJclYoKuHKcIQ5PpX4",y:"MSsjN-hqdn5CrwEW8iWI3blPCczvZ60iC1cY7ikWqRc"}},"Is2JtrOJhik=":{co:"AT",kid:"Is2JtrOJhik=",jwk:{kty:"EC","x5t#S256":"Is2JtrOJhinpnQsaO73CXL3yZEx1jbytAn55PJ52JfU",crv:"P-256",kid:"Is2JtrOJhik=",x:"YE24qIKmdcfRWUh2TqklkfZ6nyNBpX4VHeLMxfFl8rk",y:"EPGZLtG3Jx-TmV3JJErfrSrPhRmfbSidVbTQ5nnZS-s"}},"7rZbUrXNlLk=":{co:"CY",kid:"7rZbUrXNlLk=",jwk:{kty:"EC","x5t#S256":"7rZbUrXNlLnQGiFeDlx4K5jUnCQx999TWiOKJmsE2Jo",crv:"P-256",kid:"7rZbUrXNlLk=",x:"7S_R06707Glu721qJqvxIFzQ2LSbq9P2uu6nRKCBLsE",y:"-a8j98F6YIC-oRodPNBeOtmxi07iP4V68RAdpEdlY8M"}},"e4lH6I4iMIM=":{co:"CZ",kid:"e4lH6I4iMIM=",jwk:{kty:"EC","x5t#S256":"e4lH6I4iMIMy1-9oEcKQdBq4tYiImWxzOjo7VZyuf-U",crv:"P-256",kid:"e4lH6I4iMIM=",x:"UIzSq5MMYg2oez_kdjVH73ZPmI3lAQZTJsLOGqhJNcY",y:"obJ_pubxS3jg1hTOv4V0Bki-erCI2yjK2Gte5SjQClM"}},"fNf883wPIEg=":{co:"CZ",kid:"fNf883wPIEg=",jwk:{kty:"EC","x5t#S256":"fNf883wPIEjxL_f14ybtwtvkhv7WINEpCCMMO8UL-b8",crv:"P-256",kid:"fNf883wPIEg=",x:"8Dj2k2EY_UqgKsSGvIwPRhLiMa2kYm-y02Sam1DJusQ",y:"CRTqWx2p5fcDPfFNsZ_WK6T4igl8J2kj4nl8l-xrJDo"}},"AN1EeLIMAmo=":{co:"PL",kid:"AN1EeLIMAmo=",jwk:{kty:"EC","x5t#S256":"AN1EeLIMAmqDUZSd_iEM4lWlHmE_fIMn5HCcHLhlrbU",crv:"P-256",kid:"AN1EeLIMAmo=",x:"RG4yI_SSv70zEtVjzIrn_CypR1e0BZO5u8bIgltZico",y:"4Pvfdp9muxrnMSus8vdcavBfFx-wdEiVO-apK_GdXfQ"}},"FDNJjaSCWi0=":{co:"PL",kid:"FDNJjaSCWi0=",jwk:{kty:"EC","x5t#S256":"FDNJjaSCWi24bflAWChU5rMog7UKeqC4ESgOFyL2Zp4",crv:"P-256",kid:"FDNJjaSCWi0=",x:"dxvWMfuk6CHCbffZWPS6bRgVYglYdED1NT1FCfXstUY",y:"fNQFpmDoerW2YDhfTjNZc6naRQ9bjphGdAPF12JpAdQ"}},"HhkeqvrtQ0U=":{co:"PL",kid:"HhkeqvrtQ0U=",jwk:{kty:"EC","x5t#S256":"HhkeqvrtQ0WdjNhplLpXTylB8zhZiRTjJBp_mk1K-sU",crv:"P-256",kid:"HhkeqvrtQ0U=",x:"gUesihG8ECIDnqxEoU9RouOR9y3NVLBUlpZ-ri-Ur7Q",y:"0CzkUAxN7PzOShhJZcAm7IE-nF1AE_JLp9dpjnCbe_I"}},"JkFekJel6/o=":{co:"LI",kid:"JkFekJel6/o=",jwk:{kty:"EC","x5t#S256":"JkFekJel6_o5qcYKV6J-r4XE4XRSndzyApPtGtYrAOk",crv:"P-256",kid:"JkFekJel6/o=",x:"BnFUjr8FpfpVaVFtCUW7Yg6JBk_n1TlJKEKpm_rZOvA",y:"BMyqcKEwqV6Vzz9Ujxob0F8yfouHQUB4G3cNkg6XGZk"}},"e/YRqyv++qY=":{co:"LI",kid:"e/YRqyv++qY=",jwk:{kty:"EC","x5t#S256":"e_YRqyv--qYkeb2tMnbk50CeKbJ7wO1KEH9vwG77pC0",crv:"P-256",kid:"e/YRqyv++qY=",x:"mCCGUDO95y6Rj40KX74cFgc99I9BnFoPBkZ3kcAyo2o",y:"v7JjeIG2FpKwtljBK7DfM2d-wvUYQBpR2AzfLTyW4gM"}},"jYpr5GHCDiQ=":{co:"LI",kid:"jYpr5GHCDiQ=",jwk:{kty:"EC","x5t#S256":"jYpr5GHCDiRmmYwxtuPM-HGgDmK6ds89vgfnZKiBAMs",crv:"P-256",kid:"jYpr5GHCDiQ=",x:"lHOTKQPe3GZKCAIsaBbPpAfJZ30ftIUsb_r6gHu19cI",y:"NtVzH4mQ0LiN8HvNns7Jsoy_4369c5UWKly5m6jq5CQ"}},"hA1+pwEOxCI=":{co:"RO",kid:"hA1+pwEOxCI=",jwk:{kty:"EC","x5t#S256":"hA1-pwEOxCJQVdJCo1UF20qctj0mp-xVM9O_oWi7NN0",crv:"P-256",kid:"hA1+pwEOxCI=",x:"IQ5LJGhrs3m__HC60__4N8WDL1DiHJRUTirld4U9ebA",y:"WGLE7cVpJxhtFLaJ9dsfMgx5u8Ju2kaBYXeTMVuBuXM"}},"3lTmAZX19GQ=":{co:"NL",kid:"3lTmAZX19GQ=",jwk:{kty:"EC","x5t#S256":"3lTmAZX19GQszm-yiitK_9hTftnElUPZI2StHXj3Rbo",crv:"P-256",kid:"3lTmAZX19GQ=",x:"_DBnhBhTf8TkfsTn4tLEb3mQLCsONkZbY4I5i0zh0Wg",y:"bA7qQ7IRp7uExOAIB-mP7gZ7Cfg-kJFQIpM2v67cPPc"}},"f+4yAPIGTWg=":{co:"NL",kid:"f+4yAPIGTWg=",jwk:{kty:"EC","x5t#S256":"f-4yAPIGTWgdZBliDCTlCY9f-uP7vx-cFb6eAcTbeHg",crv:"P-256",kid:"f+4yAPIGTWg=",x:"RyOtPhis4M-vOSM-4AoqtBot3s7AGrqQOSA2ZY3a25w",y:"-XuEJUaRMXdUt_fQgA76OY9Dcqq5v2s64RSLEgHPBSI"}},"pSEfhlMubh4=":{co:"NL",kid:"pSEfhlMubh4=",jwk:{kty:"EC","x5t#S256":"pSEfhlMubh6v9PGy_Jv3i0bXKcFoDZeYNC-zfrrU5nU",crv:"P-256",kid:"pSEfhlMubh4=",x:"iY-AGRWtd8tCUb5PQdEPaCWAZl0D_SIOtcDH8R8yrp8",y:"yU_DJjMVf8DNeVomX9PRMst4iV8BU_vWDgsqwQPwno4"}}};console.log("URL to all keys:",y);class x{constructor(){}static async fromJWK(e){const t=e.kty;let r;if("EC"==t)r={name:"ECDSA",namedCurve:"P-256"};else{if("RSA"!=t)throw new Error(`Invalid key type specified: ${e.kty}`);r={name:"RSA-PSS",hash:"SHA-256"}}let i=e.d?["sign"]:["verify"];return await crypto.subtle.importKey("jwk",e,r,!0,i)}static async generateECDSAKeyPair(){return await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"])}static async generateEncryptionKey(){return await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}static async exportToJWK(e){return await crypto.subtle.exportKey("jwk",e)}static async exportToPEM(e){return await crypto.subtle.exportKey("spki",e)}static async importFromPEMRaw(e){const t=window.atob(e);console.log(t);const r=function(e){const t=new ArrayBuffer(e.length),r=new Uint8Array(t);for(let i=0,o=e.length;i<o;i++)r[i]=e.charCodeAt(i);return t}(t);return console.log(r),await crypto.subtle.importKey("spki",r,{name:"ECDSA",namedCurve:"P-256"},!0,["verify"])}static async sign(e,t){if("private"!=e.type)throw new Error("Not a private key");return await window.crypto.subtle.sign({name:"ECDSA",hash:{name:"SHA-256"}},e,t)}static async verify(e,t,r){if("public"!=e.type)throw new Error("Not a public key");let i;console.log("Inside VERIFY",e);try{i=await window.crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-256"}},e,t,r)}catch(o){throw`Verification of payload failed: ${o}`}return console.log("Result:",i),i}static async encryptMessage(e,t){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");let r=crypto.getRandomValues(new Uint8Array(12));return{iv:r,ciphertext:await crypto.subtle.encrypt({name:"AES-GCM",iv:r},e,t)}}static async decryptMessage(e,t,r){if("secret"!=e.type)throw new Error("Not a symmetric encryption key");return await window.crypto.subtle.decrypt({name:"AES-GCM",iv:t},e,r)}}const E=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];var C;var S={publicKeys:void 0,init:async function(){this.publicKeys=y},get:async function(e){if(await this.init(),!e)throw"kid is undefined";let t=this.publicKeys[e];if(void 0===t)throw`Entry not found for kid: ${e}`;let r=t.jwk;if(void 0===r)throw`Entry for kid: ${e} des not have jwk`;return r}},P={valueSets:void 0,init:async function(e=!1){try{let e=await fetch("src/json/value-sets.json");this.valueSets=await e.json(),await w("valueSets",this.valueSets)}catch(t){throw console.log("ERROR getting the value sets",t),"ERROR getting the value sets"}},get:function(e,t){if(!e)return"N/A";let r=this.valueSets[t];if(!r)return e;let i=r.valueSetValues;if(!i)return e;let o=i[e];return o?o.display:e}};new TextEncoder,new TextDecoder;var I=new Map;I.set(-7,"ES256"),I.set(-37,"RSA");const A=class{static encode(e){var t,r=new ArrayBuffer(256),i=new DataView(r),o=0;function a(e){for(var a=r.byteLength,d=o+e;a<d;)a<<=1;if(a!==r.byteLength){var s=i;r=new ArrayBuffer(a),i=new DataView(r);for(var c=o+3>>2,n=0;n<c;++n)i.setUint32(n<<2,s.getUint32(n<<2))}return t=e,i}function d(){o+=t}function s(e){d(a(1).setUint8(o,e))}function c(e){for(var t=a(e.length),r=0;r<e.length;++r)t.setUint8(o+r,e[r]);d()}function n(e,t){var r;t<24?s(e<<5|t):t<256?(s(e<<5|24),s(t)):t<65536?(s(e<<5|25),r=t,d(a(2).setUint16(o,r))):t<4294967296?(s(e<<5|26),function(e){d(a(4).setUint32(o,e))}(t)):(s(e<<5|27),function(e){var t=e%POW_2_32,r=(e-t)/POW_2_32,i=a(8);i.setUint32(o,r),i.setUint32(o+4,t),d()}(t))}return function e(t){var r;if(!1===t)return s(244);if(!0===t)return s(245);if(null===t)return s(246);if(void 0===t)return s(247);switch(typeof t){case"number":if(Math.floor(t)===t){if(0<=t&&t<=POW_2_53)return n(0,t);if(-POW_2_53<=t&&t<0)return n(1,-(t+1))}return s(251),function(e){d(a(8).setFloat64(o,e))}(t);case"string":var i=[];for(r=0;r<t.length;++r){var l=t.charCodeAt(r);l<128?i.push(l):l<2048?(i.push(192|l>>6),i.push(128|63&l)):l<55296?(i.push(224|l>>12),i.push(128|l>>6&63),i.push(128|63&l)):(l=(1023&l)<<10,l|=1023&t.charCodeAt(++r),l+=65536,i.push(240|l>>18),i.push(128|l>>12&63),i.push(128|l>>6&63),i.push(128|63&l))}return n(3,i.length),c(i);default:var v;if(Array.isArray(t))for(n(4,v=t.length),r=0;r<v;++r)e(t[r]);else if(t instanceof Uint8Array)n(2,t.length),c(t);else if(t instanceof Map){n(5,v=t.size);for(let[r,i]of t)e(r),e(i)}else{var w=Object.keys(t);for(n(5,v=w.length),r=0;r<v;++r){var p=w[r];e(p),e(t[p])}}}}(e),r.slice(0,o)}static async verifyCWT(e,t){let[r,i,o,a]=A.decode(e);const d=["Signature1",r,new Uint8Array(0),o];let s=A.encode(d),c=!1;try{c=await x.verify(t,a,s),console.log("VERIFIED:",c)}catch(n){console.log("ERROR:",n)}return c}static decode(e,t,r){var i=new DataView(e),o=0;function a(e,t){return o+=e,t}function d(t){return a(t,new Uint8Array(e,o,t))}function s(){return a(1,i.getUint8(o))}function c(){return a(2,i.getUint16(o))}function n(){return a(4,i.getUint32(o))}function l(){return 255===i.getUint8(o)&&(o+=1,!0)}function v(e){if(e<24)return e;if(24===e)return s();if(25===e)return c();if(26===e)return n();if(27===e)return n()*POW_2_32+n();if(31===e)return-1;throw"Invalid length encoding"}function w(e){var t=s();if(255===t)return-1;var r=v(31&t);if(r<0||t>>5!==e)throw"Invalid indefinite length element";return r}function p(e,t){for(var r=0;r<t;++r){var i=s();128&i&&(i<224?(i=(31&i)<<6|63&s(),t-=1):i<240?(i=(15&i)<<12|(63&s())<<6|63&s(),t-=2):(i=(15&i)<<18|(63&s())<<12|(63&s())<<6|63&s(),t-=3)),i<65536?e.push(i):(i-=65536,e.push(55296|i>>10),e.push(56320|1023&i))}}"function"!=typeof t&&(t=function(e){return e}),"function"!=typeof r&&(r=function(){});var h=function e(){var n,h,g=s(),k=g>>5,u=31&g;if(7===k)switch(u){case 25:return function(){var e=new ArrayBuffer(4),t=new DataView(e),r=c(),i=32768&r,o=31744&r,a=1023&r;if(31744===o)o=261120;else if(0!==o)o+=114688;else if(0!==a)return(i?-1:1)*a*POW_2_24;return t.setUint32(0,i<<16|o<<13|a<<13),t.getFloat32(0)}();case 26:return a(4,i.getFloat32(o));case 27:return a(8,i.getFloat64(o))}if((h=v(u))<0&&(k<2||6<k))throw"Invalid length";switch(k){case 0:return h;case 1:return-1-h;case 2:if(h<0){for(var m=[],b=0;(h=w(k))>=0;)b+=h,m.push(d(h));var f=new Uint8Array(b),y=0;for(n=0;n<m.length;++n)f.set(m[n],y),y+=m[n].length;return f}return d(h);case 3:var x=[];if(h<0)for(;(h=w(k))>=0;)p(x,h);else p(x,h);return String.fromCharCode.apply(null,x);case 4:var E;if(h<0)for(console.log("INDEFINITE LENGTH ARRAY"),E=[];!l();)E.push(e());else for(E=new Array(h),n=0;n<h;++n)E[n]=e();return E;case 5:var C=new Map;for(n=0;n<h||h<0&&!l();++n){var S=e();C.set(S,e())}return C;case 6:return t(e(),h);case 7:switch(h){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return r(h)}}}();if(o!==e.byteLength)throw"Remaining bytes";return h}static async decodeCWT(e,t){var r=new DataView(e).getUint8(0),i=r>>5,o=31&r;if(6!=i)throw new Error(`COSE object must start with a tag: ${i}`);if(18!=o)throw new Error(`Not a COSE Single signature, tag: ${o}`);e=e.slice(1);let[a,d,s,c]=A.decode(e),n=function(e,t){let r=e.slice(),i=A.decode(r.buffer),o=i.get(1);if(void 0===o)throw"Missing algorithm in protected headers";let a=I.get(o);if(void 0===a)throw`Invalid algorithm specified: ${o}`;let d={};d.alg=a;let s=i.get(4);if(void 0===s&&(s=t.get(4)),void 0===s)throw"Missing kid in headers";let c="";for(let n=0;n<s.length;n++)c+=String.fromCodePoint(s[n]);return c=window.btoa(c),d.kid=c,d}(a,d),l=!1;if(t){let t=n.kid,r=await S.get(t),i=await x.fromJWK(r);l=await A.verifyCWT(e,i)}return s=function(e){e=e.slice();let t=A.decode(e.buffer);e={};for(let[d,s]of t)switch(d){case 1:e.iss=s;break;case 2:e.sub=s;break;case 3:e.aud=s;break;case 4:e.exp=s;break;case 5:e.nbf=s;break;case 6:e.iat=s;break;case 7:e.cti=s}let r=t.get(-260);if(null==r)throw"No hcert found";let i,o=r.get(1);if(null==o)throw"No EU COVID certificate found";try{e.version=o.get("ver"),e.foreName=o.get("nam").get("fn"),e.givenName=o.get("nam").get("gn"),e.fullName=e.foreName+", "+e.givenName,e.dateOfBirth=o.get("dob")}catch(a){throw`Error accessing required common fields: ${a}`}if(o.get("v"))e.certType="v",i=o.get("v")[0];else if(o.get("r"))e.certType="r",i=o.get("r")[0];else{if(!o.get("t"))throw"Invalid EU COVID certificate type";e.certType="t",i=o.get("t")[0]}return"v"===e.certType?(e.diseaseTargeted=P.get(i.get("tg"),"disease-agent-targeted"),e.vaccineProphylaxis=P.get(i.get("vp"),"vaccine-prophylaxis"),e.medicinalProduct=P.get(i.get("mp"),"vaccine-medicinal-product"),e.manufacturer=P.get(i.get("ma"),"vaccine-mah-manf"),e.doseNumber=i.get("dn"),e.doseTotal=i.get("sd"),e.dateVaccination=i.get("dt"),e.country=P.get(i.get("co"),"country-2-codes"),e.certificateIssuer=i.get("is"),e.uniqueIdentifier=i.get("ci")):"t"===e.certType?(e.diseaseTargeted=P.get(i.get("tg"),"disease-agent-targeted"),e.typeTest=P.get(i.get("tt"),"test-type"),e.testName=i.get("nm"),e.manufacturer=P.get(i.get("ma"),"test-manf"),e.timeSample=i.get("sc"),e.testResult=P.get(i.get("tr"),"test-result"),e.testingCentre=i.get("tc"),e.country=P.get(i.get("co"),"country-2-codes"),e.certificateIssuer=i.get("is"),e.uniqueIdentifier=i.get("ci")):"r"===e.certType&&(e.diseaseTargeted=P.get(i.get("tg"),"disease-agent-targeted"),e.datePositive=i.get("fr"),e.dateFrom=i.get("df"),e.dateUntil=i.get("du"),e.country=P.get(i.get("co"),"country-2-codes"),e.certificateIssuer=i.get("is"),e.uniqueIdentifier=i.get("ci")),e}(s),console.log("Payload:",s),[n,s,c,l]}static async decodeHC1QR(e,t=!1){if(!e.startsWith("HC1:"))throw"Certificate does not start with 'HC1:'";let r=function(e){if(null==e)throw new Error("utf8StringArg is null or undefined.");if(0===e.length)return[];var t=e.length%3;if(1===t)throw new Error("utf8StringArg has incorrect length.");if(void 0===C){C={};for(let e=0;e<E.length;++e)C[E[e]]=e}const r=new Array(e.length);for(let s=0;s<e.length;++s){const t=C[e[s]];if(void 0===t)throw new Error("Invalid character at position ".concat(s).concat("."));r[s]=t}const i=Math.trunc(r.length/3);var o=new Array(2*i+(2===t?1:0)),a=0;const d=3*i;for(let s=0;s<d;){const e=r[s++]+45*r[s++]+2025*r[s++];o[a++]=Math.trunc(e/256),o[a++]=e%256}return 0===t||(o[o.length-1]=r[r.length-2]+45*r[r.length-1]),o}(e=e.slice(4));r=new Uint8Array(r);let i=pako.inflate(r),[o,a,d,s]=await A.decodeCWT(i.buffer,t);return[o,a,d,s]}static displayMB(e){var t=e>>5,r=31&e;switch(7===t&&console.log("FLOAT"),t){case 0:return void console.log(`Integer ${r}`);case 1:return void console.log("Negative Integer "+(-1-r));case 2:return console.log(`Bstr ${r}`),`Bstr ${r}`;case 3:return void console.log(`String ${r}`);case 4:return void console.log(`Array ${r}`);case 5:return void console.log(`Map ${r}`);case 6:return void console.log(`Tag ${r}`);case 7:switch(r){case 20:return void console.log("FALSE");case 21:return void console.log("TRUE");case 22:return void console.log("NULL");case 23:return void console.log("UNDEFINED");default:return void console.log("Simple Value")}}}};let j=A;t(j,"POW_2_24",5.960464477539063e-8),t(j,"POW_2_32",4294967296),t(j,"POW_2_53",Number.MAX_SAFE_INTEGER);class D extends o{constructor(){console.log("Inside constructor of JRMPAGE"),super()}enter(){console.log("Enter JRMPAGE"),this.style.display="block",this.requestUpdate()}}t(D,"styles",[p]);const q=class extends D{constructor(){console.log("Inside constructor of DEMO PAGE"),super()}render(){return a`
        <!-- =========================================== -->
        <!-- PASSENGER HOME                              -->
        <!-- =========================================== -->
        <div class="w3-container">
            <h2>You do not have any credentials yet</h2>
            <p>Click the button below to add credentials</p>
        </div>
        <div class="plus radius w3-card-4 fab"></div>
        `}enter(){console.log("Enter page DEMO"),this.style.display="block",this.requestUpdate()}};let U=q;t(U,"styles",[q.styles,i`
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
        `]),customElements.define("passenger-home",U);customElements.define("demo-page",class extends D{static get properties(){return{perico1:{type:Object},perico2:{attribute:!1}}}constructor(){console.log("Inside constructor of DEMO PAGE"),super(),this.perico1="default 111111",this.perico2="default 222222"}render(){return a`
        <!-- =========================================== -->
        <!-- HOME PAGE for demos. It has several roles   -->
        <!-- and the user can choose                     -->
        <!-- =========================================== -->
        
        <div class="w3-container">
            <a @click=${()=>b("passenger")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Passenger</h3>
                    <p>Receive or show your test results</p>
                </div>
            </a>
            
            <a @click=${()=>b("verifier")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am a Verifier</h3>
                    <p>Review the test results of a passenger</p>
                </div>
            </a>
            
            <a @click=${()=>b("issuerHome")}>
                <div class="w3-panel w3-card-4">
                    <h3>I am an Issuer</h3>
                    <p>Check my lab test results</p>
                </div>
            </a>
            
            <a @click=${()=>b("pubcreds")}>
                <div class="w3-panel w3-card-4">
                    <h3>Public Credentials</h3>
                    <p>Query the public credentials</p>
                </div>
            </a>
            
            <a @click=${()=>b("admin")}>
                <div class="w3-panel w3-card-4">
                    <h3 class="card-title">Admin</h3>
                    <p>Only if you know what you are doing</p>
                </div>
            </a>
        </div>
        `}enter(){console.log("Enter page DEMO",this.perico1,this.perico2),this.style.display="block",this.requestUpdate()}});var M="scanqr-page";class Y extends o{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANQR"),super(),this.codeReader=new d,this.videoInputDevices=[],this.selectedDeviceId=void 0,this.selectHtml=a``,this.resultObj=void 0,this.result=void 0,this.videoElem=void 0}render(){return a`
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
            `),e}async enter(){if(console.log("SCANQR Enter",this.clientWidth),this.style.display="block",this.result=void 0,void 0===this.videoElem){let r={video:{facingMode:"environment"}};try{var e=await navigator.mediaDevices.getUserMedia(r)}catch(t){if(t instanceof NotAllowedError)throw t;if(t instanceof NotFoundError)throw t}let i=e.getVideoTracks()[0].getSettings().deviceId;this.selectedDeviceId=i,this.videoInputDevices=await this.codeReader.listVideoInputDevices();let o=this.renderRoot.querySelector("#videoPlaceholder");this.videoElem=document.createElement("video"),this.videoElem.style.width="100%",o.append(this.videoElem)}this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,t)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),b("scanresult",e)),!t||t instanceof s||(console.error(t),this.result=t,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}selected(e){console.log(e.target.id),this.selectedDeviceId=e.target.id,this.toggleView(),this.codeReader.reset(),this.codeReader.decodeFromVideoDevice(this.selectedDeviceId,this.videoElem,((e,t)=>{e&&(console.log("RESULT",e),this.codeReader.reset(),b("scanresult",e)),!t||t instanceof s||(console.error(t),this.result=t,this.requestUpdate())})),console.log(`Started continous decode from camera with id ${this.selectedDeviceId}`),this.requestUpdate()}async exit(){this.codeReader.reset()}}t(Y,"styles",[p,i`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(M,Y),M="scanqr-result";class R extends o{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANRESULT"),super(),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e){console.log("PRESENT Enter",e),this.qrContent=e.text,this.style.display="block";try{this.hcert=await j.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(t){return void l.myerror("Error verifying credential",t)}try{this.thehtml=function(e){let t=e[1],r="Unrecognized";"v"==t.certType&&(r=a`
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
        `);return r}(this.hcert)}catch(t){return void l.myerror("Error rendering credential",t)}this.requestUpdate()}async exit(){}}t(R,"styles",[p,i`
        #footer {
            position: fixed;
            bottom: 0
        }
        `]),customElements.define(M,R);class Q extends o{static get properties(){return{pepe:{attribute:!0}}}constructor(){console.log("Inside constructor of SCANRESULT"),super(),this.thehtml="",this.qrContent="",this.hcert=void 0,this.verified=!1}render(){return a`
            <!-- =========================================== -->
            <!-- SCAN RESULT PAGE.                           -->
            <!-- =========================================== -->
            ${this.thehtml}
            `}async enter(e){console.log("PRESENT Enter",e),this.qrContent="HC1:NCFOXN%TSMAHN-HPO45JVLFDISVM85:D4*OV-36QHN-TM5*KQM3*GML0FXIKMWDWYPWHH:ZH6I1$4JN:IN1MPK9V L9L69UEG%6M415BEC4633F-96SW6SJE3ZMXDMUF6NZ6E6AH+932Q6G39ZILAPZXI$MI1VCSWC%PDMOL7AD.XIIXB0 J5QB06JOMI/LKW1JVTIM7JZIJI7JIZI.EJJ14B2MZ8DC8CWVD 8D*NI+PB/VSQOL9DLKWCZ3E7KDW0KZ J$XI4OIMEDTJCJKDLEDL9CZTAKBI/8D:8DKTDL+SQ05.$S6ZCJKBPKJDG3LWTXD3/9TL4T.B9GYP8T1+1V$LA*ZEBH1T+UZ%HQK9CZPME1.*UWKU/.1ZY9 UPG706ZRB KYZQBK9-RUUBCFRMLNKNM8JI0JPGO7HWPAG2B5VL3K9OTJ0UL4ZVBWSA81TXH4YVZ38+APZGJKDJB1PGB49WE*7CY2P3LM DOLQ9KKAX15BP3:GNSFKPOQU-0DCOTCPHXOP40SF355",this.style.display="block";try{this.hcert=await j.decodeHC1QR(this.qrContent,!0),this.verified=this.hcert[3]}catch(t){return void l.myerror("Error verifying credential",t)}try{this.thehtml=this.renderDetail(this.hcert)}catch(t){return void l.myerror("Error rendering credential",t)}this.requestUpdate()}async exit(){}toggleView(e){this.renderRoot.querySelector(e).classList.toggle("w3-show")}renderDetail(e){let t=e[1],r="Unrecognized";return"v"==t.certType&&(r=a`
                
            <section class="section">
                <div class="subsection">
                    <img class="" width="60px" src="src/img/eulogo.png" alt="EUlogo">
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
            `),r}}t(Q,"styles",[p,i`
        .container{padding:0.01em 16px}
        .section{padding:0.01em 16px;margin-top:0px;margin-bottom:16px;border:1px solid #ccc}
        .valor{font-weight:600}
        `]),customElements.define("display-hcert",Q);class L extends o{constructor(){console.log("Inside constructor of PAGE404"),super()}render(){return a`
        <div class="jrmpage w3-container">
            <h1>The page does not exist!</h1>
        </div>
        `}enter(){console.log("Enter page"),this.style.display="block",this.requestUpdate()}}t(L,"styles",[p]),customElements.define("page-404",L);var N=[{name:"demo",tagName:"demo-page"},{name:"passenger",tagName:"passenger-home"},{name:"verifier",tagName:"scanqr-page"},{name:"scanresult",tagName:"scanqr-result"},{name:"displayhcert",tagName:"display-hcert"},{name:"page404",tagName:"page-404"}];let T=document.createElement("router-elem");document.body.replaceChildren(T);for(let V=0;V<N.length;V++){let e=document.createElement(N[V].tagName);e.style.display="none",document.body.append(e),K=N[V].name,G=e,console.log("ROUTER: register page:",K),k.set(K,G)}var K,G,O="displayhcert";if(window.location.search.length>0){let e=new URLSearchParams(window.location.search);null!==e.get("home")?O="passenger":null!==e.get("verifier")?O="verifierScanQR":null!==e.get("demo")?O="demo":null!==e.get("admin")?O="admin":null!==e.get("pubcred")?O="pubcreds":l.mywarn("URL parameter not recognised",window.location.search)}console.log("Home_page:",O),g=O;const B="https://safeislandtest.hesusruiz.org";window.addEventListener("load",(async e=>{await async function(){if(console.log("Performing OneTime Initialization"),await S.init(),await P.init(),1!=await async function(e){try{var t=await v.settings.get(e)}catch(r){console.error(r),alert("Error in get setting")}if(null!=t)return t.value}("initialized")){try{await w("apiHost",B)}catch(e){l.myerror("Onetime initialization error")}await w("initialized",!0)}}();let t=window.location.search,r=new URLSearchParams(t),i=r.get("id");if(i){var o="https://api.lanzarotesafe.org/sms/"+i;await requestQRAndDisplay(o,"displayCredentialPage","fromPassengerScan")}else{if(i=r.get("pubid"),i){o="https://safeislandtest.hesusruiz.org/api/verifiable-credential/v1/public/"+i;return console.log("Public Credential",o),void(await requestQRAndDisplay(o,"displayCredentialPage","fromPassengerScan"))}await m()}}));
