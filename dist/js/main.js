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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_phoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phoneList */ \"./modules/phoneList.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/phoneMask */ \"./modules/phoneMask.js\");\n/* harmony import */ var _modules_advantages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/advantages */ \"./modules/advantages.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_repairTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/repairTypes */ \"./modules/repairTypes.js\");\n/* harmony import */ var _modules_transparency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/transparency */ \"./modules/transparency.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ \"./modules/accordion.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_phoneList__WEBPACK_IMPORTED_MODULE_0__.phone)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.modal)();\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__.phoneMask)();\n(0,_modules_advantages__WEBPACK_IMPORTED_MODULE_5__.advantages)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)({\n  sliderWrapperSelector: '.formula-slider-wrap',\n  slidesSelector: '.formula-slider__slide',\n});\n(0,_modules_repairTypes__WEBPACK_IMPORTED_MODULE_7__.repairTypes)();\n(0,_modules_transparency__WEBPACK_IMPORTED_MODULE_8__.transparency)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)({\n  sliderWrapperSelector: '.reviews-slider-wrap',\n  slidesSelector: '.reviews-slider__slide',\n});\n(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__.accordion)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__.sendForm)();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\n  const accordion = document.querySelector('.faq .accordion');\n  const titleBlocks = document.querySelectorAll('.faq .title_block');\n\n  let timeout;\n\n  accordion.addEventListener('click', (e) => {\n    if (e.target.classList.contains('title_block')) {\n      e.preventDefault();\n\n      if (!e.target.classList.contains('msg-active')) {\n        clearTimeout(timeout);\n\n        titleBlocks.forEach((titleBlock) => {\n          titleBlock.classList.remove('msg-active');\n        });\n\n        timeout = setTimeout(() => e.target.classList.add('msg-active'), 500);\n      }\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/accordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction изменяется от 0 до 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // вычисление текущего состояния анимации\n    let progress = timing(timeFraction);\n\n    draw(progress); // отрисовать её\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\nconst getData = (url) => {\n  return fetch(url)\n    .then((res) => {\n      if (res.ok) return res.json();\n      throw new Error(`${res.status} ${res.statusText}`);\n    })\n    .catch((error) => {\n      throw error;\n    });\n};\n\nconst sendData = (url, data) => {\n  return fetch(url, {\n    method: data.method,\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: data.body ? JSON.stringify(data.body) : '',\n  })\n    .then((res) => {\n      if (res.ok) return res.json();\n      throw new Error(`${res.status} ${res.statusText}`);\n    })\n    .catch((error) => {\n      throw error;\n    });\n};\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n  const popups = document.querySelectorAll('.popup');\n\n  const showPopup = (e, popupSelector) => {\n    e.preventDefault();\n\n    let popup = document.querySelector(popupSelector);\n\n    popup.classList.add('popup-show');\n  };\n\n  const closeAllPopups = () => {\n    popups.forEach((popup) => {\n      popup.classList.remove('popup-show');\n    });\n  };\n\n  document.addEventListener('click', (e) => {\n    if (\n      (!(\n        e.target.closest('.popup-dialog') ||\n        e.target.closest('.popup-dialog-menu') ||\n        e.target.closest('.popup-dialog-transparency') ||\n        e.target.closest('.feedback-wrap')\n      ) ||\n        e.target.closest('.close')) &&\n      e.target.closest('.popup-show')\n    ) {\n      e.preventDefault();\n\n      closeAllPopups();\n    } else if (e.target.closest('.link-list') && e.target.tagName === 'A') {\n      showPopup(e, '.popup-repair-types');\n    } else if (e.target.classList.contains('link-privacy')) {\n      showPopup(e, '.popup-privacy');\n    } else if (e.target.classList.contains('transparency-item__img')) {\n      showPopup(e, '.popup-transparency');\n    } else if (e.target.tagName === 'BUTTON' && e.target.textContent.trim() === 'Проконсультироваться') {\n      showPopup(e, '.popup-consultation');\n    }\n  });\n\n  popups.forEach((popup) => {\n    popup.style.transition = '1s';\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

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

