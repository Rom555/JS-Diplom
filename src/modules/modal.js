export const modal = () => {
  const popups = document.querySelectorAll('.popup');

  const showPopup = (e, popupSelector) => {
    e.preventDefault();

    let popup = document.querySelector(popupSelector);

    popup.classList.add('popup-show');
  };

  const closeAllPopups = () => {
    popups.forEach((popup) => {
      popup.classList.remove('popup-show');
    });
  };

  document.addEventListener('click', (e) => {
    if (
      (!e.target.closest('popup-dialog') || e.target.closest('.close')) &&
      e.target.closest('.popup-show')
    ) {
      e.preventDefault();

      closeAllPopups();
    } else if (e.target.closest('.link-list') && e.target.tagName === 'A') {
      showPopup(e, '.popup-repair-types');
    } else if (e.target.classList.contains('link-privacy')) {
      showPopup(e, '.popup-privacy');
    }
  });

  popups.forEach((popup) => {
    popup.style.transition = '1s';
  });
};
