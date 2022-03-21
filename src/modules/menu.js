export const menu = () => {
  const menu = document.querySelector('.popup-menu');

  const toggleMenu = () => {
    menu.classList.toggle('popup-show');
  };

  document.addEventListener('click', (e) => {
    if (
      e.target.closest('.menu__icon') ||
      e.target.classList.contains('close-menu') ||
      (e.target.closest('.popup-dialog-menu') && e.target.tagName === 'A') ||
      (menu.classList.contains('popup-show') &&
        !e.target.closest('.popup-dialog-menu'))
    ) {
      e.preventDefault();
      toggleMenu();
    }
  });
};
