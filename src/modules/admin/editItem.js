import { render } from './render';

export const editItem = () => {
  const tbody = document.getElementById('tbody');
  const modal = document.getElementById('modal');
  const modalHeader = modal.querySelector('.modal__header');
  const form = modal.querySelector('form');
  const typeInput = form.querySelector('#type');
  const nameInput = form.querySelector('#name');
  const unitsInput = form.querySelector('#units');
  const costInput = form.querySelector('#cost');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-change')) {
      e.preventDefault();

      modal.style.display = 'flex';
      modalHeader.textContent = 'Редактировать услугу';

      const tr = e.target.closest('tr');
      const id = tr.querySelector('.table__id').textContent;

      itemService.getItem(id).then((item) => {
        typeInput.value = item.type;
        nameInput.value = item.name;
        unitsInput.value = item.units;
        costInput.value = item.cost;

        form.dataset.item = id;
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.dataset.item) {
      const id = form.dataset.item;

      const item = {
        type: typeInput.value,
        name: nameInput.value,
        units: unitsInput.value,
        cost: costInput.value,
      };

      itemService.editItem(id, item).then(() => {
        itemService.getItems().then((items) => {
          render(items);
          form.reset();
          form.removeAttribute('data-item');
          modal.style.display = '';
        });
      });
    }
  });
};
