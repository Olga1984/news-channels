(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/newsList.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/newsList.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".news-list {\\n  max-width: 100%;\\n  list-style-type: none; }\\n  .news-list .news-item {\\n    margin-bottom: 30px;\\n    background-color: #f3f3f3;\\n    text-align: center; }\\n    .news-list .news-item .title {\\n      overflow: hidden;\\n      width: 100%;\\n      color: #e1e6e9;\\n      text-shadow: 0 1px 0 rgba(23, 31, 35, 0.5);\\n      border-radius: 3px;\\n      height: 40px; }\\n      .news-list .news-item .title:hover {\\n        background: #dadada; }\\n      .news-list .news-item .title .news-link {\\n        color: cornflowerblue;\\n        text-align: center;\\n        text-decoration: none; }\\n    .news-list .news-item .article-item-content {\\n      display: block;\\n      overflow: hidden; }\\n      .news-list .news-item .article-item-content .news-image {\\n        width: 40%;\\n        height: auto;\\n        float: left; }\\n        .news-list .news-item .article-item-content .news-image .image {\\n          display: block;\\n          width: 90%;\\n          margin: 5%; }\\n      .news-list .news-item .article-item-content .description {\\n        float: left;\\n        width: 60%;\\n        font-weight: 500;\\n        padding: 20px 0;\\n        transition-duration: 0.5s; }\\n      .news-list .news-item .article-item-content .news-date {\\n        display: inline-block;\\n        width: 100%;\\n        padding: 10px;\\n        text-align: right; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/newsList.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/newsMenu.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/newsMenu.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@keyframes fadeInRight {\\n  0% {\\n    opacity: 0;\\n    left: 50px; }\\n  100% {\\n    opacity: 1;\\n    left: 0;\\n    transform: rotate(0deg); } }\\n\\n.menu-wrapper .overlay {\\n  position: fixed;\\n  background: #e7e7e7;\\n  top: 0;\\n  left: 0;\\n  width: 35%;\\n  height: 100%;\\n  opacity: 0;\\n  transform-origin: left top;\\n  transform: scale(0);\\n  visibility: hidden;\\n  transition: all 0.4s ease-in-out;\\n  overflow: hidden; }\\n  .menu-wrapper .overlay .overlayMenu {\\n    position: absolute;\\n    top: 10vw;\\n    width: 100%; }\\n    .menu-wrapper .overlay .overlayMenu ul {\\n      list-style: none;\\n      padding: 0;\\n      margin: 0 auto;\\n      display: block;\\n      position: relative;\\n      height: 100%; }\\n      .menu-wrapper .overlay .overlayMenu ul li {\\n        display: block;\\n        position: relative;\\n        opacity: 0;\\n        width: 100%;\\n        border-top: 1px solid #6495ed; }\\n        .menu-wrapper .overlay .overlayMenu ul li a {\\n          display: block;\\n          width: 100%;\\n          color: #000;\\n          text-decoration: none;\\n          text-transform: uppercase;\\n          padding: 15px 40px 15px 40px;\\n          transition: 0.2s; }\\n        .menu-wrapper .overlay .overlayMenu ul li:hover, .menu-wrapper .overlay .overlayMenu ul li:active, .menu-wrapper .overlay .overlayMenu ul li:focus {\\n          transform: translateX(-2px);\\n          background: #b3c6ea; }\\n  .menu-wrapper .overlay.open {\\n    opacity: 0.99;\\n    visibility: visible;\\n    transform: scale(1); }\\n    .menu-wrapper .overlay.open li {\\n      display: block;\\n      animation: fadeInRight 0.4s cubic-bezier(0.42, 0.83, 0.7, 1.5) forwards;\\n      animation-delay: 0.4s;\\n      transform: rotate(-7deg);\\n      transform-origin: left top; }\\n      .menu-wrapper .overlay.open li:nth-of-type(2) {\\n        animation-delay: 0.2s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(3) {\\n        animation-delay: 0.3s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(4) {\\n        animation-delay: 0.4s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(5) {\\n        animation-delay: 0.5s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(6) {\\n        animation-delay: 0.6s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(7) {\\n        animation-delay: 0.7s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(8) {\\n        animation-delay: 0.8s; }\\n      .menu-wrapper .overlay.open li:nth-of-type(9) {\\n        animation-delay: 0.9s; }\\n\\n.menu-wrapper .navBurger {\\n  position: fixed;\\n  left: 12px;\\n  top: 12px;\\n  cursor: pointer;\\n  background: #111;\\n  box-sizing: border-box;\\n  background-clip: content-box;\\n  width: 4%;\\n  height: 2.6%;\\n  max-width: 24px;\\n  border-top: 11px solid transparent;\\n  border-bottom: 11px solid transparent;\\n  transform: rotate(0deg);\\n  transition: all 0.25s ease-in-out; }\\n  .menu-wrapper .navBurger:before, .menu-wrapper .navBurger:after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    background: #111;\\n    height: 2px;\\n    width: 100%;\\n    right: 0;\\n    will-change: rotate;\\n    transform: rotate(0deg);\\n    transition: all 0.5s ease; }\\n  .menu-wrapper .navBurger:before {\\n    top: -10px; }\\n  .menu-wrapper .navBurger:after {\\n    bottom: -10px; }\\n  .menu-wrapper .navBurger.active {\\n    background: transparent;\\n    background-clip: content-box; }\\n    .menu-wrapper .navBurger.active:before {\\n      transform: rotate(135deg);\\n      top: 0;\\n      width: 110%; }\\n    .menu-wrapper .navBurger.active:after {\\n      bottom: 0;\\n      transform: rotate(-135deg);\\n      width: 110%; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/newsMenu.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/css/newsList.scss":
/*!*******************************!*\
  !*** ./src/css/newsList.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./newsList.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/newsList.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/newsList.scss?");

/***/ }),

