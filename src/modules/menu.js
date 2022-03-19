export const menu = () => {
  const menu = document.querySelector('.popup-dialog-menu');

  const toggleMenu = () => {
    menu.classList.toggle('show-menu');
  };

  document.addEventListener('click', (e) => {
    if (
      e.target.closest('.menu__icon') ||
      e.target.classList.contains('close-menu') ||
      (e.target.closest('.popup-dialog-menu') && e.target.tagName === 'A') ||
      (menu.classList.contains('show-menu') &&
        !e.target.closest('.popup-dialog-menu'))
    ) {
      e.preventDefault();
      toggleMenu();
    }
  });
};
