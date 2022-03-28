import { render } from './render';

export const addItem = () => {
  const btn = document.querySelector('.btn-addItem');
  const modal = document.getElementById('modal');
  const form = modal.querySelector('form');
  const typeInput = form.querySelector('#type');
  const nameInput = form.querySelector('#name');
  const unitsInput = form.querySelector('#units');
  const costInput = form.querySelector('#cost');
  const cancelBtn = form.querySelector('.cancel-button');

  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  cancelBtn.addEventListener('click', () => {
    modal.style.display = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('.cancel-button')) {
      e.preventDefault();
      modal.style.display = '';
      form.reset();
    } else if (e.target.closest('.button__close')) {
      modal.style.display = '';
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
        });
      });
    }
  });
};