/***/ "./src/css/newsMenu.scss":
/*!*******************************!*\
  !*** ./src/css/newsMenu.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./newsMenu.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/newsMenu.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/newsMenu.scss?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: SOURCE_CHANNELS, BASE_URL, APIKEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOURCE_CHANNELS\", function() { return SOURCE_CHANNELS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_URL\", function() { return BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APIKEY\", function() { return APIKEY; });\nvar SOURCE_CHANNELS = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'usa-today'];\nvar BASE_URL = 'https://newsapi.org/v1/articles?source=';\nvar APIKEY = '&apiKey=8b0ecc14a33147d4ad63d53efee42cb8';\n\n//# sourceURL=webpack:///./src/js/constants.js?");

/***/ }),

/***/ "./src/js/displayListOfKeys.js":
/*!*************************************!*\
  !*** ./src/js/displayListOfKeys.js ***!
  \*************************************/
/*! exports provided: DisplayListOfUniqueKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayListOfUniqueKeys\", function() { return DisplayListOfUniqueKeys; });\nvar DisplayListOfUniqueKeys = function DisplayListOfUniqueKeys(listOfKeys) {\n  var keys = [];\n\n  for (var i = 0; i < listOfKeys.list.people.length; i++) {\n    Object.keys(listOfKeys.list.people[i]).forEach(function (key) {\n      if (keys.indexOf(key) === -1) {\n        keys.push(key);\n      }\n    });\n  }\n\n  console.log(keys);\n};\n\n//# sourceURL=webpack:///./src/js/displayListOfKeys.js?");

/***/ }),

/***/ "./src/js/newsArticlesList.js":
/*!************************************!*\
  !*** ./src/js/newsArticlesList.js ***!
  \************************************/
