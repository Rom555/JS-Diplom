import { login } from './modules/admin/login';
import { checkCookie } from './modules/admin/checkCookie';
import { ItemService } from './modules/admin/ItemService';
import { render } from './modules/admin/render';
import { dropdown } from './modules/admin/dropdown';
import { removeItem } from './modules/admin/removeItem';

if (/\w*\.html/.exec(document.location.href)[0] === 'index.html') {
  checkCookie()
    .then((success) => {
      if (success) {
        window.location.replace('table.html');
      }
    })
    .catch((error) => console.log(error.message));

  login();
} else if (/\w*\.html/.exec(document.location.href)[0] === 'table.html') {
  checkCookie()
    .then((success) => {
      if (!success) {
        window.location.replace('index.html');
      }
    })
    .catch((error) => {
      console.log(error.message);
      window.location.replace('index.html');
    });

  window.itemService = new ItemService('http://localhost:4545/prices');

  itemService
    .getItems()
    .then((items) => {
      render(items);
    })
    .catch((error) => console.log(error.message));

  dropdown();
  removeItem();
}
