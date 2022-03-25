import { getData } from './helper';
import { slider } from './slider';

export const repairPrices = () => {
  const navWrap = document.querySelector('.nav-list-popup-repair');
  const headTitle = document.querySelector('.popup-repair-types-content__head-title');
  const tbody = document.querySelector('.popup-repair-types-content-table tbody');

  let navSlider;

  const sliderInit = () => {
    navSlider = slider({
      sliderWrapperSelector: '.popup-repair-types .nav-wrap-repair',
      slidesSelector: '.popup-repair-types-nav__item',
      slideActiveClass: 'repair-slide-active-inline',
      btnNextSelector: '.nav-arrow_right',
      btnPrevSelector: '.nav-arrow_left',
    });

    navSlider.mobile(1024);
  };

  const renderTable = (type) => {
    getData(`http://localhost:4545/prices?type=${type}`)
      .then((data) => {
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
      })
      .catch((error) => console.log(error));
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
    getData('http://localhost:4545/prices')
      .then((data) => {
        let btnsText = [];

        data.forEach((elem) => {
          if (!btnsText.includes(elem.type)) {
            btnsText.push(elem.type);
          }
        });

        navWrap.textContent = '';
        renderBtns(btnsText);
        renderTable(btnsText[0]);
      })
      .catch((error) => console.log(error.message))
      .finally(sliderInit());
  };

  navWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-repair-types-nav__item')) {
      e.preventDefault();

      headTitle.textContent = e.target.textContent.trim();
      renderTable(e.target.textContent.trim());
      document.querySelector('.popup-repair-types-content-table').scrollTop = 0;
    }
  });

  getTableData();
};
