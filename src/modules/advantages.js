export const advantages = () => {
  const itemsDesktop = document.querySelectorAll('.mobile-hide.tablet-hide .formula-item');
  const itemsMobile = document.querySelectorAll('.desktop-hide .formula-item');

  const toggleItem = (item) => {
    const popup = item.querySelector('.formula-item-popup');

    item.classList.toggle('active-item');

    if (item.classList.contains('active-item')) {
      if (popup.getBoundingClientRect().y < 0) {
        popup.classList.add('reflect');
      }
    } else {
      popup.classList.remove('reflect');
    }
  };

  itemsDesktop.forEach((item) => {
    const icon = item.querySelector('.formula-item__icon');

    icon.addEventListener('mouseover', () => {
      toggleItem(item);
    });

    icon.addEventListener('mouseout', () => {
      toggleItem(item);
    });
  });

  itemsMobile.forEach((item) => {
    item.addEventListener('click', () => {
      toggleItem(item);
    });
  });
};
