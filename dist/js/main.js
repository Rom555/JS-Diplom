/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_phoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phoneList */ \"./modules/phoneList.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n\n\n\n\n(0,_modules_phoneList__WEBPACK_IMPORTED_MODULE_0__.phone)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('.popup-dialog-menu');\r\n\r\n  const toggleMenu = () => {\r\n    menu.classList.toggle('show-menu');\r\n  };\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (\r\n      e.target.closest('.menu__icon') ||\r\n      e.target.classList.contains('close-menu') ||\r\n      (e.target.closest('.popup-dialog-menu') && e.target.tagName === 'A') ||\r\n      (menu.classList.contains('show-menu') &&\r\n        !e.target.closest('.popup-dialog-menu'))\r\n    ) {\r\n      e.preventDefault();\r\n      toggleMenu();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/phoneList.js":
/*!******************************!*\
  !*** ./modules/phoneList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone\": () => (/* binding */ phone)\n/* harmony export */ });\nconst phone = () => {\r\n  const numberBlock = document.querySelector(\r\n    '.header-contacts__phone-number-accord'\r\n  );\r\n  const btn = document.querySelector('.header-contacts__arrow');\r\n\r\n  const toggle = () => {\r\n    numberBlock.classList.toggle('show-number');\r\n    btn.classList.toggle('rotate');\r\n  };\r\n\r\n  btn.addEventListener('click', toggle);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/phoneList.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\nconst scroll = () => {\r\n  const scroll = (href) => {\r\n    let scrollTo = document.querySelector(href).offsetTop;\r\n    let scrollFrom = document.scrollingElement.scrollTop;\r\n\r\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 1000,\r\n      timing(timeFraction) {\r\n        return timeFraction < 0.5\r\n          ? 8 * timeFraction * timeFraction * timeFraction * timeFraction\r\n          : 1 - Math.pow(-2 * timeFraction + 2, 4) / 2;\r\n      },\r\n      draw(progress) {\r\n        document.scrollingElement.scrollTop =\r\n          scrollFrom + progress * (scrollTo - scrollFrom);\r\n      },\r\n    });\r\n  };\r\n\r\n  document.addEventListener('click', (e) => {\r\n    if (\r\n      (e.target.closest('.popup-menu-nav__item') &&\r\n        e.target.closest('.popup-dialog-menu')) ||\r\n      (e.target.closest('.button-footer') && e.target.tagName === 'A')\r\n    ) {\r\n      e.preventDefault();\r\n      scroll(e.target.attributes.href.value);\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;