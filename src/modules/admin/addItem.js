import { render } from './render';

export const addItem = () => {
  const btn = document.querySelector('.btn-addItem');
  const modal = document.getElementById('modal');
  const modalHeader = modal.querySelector('.modal__header');
  const form = modal.querySelector('form');
  const typeInput = form.querySelector('#type');
  const nameInput = form.querySelector('#name');
  const unitsInput = form.querySelector('#units');
  const costInput = form.querySelector('#cost');

  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalHeader.textContent = 'Добавение новой услуги';
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('.cancel-button') || e.target.closest('.button__close')) {
      e.preventDefault();
      modal.style.display = '';
      form.reset();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.dataset.item) {
      const item = {
        type: typeInput.value,
        name: nameInput.value,
        units: unitsInput.value,
        cost: costInput.value,
      };

      itemService.addItem(item).then(() => {
        itemService.getItems().then((items) => {
          render(items);
          form.reset();
          modal.style.display = '';
        });
      });
    }
  });
};
