(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error"],{

/***/ "./src/js/errorSingleton.js":
/*!**********************************!*\
  !*** ./src/js/errorSingleton.js ***!
  \**********************************/
/*! exports provided: promiseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"promiseError\", function() { return promiseError; });\nfunction promiseError(err) {\n  return function () {\n    return Promise.reject(ErrorSingleton.instance(err));\n  };\n}\n\nvar ErrorSingleton = function () {\n  function ErrorSingleton(err) {\n    this.error = err;\n  }\n\n  ErrorSingleton.instance = function (err) {\n    if (this.singleton == null) {\n      this.singleton = new ErrorSingleton(err);\n    }\n\n    return this.singleton;\n  };\n\n  return ErrorSingleton;\n}();\n\n//# sourceURL=webpack:///./src/js/errorSingleton.js?");

/***/ })

}]);