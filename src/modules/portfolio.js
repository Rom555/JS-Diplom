import { slider } from './slider';

export const portfolio = () => {
  const sliderWrap = document.querySelector('.portfolio-slider-wrap');
  let portfolioSliderBlock, portfolioSliderBlockMobile, popupSlider, popupTextSlider;
  let num = 3;

  const sliderChangeNum = () => {
    portfolioSliderBlock.disable();

    if (num === 0) {
      portfolioSliderBlockMobile.init();
      return;
    }

    if (portfolioSliderBlockMobile.enable) {
      portfolioSliderBlockMobile.disable();
    }

    portfolioSliderBlock.numOfSlidesChange = num;
    portfolioSliderBlock.init();
  };

  const sliderToggle = () => {
    if (document.documentElement.clientWidth > 1024 && num !== 3) {
      num = 3;
      sliderChangeNum();
    } else if (
      document.documentElement.clientWidth <= 1024 &&
      document.documentElement.clientWidth > 900 &&
      num !== 2
    ) {
      num = 2;
      sliderChangeNum();
    } else if (document.documentElement.clientWidth <= 900 && document.documentElement.clientWidth > 575 && num !== 1) {
      num = 1;
      sliderChangeNum();
    } else if (document.documentElement.clientWidth <= 575 && num !== 0) {
      num = 0;
      sliderChangeNum();
    }
  };

  sliderWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-slider__slide-frame')) {
      let num = e.target.dataset.slide;
      popupSlider.renderSlide(num);
      popupTextSlider.renderSlide(num);
    }
  });

  window.addEventListener('resize', sliderToggle);

  portfolioSliderBlock = portfolioSlider({
    sliderWrapperSelector: '.portfolio-slider-wrap',
    slidesSelector: '.portfolio-slider__slide',
    slideActiveClass: 'portfolio-slide-active',
    btnPrevSelector: '.slider-arrow_left-portfolio',
    btnNextSelector: '.slider-arrow_right-portfolio',
  });

  portfolioSliderBlockMobile = slider({
    sliderWrapperSelector: '.portfolio-slider-wrap',
    slidesSelector: '.portfolio-slider-mobile .portfolio-slider__slide-frame',
    slideActiveClass: 'portfolio-slide-active',
    btnPrevSelector: '.slider-arrow-tablet-mobile_left',
    btnNextSelector: '.slider-arrow-tablet-mobile_right',
    sliderCounterSelector: '.slider-counter-content',
  });

  popupSlider = slider({
    sliderWrapperSelector: '.popup-portfolio-slider-wrap',
    slidesSelector: '.popup-portfolio-slider__slide',
    slideActiveClass: 'slider-slide-active-block',
    sliderCounterSelector: '.slider-counter-content',
    btnNextSelector: '.popup-arrow_right',
    btnPrevSelector: '.popup-arrow_left',
  });

  popupTextSlider = slider({
    sliderWrapperSelector: '.popup-dialog-portfolio',
    slidesSelector: '.popup-portfolio-text',
    btnNextSelector: '.popup-arrow_right',
    btnPrevSelector: '.popup-arrow_left',
  });

  portfolioSliderBlockMobile.disable();
  sliderToggle();
};

const portfolioSlider = ({
  sliderWrapperSelector,
  slidesSelector,
  slideActiveClass = 'slider-slide-active-flex',
  btnPrevSelector = '.slider-arrow_left',
  btnNextSelector = '.slider-arrow_right',
  sliderCounterSelector,
}) => {
  if (!sliderWrapperSelector || !slidesSelector) return;

  const sliderBlock = document.querySelector(sliderWrapperSelector);

  let counterCurrent, counterTotal;

  if (sliderCounterSelector) {
    counterCurrent = sliderBlock.querySelector('.slider-counter-content__current');
    counterTotal = sliderBlock.querySelector('.slider-counter-content__total');
  }

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const sliderObj = {
    slides: [],
    currentSlide: 0,
    counterCurrent: '',
    counterTotal: '',
    enable: true,
    numOfSlidesChange: 3,
    slidesInit: function (slidesSelector) {
      this.slides = sliderBlock.querySelectorAll(slidesSelector);
      this.currentSlide = 0;

      this.slides.forEach((slide) => {
        slide.classList.add('slider-slide');
      });

      for (let i = 0; i < sliderObj.numOfSlidesChange; i++) {
        this.slides[i].classList.add(slideActiveClass);
      }

      if (sliderCounterSelector) {
        counterCurrent.textContent = 1;
        counterTotal.textContent = this.slides.length;
      }
    },
    slideChange: function (e) {
      e.preventDefault();

      if (!e.target.closest(btnNextSelector) && !e.target.closest(btnPrevSelector)) {
        return;
      }

      for (let i = 0; i < sliderObj.numOfSlidesChange; i++) {
        prevSlide(sliderObj.slides, sliderObj.currentSlide + i, slideActiveClass);
      }

      if (e.target.closest(btnNextSelector)) {
        sliderObj.currentSlide++;
      } else if (e.target.closest(btnPrevSelector)) {
        sliderObj.currentSlide--;
      }

      if (sliderObj.currentSlide + sliderObj.numOfSlidesChange >= sliderObj.slides.length) {
        document.querySelector(btnNextSelector).style.display = 'none';
      } else if (sliderObj.currentSlide < 1) {
        document.querySelector(btnPrevSelector).style.display = 'none';
      } else {
        document.querySelector(btnNextSelector).style.display = 'flex';
        document.querySelector(btnPrevSelector).style.display = 'flex';
      }

      for (let i = 0; i < sliderObj.numOfSlidesChange; i++) {
        nextSlide(sliderObj.slides, sliderObj.currentSlide + i, slideActiveClass);
      }

      if (sliderCounterSelector) {
        counterCurrent.textContent = sliderObj.currentSlide + 1;
      }
    },
    mobileToggle: function (width) {
      if (document.documentElement.clientWidth < width && !this.enable) {
        this.init();
      } else if (document.documentElement.clientWidth > width && this.enable) {
        this.disable();
      }
    },
    mobile: function (width) {
      window.addEventListener('resize', () => {
        this.mobileToggle(width);
      });

      this.disable();

      this.mobileToggle(width);
    },
    disable: function () {
      sliderBlock.removeEventListener('click', this.slideChange);

      this.slides.forEach((slide) => {
        slide.classList.remove('slider-slide');
        slide.classList.remove(slideActiveClass);
      });

      document.querySelector(btnNextSelector).style.display = 'none';
      document.querySelector(btnPrevSelector).style.display = 'none';

      this.enable = false;
    },
    renderSlide: function (number) {
      prevSlide(this.slides, this.currentSlide, slideActiveClass);

      this.currentSlide = +number;

      nextSlide(this.slides, this.currentSlide, slideActiveClass);

      if (sliderCounterSelector) {
        counterCurrent.textContent = sliderObj.currentSlide + 1;
      }
    },
    init: function () {
      this.slidesInit(slidesSelector);

      if (!sliderBlock || !this.slides) return;

      sliderBlock.addEventListener('click', this.slideChange);

      this.enable = true;

      document.querySelector(btnNextSelector).style.display = 'flex';
    },
  };

  sliderBlock.querySelector(btnNextSelector).style.userSelect = 'none';
  sliderBlock.querySelector(btnPrevSelector).style.userSelect = 'none';

  sliderObj.init();

  return sliderObj;
};
