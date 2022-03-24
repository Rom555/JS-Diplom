import { phone } from './modules/phoneList';
import { menu } from './modules/menu';
import { scroll } from './modules/scroll';
import { modal } from './modules/modal';
import { phoneMask } from './modules/phoneMask';
import { advantages } from './modules/advantages';
import { slider } from './modules/slider';

phone();
menu();
scroll();
modal();
phoneMask();
advantages();
slider({
  sliderWrapperClass: 'formula-slider-wrap',
  slidesClass: 'formula-slider__slide',
  btnNextClass: 'slider-arrow_right',
  btnPrevClass: 'slider-arrow_left',
});
