(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab0f31ce"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"1e9eea97"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e17f");var r=n("2241"),a=(n("c3a6"),n("ad06")),o=(n("4056"),n("44bf")),u=(n("c194"),n("7744")),i=(n("2994"),n("2bdd")),c=(n("66cf"),n("343b")),s=(n("4b0a"),n("2bb1")),l=(n("7844"),n("5596")),f=(n("66b9"),n("b650")),d=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},b=[],h=(n("034f"),n("2877")),m={},v=Object(h["a"])(m,p,b,!1,null,null,null),g=v.exports,y=(n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-button",{attrs:{type:"primary"}},[e._v("主要按钮")])},E=[];d["a"].use(f["a"]);var O={name:"",data:function(){return{}},methods:{a:function(){}},mounted:function(){}},_=O,j=Object(h["a"])(_,w,E,!1,null,"77634799",null),x=j.exports;d["a"].use(y["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/details",name:"details",component:function(){return n.e("about").then(n.bind(null,"58cc"))}}],S=new y["a"]({mode:"history",base:"/",routes:P}),L=S;n("db49");d["a"].use(f["a"]),d["a"].use(l["a"]),d["a"].use(s["a"]),d["a"].use(c["a"]),d["a"].use(i["a"]),d["a"].use(u["a"]),d["a"].use(o["a"]),d["a"].use(a["a"]),d["a"].use(r["a"]),d["a"].config.productionTip=!1,new d["a"]({router:L,render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){},db49:function(e,t){(function(e,t){var n;n=e.documentElement,resizeEvt="orientationchange"in window?"orientationchange":"resize",recalc=function(){var e=n.clientWidth;e&&(n.style.fontSize=e>=750?"100px":e/750*100+"px")},e.addEventListener&&(t.addEventListener(resizeEvt,recalc,!1),e.addEventListener("DOMContentLoaded",recalc,!1))})(document,window)}});
//# sourceMappingURL=app.571e3d1a.js.map