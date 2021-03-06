import { phone } from './modules/phoneList';
import { menu } from './modules/menu';
import { scroll } from './modules/scroll';
import { modal } from './modules/modal';
import { phoneMask } from './modules/phoneMask';
import { advantages } from './modules/advantages';
import { slider } from './modules/slider';
import { repairTypes } from './modules/repairTypes';
import { transparency } from './modules/transparency';
import { accordion } from './modules/accordion';
import { sendForm } from './modules/sendForm';
import { repairPrices } from './modules/repairPrices';
import { portfolio } from './modules/portfolio';

phone();
menu();
scroll();
modal();
phoneMask();
advantages();
slider({
  sliderWrapperSelector: '.formula-slider-wrap',
  slidesSelector: '.formula-slider__slide',
});
repairTypes();
transparency();
slider({
  sliderWrapperSelector: '.reviews-slider-wrap',
  slidesSelector: '.reviews-slider__slide',
});
accordion();
sendForm();
repairPrices();
portfolio();
