import { getData, sendData } from '../helper';

export class ItemService {
  constructor(url) {
    this._url = url;
  }

  getItems() {
    return getData(this._url);
  }

  addItem(item) {
    return sendData(this._url, {
      method: 'POST',
      body: item,
    });
  }

  removeItem(id) {
    return sendData(`${this._url}/${id}`, {
      method: 'DELETE',
    });
  }

  getItem(id) {
    return getData(`${this._url}/${id}`);
  }

  getItemBy(option, value) {
    return getData(`${this._url}?${option}=${value}`);
  }

  editItem(id, item) {
    return sendData(`${this._url}/${id}`, {
      method: 'PUT',
      body: item,
    });
  }
}
