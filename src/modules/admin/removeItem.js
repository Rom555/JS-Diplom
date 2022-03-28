import { render } from './render';

export const removeItem = () => {
  const tbody = document.getElementById('tbody');

  tbody.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      e.preventDefault();

      const tr = e.target.closest('tr');
      const id = tr.querySelector('.table__id').textContent;

      itemService.removeItem(id).then(() => {
        itemService.getItems().then((items) => {
          render(items);
        });
      });
    }
  });
};