/*! exports provided: NewsArticlesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsArticlesList\", function() { return NewsArticlesList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NewsArticlesList =\n/*#__PURE__*/\nfunction () {\n  function NewsArticlesList(newsListContainer) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, NewsArticlesList);\n\n    this.data = data;\n    this.newsList = newsListContainer;\n  }\n\n  _createClass(NewsArticlesList, [{\n    key: \"publicationDate\",\n    value: function publicationDate(dateString) {\n      var date = new Date(dateString);\n      return date.toGMTString();\n    }\n  }, {\n    key: \"createArticleItem\",\n    value: function createArticleItem(articleData) {\n      return \"<li class=\\\"news-item\\\">\\n                    <h3 class=\\\"title\\\">\\n                        <a href=\".concat(articleData.url, \" class=\\\"news-link\\\">\").concat(articleData.title, \"</a>\\n                    </h3>\\n                    <div class=\\\"article-item-content\\\">\\n                        <figure class=\\\"news-image\\\">\\n                            <img src=\").concat(articleData.urlToImage, \" class=\\\"image\\\">\\n                        </figure>\\n                        <p class=\\\"description\\\">\").concat(articleData.description, \"</p>\\n                        <span class=\\\"news-date\\\">\").concat(this.publicationDate(articleData.publishedAt), \"</span>\\n                    </div>\\n                </li>\");\n    }\n  }, {\n    key: \"createArticlesBlock\",\n    value: function createArticlesBlock() {\n      var _this = this;\n\n      return this.data.articles.reduce(function (result, article) {\n        return \"\".concat(result).concat(_this.createArticleItem(article));\n      }, '');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.newsList.innerHTML = this.createArticlesBlock();\n    }\n  }, {\n    key: \"update\",\n    value: function update(data) {\n      this.data = data;\n    }\n  }]);\n\n  return NewsArticlesList;\n}();\n;\n\n//# sourceURL=webpack:///./src/js/newsArticlesList.js?");

/***/ }),

/***/ "./src/js/newsList.js":
/*!****************************!*\
  !*** ./src/js/newsList.js ***!
  \****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _newsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsMenu */ \"./src/js/newsMenu.js\");\n/* harmony import */ var _newsArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsArticlesList */ \"./src/js/newsArticlesList.js\");\n/* harmony import */ var _updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSourceChannel */ \"./src/js/updateSourceChannel.js\");\n/* harmony import */ var _displayListOfKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayListOfKeys */ \"./src/js/displayListOfKeys.js\");\n/* harmony import */ var _css_newsList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/newsList.scss */ \"./src/css/newsList.scss\");\n/* harmony import */ var _css_newsList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_newsList_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction init() {\n  // check work of custom-loader\n  var jsonData = __webpack_require__(/*! ../list.json */ \"./src/list.json\");\n\n  Object(_displayListOfKeys__WEBPACK_IMPORTED_MODULE_4__[\"DisplayListOfUniqueKeys\"])(jsonData); //aside menu generation\n\n  var newsWrapper = document.getElementById('menu-wrapper');\n  var newsMenu = new _newsMenu__WEBPACK_IMPORTED_MODULE_1__[\"NewsMenu\"](newsWrapper, _constants__WEBPACK_IMPORTED_MODULE_0__[\"SOURCE_CHANNELS\"]);\n  newsMenu.render();\n  newsMenu.addNavBurgerListener(); // first content generation\n\n  var newsListContainer = document.getElementById('news-list');\n  var articlesList = new _newsArticlesList__WEBPACK_IMPORTED_MODULE_2__[\"NewsArticlesList\"](newsListContainer);\n  Object(_updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__[\"UpdateSourceChannel\"])(_constants__WEBPACK_IMPORTED_MODULE_0__[\"SOURCE_CHANNELS\"][0], articlesList).catch(function (error) {\n    console.log(JSON.stringify(error));\n  }); //nav panel listener\n\n  var menu = document.getElementById('menu');\n  menu.addEventListener(\"click\", function (event) {\n    var channel = event.target.dataset.channel;\n\n    if (channel) {\n      Object(_updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__[\"UpdateSourceChannel\"])(channel, articlesList).catch(function (error) {\n        console.log(JSON.stringify(error));\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/newsList.js?");

/***/ }),

/***/ "./src/js/newsMenu.js":
/*!****************************!*\
  !*** ./src/js/newsMenu.js ***!
  \****************************/
