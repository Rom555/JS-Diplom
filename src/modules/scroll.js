import { animate } from './helper';

export const scroll = () => {
  const scroll = (href) => {
    let scrollTo = document.querySelector(href).offsetTop;
    let scrollFrom = document.scrollingElement.scrollTop;

    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction < 0.5
          ? 8 * timeFraction * timeFraction * timeFraction * timeFraction
          : 1 - Math.pow(-2 * timeFraction + 2, 4) / 2;
      },
      draw(progress) {
        document.scrollingElement.scrollTop =
          scrollFrom + progress * (scrollTo - scrollFrom);
      },
    });
  };

  document.addEventListener('click', (e) => {
    if (
      (e.target.closest('.popup-menu-nav__item') &&
        e.target.closest('.popup-dialog-menu')) ||
      (e.target.closest('.button-footer') && e.target.tagName === 'A')
    ) {
      e.preventDefault();
      scroll(e.target.attributes.href.value);
    }
  });
};
