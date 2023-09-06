(()=>{"use strict";var e,n,t,r,o,i,a,c,s,u,l,d,p,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n    font-family: 'Anton', sans-serif;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    position: relative;\n}\n\nheader {\n    height: 60px;\n    display: flex;\n    justify-content: end;\n    border-bottom: 1px solid black;\n}\n\n#weatherForm {\n    display: flex;\n    align-items: center;\n    margin: 0;\n}\n\n#locationInput {\n    height: 40px;\n    width: 240px;\n    background-color: rgba(172, 171, 171, 0.365);\n    border: none;\n    border-radius: 6px;\n    margin-right: 50px;\n    padding: 0px 20px;\n}\n\n.general-info {\n    position: absolute;\n    top: 30%;\n    left: 10%; \n}\n\n.extra-info {\n    height: 76%;\n    padding-left: 30px;\n    border-left: 1px solid black;\n}\n\n.temp-container {\n    display: flex;\n    align-items: center;\n}\n\np, h1, h2 {\n    margin: 0;\n}\n.condition{\n    font-size: 2em;\n}\n\n.city {\n    font-size: 3.5em;\n}\n\n.country {\n    font-size: 2em;\n}\n\n.temp {\n    font-size: 6em;\n    padding-right: 50px;\n    position: relative;\n}\n\n.temp .degree {\n    font-size: 30%;\n    position: absolute;\n    top: 5%;\n    \n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function y(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,y),t.exports}y.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return y.d(n,{a:n}),n},y.d=(e,n)=>{for(var t in n)y.o(n,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},y.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),y.nc=void 0,e=y(379),n=y.n(e),t=y(795),r=y.n(t),o=y(569),i=y.n(o),a=y(565),c=y.n(a),s=y(216),u=y.n(s),l=y(589),d=y.n(l),p=y(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.getElementById("weatherForm").addEventListener("submit",(async e=>{e.preventDefault();const n=document.getElementById("locationInput").value;if(n)try{const e=await async function(e){const n=`https://api.weatherapi.com/v1/current.json?key=e768ec92b4d440e1a4c25011232908&q=${e}`;try{const e=await fetch(n);if(!e.ok)throw 404===e.status?new Error("Location not found"):new Error("Network response not ok");return{location:{country:(t=await e.json()).location.country,localtime:t.location.localtime,name:t.location.name},current:{condition:t.current.condition.text,feelslike_c:t.current.feelslike_c,feelslike_f:t.current.feelslike_f,humidity:t.current.humidity,temp_c:t.current.temp_c,temp_f:t.current.temp_f,wind_kph:t.current.wind_kph,wind_mph:t.current.wind_mph}}}catch(e){throw console.log("There was an error!",e),e}var t}(n);!function(e){const{location:{country:n,name:t},current:{condition:r,feelslike_c:o,wind_kph:i,humidity:a,temp_c:c}}=e,s=document.querySelector(".condition"),u=document.querySelector(".city"),l=document.querySelector(".country"),d=document.querySelector(".temp"),p=document.querySelector(".feels-like"),f=document.querySelector(".wind"),m=document.querySelector(".humidity");s.textContent=r,u.textContent=t,l.textContent=n,d.innerHTML=`${c}<span class="degree">°C</span>`,p.innerHTML=`Feels like: ${o}<span class="degree">°C</span>`,f.textContent=`Wind Speed: ${i}KPH`,m.textContent=`Humidity: ${a}%`}(e)}catch(e){console.log("Error fetching weather:",e)}}))})();