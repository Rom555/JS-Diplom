import { slider } from './slider';

export const repairTypes = () => {
  const navWrap = document.querySelector('.nav-wrap-repair');
  const navItems = navWrap.querySelectorAll('.repair-types-nav__item');
  const sliders = document.querySelectorAll('.repair-types-slider > div');

  let repairSlider, repairNavSlider;
  let sliderNumber = 1;

  const sliderToggle = () => {
    sliders.forEach((slider) => {
      slider.style.display = 'none';
    });

    sliders[sliderNumber - 1].style.display = '';
  };

  const mobileToggle = () => {
    if (document.documentElement.clientWidth < 1024 && !repairNavSlider.enable) {
      repairNavSlider.init();
    } else if (document.documentElement.clientWidth > 1024 && repairNavSlider.enable) {
      repairNavSlider.disable();
    }
  };

  navWrap.addEventListener('click', (e) => {
    if (e.target.closest('.repair-types-nav__item')) {
      e.preventDefault();

      for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');

        if (e.target.closest('.repair-types-nav__item') === navItems[i]) {
          navItems[i].classList.add('active');
          sliderNumber = i + 1;
        }
      }

      repairSlider.slidesInit(`.types-repair${sliderNumber} .repair-types-slider__slide`);
      sliderToggle();
    }
  });

  window.addEventListener('resize', mobileToggle);

  repairSlider = slider({
    sliderWrapperSelector: '.repair-types-slider-wrap',
    slidesSelector: '.types-repair1 .repair-types-slider__slide',
    sliderCounterSelector: '.slider-counter',
  });

  repairNavSlider = slider({
    sliderWrapperSelector: '.nav-wrap-repair',
    slidesSelector: '.repair-types-nav__item',
    slideActiveClass: 'repair-slide-active',
    btnNextSelector: '.nav-arrow_right',
    btnPrevSelector: '.nav-arrow_left',
  });

  sliderToggle();
  mobileToggle();
};