/*! exports provided: NewsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsMenu\", function() { return NewsMenu; });\n/* harmony import */ var _css_newsMenu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/newsMenu.scss */ \"./src/css/newsMenu.scss\");\n/* harmony import */ var _css_newsMenu_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_newsMenu_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar NewsMenu =\n/*#__PURE__*/\nfunction () {\n  function NewsMenu(newsWrapper, sources) {\n    _classCallCheck(this, NewsMenu);\n\n    this.newsWrapper = newsWrapper;\n    this.sources = sources;\n  }\n\n  _createClass(NewsMenu, [{\n    key: \"addNavBurgerListener\",\n    value: function addNavBurgerListener() {\n      var navBurger = document.getElementById('navToggle');\n      navBurger.addEventListener('click', this.toggleNavPanel, false);\n    }\n  }, {\n    key: \"toggleNavPanel\",\n    value: function toggleNavPanel() {\n      var mainContent = document.getElementById('content-wrapper');\n      navToggle.classList.toggle('active');\n      overlay.classList.toggle('open');\n      mainContent.classList.toggle('nav-space');\n    }\n  }, {\n    key: \"createMenuItem\",\n    value: function createMenuItem(channel) {\n      return \"<li class=\\\"list-Item\\\" id=\\\"\\\">\\n                    <a href=\\\"#\\\" data-channel=\".concat(channel, \" class=\\\"news-list\\\">\").concat(channel, \"</a>\\n                </li>\");\n    }\n  }, {\n    key: \"createMenuItems\",\n    value: function createMenuItems() {\n      var _this = this;\n\n      return this.sources.reduce(function (result, channel) {\n        return \"\".concat(result).concat(_this.createMenuItem(channel));\n      }, '');\n    }\n  }, {\n    key: \"createMenuBlock\",\n    value: function createMenuBlock() {\n      return \"<div class=\\\"overlay\\\" id=\\\"overlay\\\">\\n                    <nav class=\\\"overlayMenu\\\" id=\\\"\\\">\\n                        <ul class=\\\"menu\\\" id=\\\"menu\\\">\".concat(this.createMenuItems(), \"</ul>\\n                    </nav>\\n                </div>\\n                <div class=\\\"navBurger\\\" id=\\\"navToggle\\\"></div>\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.newsWrapper.innerHTML = this.createMenuBlock();\n    }\n  }]);\n\n  return NewsMenu;\n}();\n\n//# sourceURL=webpack:///./src/js/newsMenu.js?");

/***/ }),

/***/ "./src/js/updateSourceChannel.js":
/*!***************************************!*\
  !*** ./src/js/updateSourceChannel.js ***!
  \***************************************/
/*! exports provided: UpdateSourceChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpdateSourceChannel\", function() { return UpdateSourceChannel; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar UpdateSourceChannel =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(channel, newsArticlesList) {\n    var response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"]).concat(channel, \"&sortBy=top\").concat(_constants__WEBPACK_IMPORTED_MODULE_0__[\"APIKEY\"]));\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            document.getElementsByClassName('heading')[0].innerHTML = \"News: \".concat(channel);\n            newsArticlesList.update(data);\n            newsArticlesList.render();\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function UpdateSourceChannel(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/updateSourceChannel.js?");

/***/ }),

/***/ "./src/list.json":
/*!***********************!*\
  !*** ./src/list.json ***!
  \***********************/
/*! exports provided: list, default */
/***/ (function(module) {

eval("module.exports = {\"list\":{\"people\":[{\"name\":[\"Alex\"],\"age\":[\"allReplacedKeysAsUnique\"],\"gender\":[\"Male\"],\"allReplacedKeysAsUnique\":[\"Mal\"],\"greeting\":[\"hello\"]},{\"name\":[\"anna\"],\"age\":[\"allReplacedKeysAsUnique\"],\"allReplacedKeysAsUnique\":[\"Female\"]},{\"nicename\":[\"Alex\"],\"age\":[\"allReplacedKeysAsUnique\"],\"gender\":[\"Male\"],\"allReplacedKeysAsUnique\":[\"Ma\"],\"greeting\":[\"hi\"]}]}};\n\n//# sourceURL=webpack:///./src/list.json?");

/***/ })

}]);