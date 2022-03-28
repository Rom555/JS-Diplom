import { render } from './render';

export const dropdown = () => {
  const list = document.getElementById('typeItem');

  list.addEventListener('input', () => {
    if (list.value.trim() === 'Все услуги') {
      itemService
        .getItems()
        .then((data) => {
          render(data);
        })
        .catch((error) => console.log(error.message));
    } else {
      itemService
        .getItemBy('type', list.value.trim())
        .then((data) => {
          render(data);
        })
        .catch((error) => console.log(error.message));
    }
  });

  itemService
    .getItems()
    .then((data) => {
      let types = [];

      list.innerHTML = `<option value="Все услуги">Все услуги</option>`;

      data.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
          list.insertAdjacentHTML('beforeend', `<option value="${item.type}">${item.type}</option>`);
        }
      });
    })
    .catch((error) => console.log(error.message));
};
