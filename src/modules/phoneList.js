export const phone = () => {
  const numberBlock = document.querySelector(
    '.header-contacts__phone-number-accord'
  );
  const btn = document.querySelector('.header-contacts__arrow');

  const toggle = () => {
    numberBlock.classList.toggle('show-number');
    btn.classList.toggle('rotate');
  };

  btn.addEventListener('click', toggle);
};
