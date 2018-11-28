(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{280:function(e,n,t){"use strict";t.r(n);var r=["cnn","bbc-news","daily-mail","business-insider","mtv-news","hacker-news","the-guardian-uk","google-news","usa-today"];function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.newsWrapper=n,this.sources=t}var n,t,r;return n=e,(t=[{key:"addNavBurgerListener",value:function(){document.getElementById("navToggle").addEventListener("click",this.toggleNavPanel,!1)}},{key:"toggleNavPanel",value:function(){var e=document.getElementById("content-wrapper");navToggle.classList.toggle("active"),overlay.classList.toggle("open"),e.classList.toggle("nav-space")}},{key:"createMenuItem",value:function(e){return'<li class="list-Item" id="">\n                    <a href="#" data-channel='.concat(e,' class="news-list">').concat(e,"</a>\n                </li>")}},{key:"createMenuItems",value:function(){var e=this;return this.sources.reduce(function(n,t){return"".concat(n).concat(e.createMenuItem(t))},"")}},{key:"createMenuBlock",value:function(){return'<div class="overlay" id="overlay">\n                    <nav class="overlayMenu" id="">\n                        <ul class="menu" id="menu">'.concat(this.createMenuItems(),'</ul>\n                    </nav>\n                </div>\n                <div class="navBurger" id="navToggle"></div>')}},{key:"render",value:function(){this.newsWrapper.innerHTML=this.createMenuBlock()}}])&&i(n.prototype,t),r&&i(n,r),e}();function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t,this.newsList=n}var n,t,r;return n=e,(t=[{key:"publicationDate",value:function(e){return new Date(e).toGMTString()}},{key:"createArticleItem",value:function(e){return'<li class="news-item">\n                    <h3 class="title">\n                        <a href='.concat(e.url,' class="news-link">').concat(e.title,'</a>\n                    </h3>\n                    <div class="article-item-content">\n                        <figure class="news-image">\n                            <img src=').concat(e.urlToImage,' class="image">\n                        </figure>\n                        <p class="description">').concat(e.description,'</p>\n                        <span class="news-date">').concat(this.publicationDate(e.publishedAt),"</span>\n                    </div>\n                </li>")}},{key:"createArticlesBlock",value:function(){var e=this;return this.data.articles.reduce(function(n,t){return"".concat(n).concat(e.createArticleItem(t))},"")}},{key:"render",value:function(){this.newsList.innerHTML=this.createArticlesBlock()}},{key:"update",value:function(e){this.data=e}}])&&o(n.prototype,t),r&&o(n,r),e}();function c(e,n,t,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,i)}var l=function(){var e,n=(e=regeneratorRuntime.mark(function e(n,t){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://newsapi.org/v1/articles?source=").concat(n,"&sortBy=top").concat("&apiKey=8b0ecc14a33147d4ad63d53efee42cb8"));case 2:return r=e.sent,e.next=5,r.json();case 5:i=e.sent,document.getElementsByClassName("heading")[0].innerHTML="News: ".concat(n),t.update(i),t.render();case 9:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,i){var a=e.apply(n,t);function o(e){c(a,r,i,o,s,"next",e)}function s(e){c(a,r,i,o,s,"throw",e)}o(void 0)})});return function(e,t){return n.apply(this,arguments)}}(),u=function(e){for(var n=[],t=0;t<e.list.people.length;t++)Object.keys(e.list.people[t]).forEach(function(e){-1===n.indexOf(e)&&n.push(e)});console.log(n)};t(281);function f(){var e=t(286);u(e);var n=document.getElementById("menu-wrapper"),i=new a(n,r);i.render(),i.addNavBurgerListener();var o=document.getElementById("news-list"),c=new s(o);l(r[0],c).catch(function(e){console.log(JSON.stringify(e))}),document.getElementById("menu").addEventListener("click",function(e){var n=e.target.dataset.channel;n&&l(n,c).catch(function(e){console.log(JSON.stringify(e))})})}t.d(n,"init",function(){return f})},281:function(e,n,t){var r=t(282);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(284)(r,i);r.locals&&(e.exports=r.locals)},282:function(e,n,t){(e.exports=t(283)(!1)).push([e.i,".news-list {\n  max-width: 100%;\n  list-style-type: none; }\n  .news-list .news-item {\n    margin-bottom: 30px;\n    background-color: #f3f3f3;\n    text-align: center; }\n    .news-list .news-item .title {\n      overflow: hidden;\n      width: 100%;\n      color: #e1e6e9;\n      text-shadow: 0 1px 0 rgba(23, 31, 35, 0.5);\n      border-radius: 3px; }\n      .news-list .news-item .title:hover {\n        background: #dadada; }\n    .news-list .news-item .article-item-content {\n      display: block; }\n      .news-list .news-item .article-item-content .news-image {\n        width: 40%;\n        height: auto;\n        float: left; }\n        .news-list .news-item .article-item-content .news-image .image {\n          display: block;\n          width: 90%;\n          margin: 5%; }\n        .news-list .news-item .article-item-content .news-image .description {\n          float: left;\n          width: 60%;\n          font-weight: 500;\n          padding: 20px 0;\n          transition-duration: 0.5s; }\n        .news-list .news-item .article-item-content .news-image .news-date {\n          display: inline-block;\n          width: 100%;\n          padding: 10px;\n          text-align: right; }\n",""])},283:function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(a).concat([i]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},284:function(e,n,t){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,l=0,u=[],f=t(285);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(w(r.parts[o],n))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(w(r.parts[o],n));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,n){for(var t=[],r={},i=0;i<e.length;i++){var a=e[i],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function v(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,t);t.insertBefore(n,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),v(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function w(e,n){var t,r,i,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var o=l++;t=c||(c=m(n)),r=k.bind(null,t,o,!1),i=k.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),v(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||a)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var o=t[i];(s=a[o.id]).refs--,r.push(s)}e&&d(p(e,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var y,b=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function k(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},285:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},286:function(e){e.exports={list:{people:[{name:["Alex"],age:["allReplacedKeysAsUnique"],gender:["Male"],allReplacedKeysAsUnique:["Mal"],greeting:["hello"]},{name:["anna"],age:["allReplacedKeysAsUnique"],allReplacedKeysAsUnique:["Female"]},{nicename:["Alex"],age:["allReplacedKeysAsUnique"],gender:["Male"],allReplacedKeysAsUnique:["Ma"],greeting:["hi"]}]}}}}]);