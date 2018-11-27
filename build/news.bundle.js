(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  background: #2b3a42;\n  color: #e1e6e9;\n  text-shadow: 0 1px 0 rgba(23, 31, 35, 0.5);\n  border-radius: 3px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: SOURCE_CHANNELS, BASE_URL, APIKEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCE_CHANNELS", function() { return SOURCE_CHANNELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIKEY", function() { return APIKEY; });
var SOURCE_CHANNELS = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'usa-today'];
var BASE_URL = 'https://newsapi.org/v1/articles?source=';
var APIKEY = '&apiKey=8b0ecc14a33147d4ad63d53efee42cb8';

/***/ }),

/***/ "./src/js/newsArticlesList.js":
/*!************************************!*\
  !*** ./src/js/newsArticlesList.js ***!
  \************************************/
/*! exports provided: NewsArticlesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArticlesList", function() { return NewsArticlesList; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewsArticlesList =
/*#__PURE__*/
function () {
  function NewsArticlesList(newsListContainer) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, NewsArticlesList);

    this.data = data;
    this.newsList = newsListContainer;
  }

  _createClass(NewsArticlesList, [{
    key: "publicationDate",
    value: function publicationDate(dateString) {
      var date = new Date(dateString);
      return date.toGMTString();
    }
  }, {
    key: "createArticleItem",
    value: function createArticleItem(articleData) {
      return "<li class=\"news-item\">\n                    <h3 class=\"title\">\n                        <a href=".concat(articleData.url, " class=\"news-link\">").concat(articleData.title, "</a>\n                    </h3>\n                    <div class=\"article-item-content\">\n                        <figure class=\"news-image\">\n                            <img src=").concat(articleData.urlToImage, " class=\"image\">\n                        </figure>\n                        <p class=\"description\">").concat(articleData.description, "</p>\n                        <span class=\"news-date\">").concat(this.publicationDate(articleData.publishedAt), "</span>\n                    </div>\n                </li>");
    }
  }, {
    key: "createArticlesBlock",
    value: function createArticlesBlock() {
      var _this = this;

      return this.data.articles.reduce(function (result, article) {
        return "".concat(result).concat(_this.createArticleItem(article));
      }, '');
    }
  }, {
    key: "render",
    value: function render() {
      this.newsList.innerHTML = this.createArticlesBlock();
    }
  }, {
    key: "update",
    value: function update(data) {
      this.data = data;
    }
  }]);

  return NewsArticlesList;
}();
;

/***/ }),

/***/ "./src/js/newsList.js":
/*!****************************!*\
  !*** ./src/js/newsList.js ***!
  \****************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _newsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsMenu */ "./src/js/newsMenu.js");
/* harmony import */ var _newsArticlesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsArticlesList */ "./src/js/newsArticlesList.js");
/* harmony import */ var _updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSourceChannel */ "./src/js/updateSourceChannel.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_4__);





function init() {
  console.log('hihi'); //aside menu generation

  var newsWrapper = document.getElementById('menu-wrapper');
  var newsMenu = new _newsMenu__WEBPACK_IMPORTED_MODULE_1__["NewsMenu"](newsWrapper, _constants__WEBPACK_IMPORTED_MODULE_0__["SOURCE_CHANNELS"]);
  newsMenu.render();
  newsMenu.addNavBurgerListener(); // first content generation

  var newsListContainer = document.getElementById('news-list');
  var articlesList = new _newsArticlesList__WEBPACK_IMPORTED_MODULE_2__["NewsArticlesList"](newsListContainer);
  Object(_updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__["updateSourceChannel"])(_constants__WEBPACK_IMPORTED_MODULE_0__["SOURCE_CHANNELS"][0], articlesList).catch(function (error) {
    console.log(JSON.stringify(error));
  }); //nav panel listener

  var menu = document.getElementById('menu');
  menu.addEventListener("click", function (event) {
    var channel = event.target.dataset.channel;

    if (channel) {
      Object(_updateSourceChannel__WEBPACK_IMPORTED_MODULE_3__["updateSourceChannel"])(channel, articlesList).catch(function (error) {
        console.log(JSON.stringify(error));
      });
    }
  });
}

/***/ }),

/***/ "./src/js/newsMenu.js":
/*!****************************!*\
  !*** ./src/js/newsMenu.js ***!
  \****************************/
/*! exports provided: NewsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsMenu", function() { return NewsMenu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewsMenu =
/*#__PURE__*/
function () {
  function NewsMenu(newsWrapper, sources) {
    _classCallCheck(this, NewsMenu);

    this.newsWrapper = newsWrapper;
    this.sources = sources;
  }

  _createClass(NewsMenu, [{
    key: "addNavBurgerListener",
    value: function addNavBurgerListener() {
      var navBurger = document.getElementById('navToggle');
      navBurger.addEventListener('click', this.toggleNavPanel, false);
    }
  }, {
    key: "toggleNavPanel",
    value: function toggleNavPanel() {
      var mainContent = document.getElementById('content-wrapper');
      navToggle.classList.toggle('active');
      overlay.classList.toggle('open');
      mainContent.classList.toggle('nav-space');
    }
  }, {
    key: "createMenuItem",
    value: function createMenuItem(channel) {
      return "<li class=\"list-Item\" id=\"\">\n                    <a href=\"#\" data-channel=".concat(channel, " class=\"news-list\">").concat(channel, "</a>\n                </li>");
    }
  }, {
    key: "createMenuItems",
    value: function createMenuItems() {
      var _this = this;

      return this.sources.reduce(function (result, channel) {
        return "".concat(result).concat(_this.createMenuItem(channel));
      }, '');
    }
  }, {
    key: "createMenuBlock",
    value: function createMenuBlock() {
      return "<div class=\"overlay\" id=\"overlay\">\n                    <nav class=\"overlayMenu\" id=\"\">\n                        <ul class=\"menu\" id=\"menu\">".concat(this.createMenuItems(), "</ul>\n                    </nav>\n                </div>\n                <div class=\"navBurger\" id=\"navToggle\"></div>");
    }
  }, {
    key: "render",
    value: function render() {
      this.newsWrapper.innerHTML = this.createMenuBlock();
    }
  }]);

  return NewsMenu;
}();

/***/ }),

/***/ "./src/js/updateSourceChannel.js":
/*!***************************************!*\
  !*** ./src/js/updateSourceChannel.js ***!
  \***************************************/
/*! exports provided: updateSourceChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSourceChannel", function() { return updateSourceChannel; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var updateSourceChannel =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(channel, newsArticlesList) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]).concat(channel, "&sortBy=top").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["APIKEY"]));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            document.getElementsByClassName('heading')[0].innerHTML = "News: ".concat(channel);
            newsArticlesList.update(data);
            newsArticlesList.render();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function updateSourceChannel(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

}]);
//# sourceMappingURL=news.bundle.js.map