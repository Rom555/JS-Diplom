import { login } from './modules/admin/login';
import { checkCookie } from './modules/admin/checkCookie';
import { ItemService } from './modules/admin/ItemService';
import { render } from './modules/admin/render';

if (/\w*\.html/.exec(document.location.href)[0] === 'index.html') {
  checkCookie().then((success) => {
    if (success) {
      window.location.replace('table.html');
    }
  });

  login();
} else if (/\w*\.html/.exec(document.location.href)[0] === 'table.html') {
  checkCookie().then((success) => {
    if (!success) {
      window.location.replace('index.html');
    }
  });

  window.itemService = new ItemService('http://localhost:4545/prices');

  itemService.getItems().then((data) => {
    render(data);
  });
}
