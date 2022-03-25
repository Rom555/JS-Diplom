import { sendData } from './helper';

export const sendForm = () => {
  const forms = document.querySelectorAll('form');
  const loadContent = 'Загрузка...';
  const errorText = 'Ошибка!';
  let validateErrorText = 'Неправильно заполнены поля!';

  const openThank = () => {
    document.querySelector('.popup-consultation').classList.remove('popup-show');
    document.querySelector('.popup-thank').classList.add('popup-show');
  };

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (true) {
        case input.type === 'checkbox':
          if (!input.checked) {
            success = false;
            validateErrorText = 'Согласитесь на обработку персональных данных!';
          }
          break;
        case input.name === 'name':
          if (/[^а-я\s]/gi.test(input.value)) {
            success = false;
            validateErrorText = 'Неправильно заполнено имя!';
          }
          if (input.value.length < 2) {
            success = false;
            validateErrorText = 'В имени должно быть минимум 2 символа';
          }
          break;
        case input.name === 'phone':
          if (input.value.replace(/[\D]/g, '').length !== 11) {
            success = false;
            validateErrorText = 'Неправильно заполнен телефон!';
          }
          break;
      }
    });

    return success;
  };

  const submitForm = (form, statusBlock) => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    if (form.id !== 'feedback3' && form.id !== 'feedback1' && form.id !== 'feedback6') {
      statusBlock.style.color = '#fff';
      statusBlock.style.marginBottom = '20px';
    } else statusBlock.style.color = '#000';

    form.before(statusBlock);

    if (!validate(formElements)) {
      statusBlock.textContent = validateErrorText;
      return;
    }

    statusBlock.innerHTML = loadContent;

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formBody,
    })
      .then((data) => {
        statusBlock.textContent = '';

        formElements.forEach((input) => {
          input.value = '';

          if (input.type === 'checkbox') input.checked = false;
        });

        openThank();
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!forms) throw new Error(`Формы не найдены`);

    forms.forEach((form) => {
      const statusBlock = document.createElement('div');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm(form, statusBlock);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
