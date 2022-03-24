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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_phoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phoneList */ \"./modules/phoneList.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/phoneMask */ \"./modules/phoneMask.js\");\n/* harmony import */ var _modules_advantages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/advantages */ \"./modules/advantages.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_phoneList__WEBPACK_IMPORTED_MODULE_0__.phone)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.modal)();\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__.phoneMask)();\n(0,_modules_advantages__WEBPACK_IMPORTED_MODULE_5__.advantages)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)({\n  sliderWrapperClass: 'formula-slider-wrap',\n  slidesClass: 'formula-slider__slide',\n  btnNextClass: 'slider-arrow_right',\n  btnPrevClass: 'slider-arrow_left',\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/advantages.js":
/*!*******************************!*\
  !*** ./modules/advantages.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"advantages\": () => (/* binding */ advantages)\n/* harmony export */ });\nconst advantages = () => {\n  const itemsDesktop = document.querySelectorAll('.mobile-hide.tablet-hide .formula-item');\n  const itemsMobile = document.querySelectorAll('.desktop-hide .formula-item');\n\n  const toggleItem = (item) => {\n    const popup = item.querySelector('.formula-item-popup');\n\n    item.classList.toggle('active-item');\n\n    if (item.classList.contains('active-item')) {\n      if (popup.getBoundingClientRect().y < 0) {\n        popup.classList.add('reflect');\n      }\n    } else {\n      popup.classList.remove('reflect');\n    }\n  };\n\n  itemsDesktop.forEach((item) => {\n    const icon = item.querySelector('.formula-item__icon');\n\n    icon.addEventListener('mouseover', () => {\n      toggleItem(item);\n    });\n\n    icon.addEventListener('mouseout', () => {\n      toggleItem(item);\n    });\n  });\n\n  itemsMobile.forEach((item) => {\n    item.addEventListener('click', () => {\n      toggleItem(item);\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/advantages.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n  const menu = document.querySelector('.popup-menu');\n\n  const toggleMenu = () => {\n    menu.classList.toggle('popup-show');\n  };\n\n  document.addEventListener('click', (e) => {\n    if (\n      e.target.closest('.menu__icon') ||\n      e.target.classList.contains('close-menu') ||\n      (e.target.closest('.popup-dialog-menu') && e.target.tagName === 'A') ||\n      (menu.classList.contains('popup-show') &&\n        !e.target.closest('.popup-dialog-menu'))\n    ) {\n      e.preventDefault();\n      toggleMenu();\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n  const popups = document.querySelectorAll('.popup');\n\n  const showPopup = (e, popupSelector) => {\n    e.preventDefault();\n\n    let popup = document.querySelector(popupSelector);\n\n    popup.classList.add('popup-show');\n  };\n\n  const closeAllPopups = () => {\n    popups.forEach((popup) => {\n      popup.classList.remove('popup-show');\n    });\n  };\n\n  document.addEventListener('click', (e) => {\n    if (\n      (!(e.target.closest('.popup-dialog') || e.target.closest('.popup-dialog-menu')) || e.target.closest('.close')) &&\n      e.target.closest('.popup-show')\n    ) {\n      e.preventDefault();\n\n      closeAllPopups();\n    } else if (e.target.closest('.link-list') && e.target.tagName === 'A') {\n      showPopup(e, '.popup-repair-types');\n    } else if (e.target.classList.contains('link-privacy')) {\n      showPopup(e, '.popup-privacy');\n    }\n  });\n\n  popups.forEach((popup) => {\n    popup.style.transition = '1s';\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/phoneList.js":
/*!******************************!*\
  !*** ./modules/phoneList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone\": () => (/* binding */ phone)\n/* harmony export */ });\nconst phone = () => {\n  const numberBlock = document.querySelector(\n    '.header-contacts__phone-number-accord'\n  );\n  const btn = document.querySelector('.header-contacts__arrow');\n\n  const toggle = () => {\n    numberBlock.classList.toggle('show-number');\n    btn.classList.toggle('rotate');\n  };\n\n  btn.addEventListener('click', toggle);\n};\n\n\n//# sourceURL=webpack:///./modules/phoneList.js?");

/***/ }),

/***/ "./modules/phoneMask.js":
/*!******************************!*\
  !*** ./modules/phoneMask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phoneMask\": () => (/* binding */ phoneMask)\n/* harmony export */ });\nconst phoneMask = () => {\n  const phoneInputs = document.querySelectorAll('input[name=phone]');\n\n  const mask = (value) => {\n    value = value.replace(/\\D/g, '');\n\n    value = value.replace(\n      /(7)(\\d{0,3})(\\d{0,3})(\\d{0,2})(\\d{0,2})(.*)/,\n      (str, $1, $2, $3, $4, $5, $6) => {\n        str = '+7 (';\n\n        if (!$2) return str;\n        str += $2;\n        if (!$3) return str;\n        str += ') ' + $3;\n        if (!$4) return str;\n        str += '-' + $4;\n        if (!$5) return str;\n        str += '-' + $5;\n\n        return str;\n      }\n    );\n\n    return value;\n  };\n\n  phoneInputs.forEach((input) => {\n    input.addEventListener('input', () => {\n      input.value = mask(input.value);\n    });\n    input.addEventListener('focus', () => {\n      if (!input.value) {\n        input.value = '+7 (';\n      }\n    });\n    input.addEventListener('blur', () => {\n      if (input.value === '+7 (') {\n        input.value = '';\n      }\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/phoneMask.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst scroll = () => {\n  const scroll = (href) => {\n    let scrollTo = document.querySelector(href).offsetTop;\n    let scrollFrom = document.scrollingElement.scrollTop;\n\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n      duration: 1000,\n      timing(timeFraction) {\n        return timeFraction < 0.5\n          ? 8 * timeFraction * timeFraction * timeFraction * timeFraction\n          : 1 - Math.pow(-2 * timeFraction + 2, 4) / 2;\n      },\n      draw(progress) {\n        document.scrollingElement.scrollTop =\n          scrollFrom + progress * (scrollTo - scrollFrom);\n      },\n    });\n  };\n\n  document.addEventListener('click', (e) => {\n    if (\n      (e.target.closest('.popup-menu-nav__item') &&\n        e.target.closest('.popup-dialog-menu')) ||\n      (e.target.closest('.button-footer') && e.target.tagName === 'A')\n    ) {\n      e.preventDefault();\n      scroll(e.target.attributes.href.value);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = ({\n  sliderWrapperClass,\n  slidesClass,\n  slideActiveClass = 'slider-slide-active-flex',\n  btnPrevClass,\n  btnNextClass,\n}) => {\n  if (!sliderWrapperClass || !slidesClass) return;\n\n  const sliderBlock = document.querySelector('.' + sliderWrapperClass);\n  const slides = sliderBlock.querySelectorAll('.' + slidesClass);\n\n  if (!sliderBlock || !slides) return;\n\n  let currentSlide = 0;\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const init = () => {\n    slides.forEach((slide) => {\n      slide.classList.add('slider-slide');\n    });\n\n    slides[0].classList.add(slideActiveClass);\n  };\n\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    if (!e.target.closest(`.${btnNextClass}`) && !e.target.closest(`.${btnPrevClass}`)) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, slideActiveClass);\n\n    if (e.target.closest(`.${btnNextClass}`)) {\n      currentSlide++;\n    } else if (e.target.closest(`.${btnPrevClass}`)) {\n      currentSlide--;\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, slideActiveClass);\n  });\n\n  init();\n};\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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