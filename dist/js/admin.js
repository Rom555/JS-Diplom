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

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_admin_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/admin/login */ \"./modules/admin/login.js\");\n/* harmony import */ var _modules_admin_checkCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/admin/checkCookie */ \"./modules/admin/checkCookie.js\");\n\n\n\nif (/\\w*\\.html/.exec(document.location.href)[0] === 'index.html') {\n  (0,_modules_admin_checkCookie__WEBPACK_IMPORTED_MODULE_1__.checkCookie)().then((success) => {\n    if (success) {\n      window.location.replace('table.html');\n    }\n  });\n\n  (0,_modules_admin_login__WEBPACK_IMPORTED_MODULE_0__.login)();\n} else if (/\\w*\\.html/.exec(document.location.href)[0] === 'table.html') {\n  (0,_modules_admin_checkCookie__WEBPACK_IMPORTED_MODULE_1__.checkCookie)().then((success) => {\n    if (!success) {\n      window.location.replace('index.html');\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/admin/checkCookie.js":
/*!**************************************!*\
  !*** ./modules/admin/checkCookie.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCookie\": () => (/* binding */ checkCookie)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./modules/helper.js\");\n\n\nconst checkCookie = async () => {\n  let cookie;\n\n  cookie = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getCookie)('user');\n\n  if (cookie) {\n    cookie = JSON.parse(cookie);\n\n    return (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/users?login=${cookie.login}&password=${cookie.password}`).then((data) => {\n      if (data.length !== 0) {\n        return true;\n      }\n    });\n  }\n\n  return false;\n};\n\n\n//# sourceURL=webpack:///./modules/admin/checkCookie.js?");

/***/ }),

/***/ "./modules/admin/login.js":
/*!********************************!*\
  !*** ./modules/admin/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./modules/helper.js\");\n\n\nconst login = () => {\n  const form = document.querySelector('.main-auth form');\n  const textWarnings = form.querySelectorAll('.text-warning');\n  const name = form.querySelector('input[type=text]');\n  const password = form.querySelector('input[type=password]');\n\n  const clearWarnings = () => {\n    textWarnings.forEach((text) => {\n      text.style.display = 'none';\n    });\n  };\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    clearWarnings();\n\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/users?login=${name.value}`)\n      .then((data) => {\n        if (data.length === 0) textWarnings[1].style.display = '';\n        else {\n          (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/users?login=${name.value}&password=${password.value}`)\n            .then((data) => {\n              if (data.length === 0) textWarnings[2].style.display = '';\n              else {\n                document.cookie = 'user=' + JSON.stringify(data[0]) + ';maxAge=864000';\n                window.location.replace('table.html');\n              }\n            })\n            .catch((error) => {\n              throw error;\n            });\n        }\n      })\n      .then((data) => {\n        name.value = '';\n        password.value = '';\n      })\n      .catch((error) => {\n        console.log(error.message);\n        textWarnings[0].style.display = '';\n      });\n  });\n\n  clearWarnings();\n};\n\n\n//# sourceURL=webpack:///./modules/admin/login.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\nconst getData = (url) => {\n  return fetch(url)\n    .then((res) => {\n      if (res.ok) return res.json();\n      throw new Error(`${res.status} ${res.statusText}`);\n    })\n    .catch((error) => {\n      throw error;\n    });\n};\n\nconst sendData = (url, data) => {\n  return fetch(url, {\n    method: data.method,\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: data.body ? JSON.stringify(data.body) : '',\n  })\n    .then((res) => {\n      if (res.ok) return res.json();\n      throw new Error(`${res.status} ${res.statusText}`);\n    })\n    .catch((error) => {\n      throw error;\n    });\n};\n\nconst getCookie = (name) => {\n  let matches = document.cookie.match(\n    new RegExp('(?:^|; )' + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + '=([^;]*)')\n  );\n  return matches ? decodeURIComponent(matches[1]) : undefined;\n};\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;