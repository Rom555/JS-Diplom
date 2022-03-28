import { render } from './render';

export const dropdown = () => {
  const list = document.getElementById('typeItem');

  list.addEventListener('input', () => {
    if (list.value.trim() === 'Все услуги') {
      itemService
        .getItems()
        .then((items) => {
          render(items);
        })
        .catch((error) => console.log(error.message));
    } else {
      itemService
        .getItemBy('type', list.value.trim())
        .then((items) => {
          render(items);
        })
        .catch((error) => console.log(error.message));
    }
  });

  itemService
    .getItems()
    .then((items) => {
      let types = [];

      list.innerHTML = `<option value="Все услуги">Все услуги</option>`;

      items.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
          list.insertAdjacentHTML('beforeend', `<option value="${item.type}">${item.type}</option>`);
        }
      });
    })
    .catch((error) => console.log(error.message));
};

export const clearDropdown = () => {
  const list = document.getElementById('typeItem');

  itemService
    .getItems()
    .then((items) => {
      let types = [];

      list.innerHTML = `<option value="Все услуги">Все услуги</option>`;

      items.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
          list.insertAdjacentHTML('beforeend', `<option value="${item.type}">${item.type}</option>`);
        }
      });
    })
    .catch((error) => console.log(error.message));
};