/***/ "./modules/repairTypes.js":
/*!********************************!*\
  !*** ./modules/repairTypes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"repairTypes\": () => (/* binding */ repairTypes)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./modules/slider.js\");\n\n\nconst repairTypes = () => {\n  const navWrap = document.querySelector('.nav-wrap-repair');\n  const navItems = navWrap.querySelectorAll('.repair-types-nav__item');\n  const sliders = document.querySelectorAll('.repair-types-slider > div');\n\n  let repairSlider, repairNavSlider;\n  let sliderNumber = 1;\n\n  const sliderToggle = () => {\n    sliders.forEach((slider) => {\n      slider.style.display = 'none';\n    });\n\n    sliders[sliderNumber - 1].style.display = '';\n  };\n\n  navWrap.addEventListener('click', (e) => {\n    if (e.target.closest('.repair-types-nav__item')) {\n      e.preventDefault();\n\n      for (let i = 0; i < navItems.length; i++) {\n        navItems[i].classList.remove('active');\n\n        if (e.target.closest('.repair-types-nav__item') === navItems[i]) {\n          navItems[i].classList.add('active');\n          sliderNumber = i + 1;\n        }\n      }\n\n      repairSlider.slidesInit(`.types-repair${sliderNumber} .repair-types-slider__slide`);\n      sliderToggle();\n    }\n  });\n\n  repairSlider = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\n    sliderWrapperSelector: '.repair-types-slider-wrap',\n    slidesSelector: '.types-repair1 .repair-types-slider__slide',\n    sliderCounterSelector: '.slider-counter',\n  });\n\n  repairNavSlider = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\n    sliderWrapperSelector: '.nav-wrap-repair',\n    slidesSelector: '.repair-types-nav__item',\n    slideActiveClass: 'repair-slide-active',\n    btnNextSelector: '.nav-arrow_right',\n    btnPrevSelector: '.nav-arrow_left',\n  });\n\n  sliderToggle();\n  repairNavSlider.mobile();\n};\n\n\n//# sourceURL=webpack:///./modules/repairTypes.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst scroll = () => {\n  const scroll = (href) => {\n    let scrollTo = document.querySelector(href).offsetTop;\n    let scrollFrom = document.scrollingElement.scrollTop;\n\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n      duration: 1000,\n      timing(timeFraction) {\n        return timeFraction < 0.5\n          ? 8 * timeFraction * timeFraction * timeFraction * timeFraction\n          : 1 - Math.pow(-2 * timeFraction + 2, 4) / 2;\n      },\n      draw(progress) {\n        document.scrollingElement.scrollTop =\n          scrollFrom + progress * (scrollTo - scrollFrom);\n      },\n    });\n  };\n\n  document.addEventListener('click', (e) => {\n    if (\n      (e.target.closest('.popup-menu-nav__item') &&\n        e.target.closest('.popup-dialog-menu')) ||\n      (e.target.closest('.button-footer') && e.target.tagName === 'A')\n    ) {\n      e.preventDefault();\n      scroll(e.target.attributes.href.value);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst sendForm = () => {\n  const forms = document.querySelectorAll('form');\n  const loadContent = 'Загрузка...';\n  const errorText = 'Ошибка!';\n  const successText = 'Спасибо! Наш менеджер с Вами свяжется.';\n  let validateErrorText = 'Неправильно заполнены поля!';\n\n  let timeout;\n\n  const validate = (list) => {\n    let success = true;\n\n    list.forEach((input) => {\n      switch (true) {\n        case input.type === 'checkbox':\n          if (!input.checked) {\n            success = false;\n            validateErrorText = 'Согласитесь на обработку персональных данных!';\n          }\n          break;\n        case input.name === 'name':\n          if (/[^а-я\\s]/gi.test(input.value) || !input.value) {\n            success = false;\n            validateErrorText = 'Неправильно заполнено имя!';\n          }\n          break;\n        case input.name === 'phone':\n          if (input.value.replace(/[\\D]/g, '').length !== 11) {\n            success = false;\n            validateErrorText = 'Неправильно заполнен телефон!';\n          }\n          break;\n      }\n    });\n\n    return success;\n  };\n\n  const submitForm = (form, statusBlock) => {\n    const formElements = form.querySelectorAll('input');\n    const formData = new FormData(form);\n    const formBody = {};\n\n    clearTimeout(timeout);\n\n    if (form.id !== 'feedback3' && form.id !== 'feedback1' && form.id !== 'feedback6') {\n      statusBlock.style.color = '#fff';\n      statusBlock.style.marginBottom = '20px';\n    } else statusBlock.style.color = '#000';\n\n    form.before(statusBlock);\n\n    if (!validate(formElements)) {\n      statusBlock.textContent = validateErrorText;\n      return;\n    }\n\n    statusBlock.innerHTML = loadContent;\n\n    formData.forEach((val, key) => {\n      formBody[key] = val;\n    });\n\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.sendData)('https://jsonplaceholder.typicode.com/posts', {\n      method: 'POST',\n      body: formBody,\n    })\n      .then((data) => {\n        statusBlock.textContent = successText;\n\n        formElements.forEach((input) => {\n          input.value = '';\n\n          if (input.type === 'checkbox') input.checked = false;\n        });\n\n        timeout = setTimeout(() => (statusBlock.textContent = ''), 5000);\n      })\n      .catch((error) => {\n        statusBlock.textContent = errorText;\n      });\n  };\n\n  try {\n    if (!forms) throw new Error(`Формы не найдены`);\n\n    forms.forEach((form) => {\n      const statusBlock = document.createElement('div');\n\n      form.addEventListener('submit', (e) => {\n        e.preventDefault();\n\n        submitForm(form, statusBlock);\n      });\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = ({\n  sliderWrapperSelector,\n  slidesSelector,\n  slideActiveClass = 'slider-slide-active-flex',\n  btnPrevSelector = '.slider-arrow_left',\n  btnNextSelector = '.slider-arrow_right',\n  sliderCounterSelector,\n}) => {\n  if (!sliderWrapperSelector || !slidesSelector) return;\n\n  const sliderBlock = document.querySelector(sliderWrapperSelector);\n\n  let counterCurrent, counterTotal;\n\n  if (sliderCounterSelector) {\n    counterCurrent = sliderBlock.querySelector('.slider-counter-content__current');\n    counterTotal = sliderBlock.querySelector('.slider-counter-content__total');\n  }\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const sliderObj = {\n    slides: [],\n    currentSlide: 0,\n    counterCurrent: '',\n    counterTotal: '',\n    enable: true,\n    slidesInit: function (slidesSelector) {\n      this.slides = sliderBlock.querySelectorAll(slidesSelector);\n      this.currentSlide = 0;\n\n      this.slides.forEach((slide) => {\n        slide.classList.add('slider-slide');\n      });\n\n      this.slides[0].classList.add(slideActiveClass);\n\n      if (sliderCounterSelector) {\n        counterCurrent.textContent = 1;\n        counterTotal.textContent = this.slides.length;\n      }\n    },\n    slideChange: function (e) {\n      e.preventDefault();\n\n      if (!e.target.closest(btnNextSelector) && !e.target.closest(btnPrevSelector)) {\n        return;\n      }\n\n      prevSlide(sliderObj.slides, sliderObj.currentSlide, slideActiveClass);\n\n      if (e.target.closest(btnNextSelector)) {\n        sliderObj.currentSlide++;\n      } else if (e.target.closest(btnPrevSelector)) {\n        sliderObj.currentSlide--;\n      }\n\n      if (sliderObj.currentSlide >= sliderObj.slides.length) {\n        sliderObj.currentSlide = 0;\n      }\n      if (sliderObj.currentSlide < 0) {\n        sliderObj.currentSlide = sliderObj.slides.length - 1;\n      }\n\n      nextSlide(sliderObj.slides, sliderObj.currentSlide, slideActiveClass);\n\n      if (sliderCounterSelector) {\n        counterCurrent.textContent = sliderObj.currentSlide + 1;\n      }\n    },\n    mobileToggle: function (width) {\n      if (document.documentElement.clientWidth < width && !sliderObj.enable) {\n        sliderObj.init();\n      } else if (document.documentElement.clientWidth > width && sliderObj.enable) {\n        sliderObj.disable();\n      }\n    },\n    mobile: function (width) {\n      window.addEventListener('resize', () => {\n        this.mobileToggle(width);\n      });\n\n      this.disable();\n\n      this.mobileToggle(width);\n    },\n    disable: function () {\n      sliderBlock.removeEventListener('click', this.slideChange);\n\n      this.slides[this.currentSlide].classList.remove(slideActiveClass);\n\n      this.slides.forEach((slide) => {\n        slide.classList.remove('slider-slide');\n      });\n\n      this.enable = false;\n    },\n    renderSlide: function (number) {\n      prevSlide(this.slides, this.currentSlide, slideActiveClass);\n\n      this.currentSlide = number;\n\n      nextSlide(this.slides, this.currentSlide, slideActiveClass);\n\n      if (sliderCounterSelector) {\n        counterCurrent.textContent = sliderObj.currentSlide + 1;\n      }\n    },\n    init: function () {\n      this.slidesInit(slidesSelector);\n\n      if (!sliderBlock || !this.slides) return;\n\n      sliderBlock.addEventListener('click', this.slideChange);\n\n      this.enable = true;\n    },\n  };\n\n  sliderObj.init();\n\n  return sliderObj;\n};\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/transparency.js":
/*!*********************************!*\
  !*** ./modules/transparency.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transparency\": () => (/* binding */ transparency)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./modules/slider.js\");\n\n\nconst transparency = () => {\n  const itemImgs = document.querySelectorAll('.transparency-item__img');\n\n  let transparencySlider, transparencySliderPopup;\n\n  for (let i = 0; i < itemImgs.length; i++) {\n    itemImgs[i].addEventListener('click', () => {\n      transparencySliderPopup.renderSlide(i);\n    });\n  }\n\n  transparencySlider = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\n    sliderWrapperSelector: '.transparency-slider-wrap',\n    slidesSelector: '.transparency-item',\n  });\n\n  transparencySliderPopup = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.slider)({\n    sliderWrapperSelector: '.popup-transparency-slider-wrap',\n    slidesSelector: '.popup-transparency-slider__slide',\n    btnPrevSelector: '.popup-arrow_transparency_left',\n    btnNextSelector: '.popup-arrow_transparency_right',\n    sliderCounterSelector: '.slider-counter-content',\n  });\n\n  transparencySlider.mobile(1024);\n};\n\n\n//# sourceURL=webpack:///./modules/transparency.js?");

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