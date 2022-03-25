import { slider } from './slider';

export const transparency = () => {
  const itemImgs = document.querySelectorAll('.transparency-item__img');

  let transparencySlider, transparencySliderPopup;

  for (let i = 0; i < itemImgs.length; i++) {
    itemImgs[i].addEventListener('click', () => {
      transparencySliderPopup.renderSlide(i);
    });
  }

  transparencySlider = slider({
    sliderWrapperSelector: '.transparency-slider-wrap',
    slidesSelector: '.transparency-item',
  });

  transparencySliderPopup = slider({
    sliderWrapperSelector: '.popup-transparency-slider-wrap',
    slidesSelector: '.popup-transparency-slider__slide',
    btnPrevSelector: '.popup-arrow_transparency_left',
    btnNextSelector: '.popup-arrow_transparency_right',
    sliderCounterSelector: '.slider-counter-content',
  });

  transparencySlider.mobile(1024);
};
