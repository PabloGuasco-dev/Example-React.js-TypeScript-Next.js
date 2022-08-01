"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/github";
exports.ids = ["pages/api/github"];
exports.modules = {

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@octokit/rest");

/***/ }),

/***/ "(api)/./pages/api/github.ts":
/*!*****************************!*\
  !*** ./pages/api/github.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);\n\nconst octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__.Octokit({});\nconst {\n  search\n} = octokit.rest;\nconst methods = {\n  repo: search.repos,\n  user: search.users\n};\n\nconst InvalidMethod = () => Promise.reject(new Error('Invalid Octokit method'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    q,\n    page = 1,\n    type: searchType\n  } = req.query;\n  const method = methods[searchType] || InvalidMethod;\n  const result = await method({\n    q,\n    page,\n    per_page: 10\n  });\n  res.status(200).json(result);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2l0aHViLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBRUEsTUFBTUMsT0FBTyxHQUFHLElBQUlELGtEQUFKLENBQVksRUFBWixDQUFoQjtBQUVBLE1BQU07RUFBRUU7QUFBRixJQUFhRCxPQUFPLENBQUNFLElBQTNCO0FBR0EsTUFBTUMsT0FBTyxHQUFHO0VBQ2RDLElBQUksRUFBRUgsTUFBTSxDQUFDSSxLQURDO0VBRWRDLElBQUksRUFBRUwsTUFBTSxDQUFDTTtBQUZDLENBQWhCOztBQUtBLE1BQU1DLGFBQWEsR0FBRyxNQUFNQyxPQUFPLENBQUNDLE1BQVIsQ0FBZSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBZixDQUE1Qjs7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtFQUVsRSxNQUFNO0lBQUVDLENBQUY7SUFBS0MsSUFBSSxHQUFHLENBQVo7SUFBZUMsSUFBSSxFQUFFQztFQUFyQixJQUFvQ0wsR0FBRyxDQUFDTSxLQUE5QztFQUVBLE1BQU1DLE1BQU0sR0FBR2hCLE9BQU8sQ0FBQ2MsVUFBRCxDQUFQLElBQWlDVCxhQUFoRDtFQUVBLE1BQU1ZLE1BQU0sR0FBRyxNQUFNRCxNQUFNLENBQUM7SUFDMUJMLENBRDBCO0lBRTFCQyxJQUYwQjtJQUcxQk0sUUFBUSxFQUFFO0VBSGdCLENBQUQsQ0FBM0I7RUFNQVIsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILE1BQXJCO0FBQ0QsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL2dpdGh1Yi50cz84NjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnQG9jdG9raXQvcmVzdCc7XG5cbmNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7fSk7XG5cbmNvbnN0IHsgc2VhcmNoIH0gPSBvY3Rva2l0LnJlc3Q7XG5cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgcmVwbzogc2VhcmNoLnJlcG9zLFxuICB1c2VyOiBzZWFyY2gudXNlcnMsXG59O1xuXG5jb25zdCBJbnZhbGlkTWV0aG9kID0gKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdJbnZhbGlkIE9jdG9raXQgbWV0aG9kJykpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuXG4gIGNvbnN0IHsgcSwgcGFnZSA9IDEsIHR5cGU6IHNlYXJjaFR5cGUgfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCBtZXRob2QgPSBtZXRob2RzW3NlYXJjaFR5cGUgYXMgc3RyaW5nXSB8fCBJbnZhbGlkTWV0aG9kO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1ldGhvZCh7XG4gICAgcSxcbiAgICBwYWdlLFxuICAgIHBlcl9wYWdlOiAxMFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xufTtcbiJdLCJuYW1lcyI6WyJPY3Rva2l0Iiwib2N0b2tpdCIsInNlYXJjaCIsInJlc3QiLCJtZXRob2RzIiwicmVwbyIsInJlcG9zIiwidXNlciIsInVzZXJzIiwiSW52YWxpZE1ldGhvZCIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsInJlcSIsInJlcyIsInEiLCJwYWdlIiwidHlwZSIsInNlYXJjaFR5cGUiLCJxdWVyeSIsIm1ldGhvZCIsInJlc3VsdCIsInBlcl9wYWdlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/github.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/github.ts"));
module.exports = __webpack_exports__;

})();