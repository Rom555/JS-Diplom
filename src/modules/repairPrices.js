import { getData } from './helper';

export const repairPrices = () => {
  const navWrap = document.querySelector('.nav-list-popup-repair');
  const headTitle = document.querySelector('.popup-repair-types-content__head-title');
  const tbody = document.querySelector('.popup-repair-types-content-table tbody');

  const renderTable = (type) => {
    getData(`http://localhost:4545/prices?type=${type}`).then((data) => {
      tbody.textContent = '';

      data.forEach((elem) => {
        tbody.insertAdjacentHTML(
          'beforeend',
          `
            <tr class="mobile-row showHide">
            <td class="repair-types-name">
                ${elem.name}
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
                Ед.измерения
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
                Цена за ед.
            </td>
            <td class="repair-types-value">${elem.units === 'м2' ? 'м<sup>2</sup>' : elem.units}</td>
            <td class="repair-types-value">${elem.cost} руб.</td>
            </tr>
          `
        );
      });
    });
  };

  const renderBtns = (btnsText) => {
    btnsText.forEach((text) => {
      navWrap.insertAdjacentHTML(
        'beforeend',
        `
            <button class="button_o popup-repair-types-nav__item">
                ${text}
            </button>
        `
      );
    });
  };

  const getTableData = () => {
    getData('http://localhost:4545/prices').then((data) => {
      let btnsText = [];

      data.forEach((elem) => {
        if (!btnsText.includes(elem.type)) {
          btnsText.push(elem.type);
        }
      });

      navWrap.textContent = '';
      renderBtns(btnsText);
      renderTable(btnsText[0]);
    });
  };

  navWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-repair-types-nav__item')) {
      e.preventDefault();

      headTitle.textContent = e.target.textContent.trim();
      renderTable(e.target.textContent.trim());
    }
  });
  getTableData();
};
