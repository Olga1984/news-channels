(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error"],{

/***/ "./src/js/errorSingleton.js":
/*!**********************************!*\
  !*** ./src/js/errorSingleton.js ***!
  \**********************************/
/*! exports provided: ErrorSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorSingleton\", function() { return ErrorSingleton; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ErrorSingleton =\n/*#__PURE__*/\nfunction () {\n  function ErrorSingleton() {\n    _classCallCheck(this, ErrorSingleton);\n\n    if (!ErrorSingleton.instance) {\n      ErrorSingleton.instance = this;\n    }\n\n    return ErrorSingleton.instance;\n  }\n\n  _createClass(ErrorSingleton, [{\n    key: \"showError\",\n    value: function showError(error) {\n      alert(error);\n    }\n  }]);\n\n  return ErrorSingleton;\n}();\n;\n\n//# sourceURL=webpack:///./src/js/errorSingleton.js?");

/***/ })

}]);