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

  changeItem(id, data) {
    return sendData(`${this._url}/${id}`, {
      method: 'PATCH',
      body: data,
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

  filterItems(filterOption) {
    return getData(`${this._url}?${filterOption}=true`);
  }

  getSortItems(sortOption) {
    return getData(`${this._url}?_sort=${sortOption.name}&_order=${sortOption.value}`);
  }

  getSearchItems(str) {
    return getData(`${this._url}?name_like=${str}`);
  }
}
