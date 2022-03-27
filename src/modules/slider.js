export const slider = ({
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
    slidesInit: function (slidesSelector) {
      this.slides = sliderBlock.querySelectorAll(slidesSelector);
      this.currentSlide = 0;

      this.slides.forEach((slide) => {
        slide.classList.add('slider-slide');
      });

      this.slides[0].classList.add(slideActiveClass);

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

      prevSlide(sliderObj.slides, sliderObj.currentSlide, slideActiveClass);

      if (e.target.closest(btnNextSelector)) {
        sliderObj.currentSlide++;
      } else if (e.target.closest(btnPrevSelector)) {
        sliderObj.currentSlide--;
      }

      if (sliderObj.currentSlide >= sliderObj.slides.length) {
        sliderObj.currentSlide = 0;
      }
      if (sliderObj.currentSlide < 0) {
        sliderObj.currentSlide = sliderObj.slides.length - 1;
      }

      nextSlide(sliderObj.slides, sliderObj.currentSlide, slideActiveClass);

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

      this.slides[this.currentSlide].classList.remove(slideActiveClass);

      this.slides.forEach((slide) => {
        slide.classList.remove('slider-slide');
      });

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
    },
  };

  sliderBlock.querySelector(btnNextSelector).style.userSelect = 'none';
  sliderBlock.querySelector(btnPrevSelector).style.userSelect = 'none';

  sliderObj.init();

  return sliderObj;
};
