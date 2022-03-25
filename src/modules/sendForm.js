import { sendData } from './helper';

export const sendForm = () => {
  const forms = document.querySelectorAll('form');
  const loadContent = 'Загрузка...';
  const errorText = 'Ошибка!';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется.';
  let validateErrorText = 'Неправильно заполнены поля!';

  let timeout;

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
          if (/[^а-я\s]/gi.test(input.value) || !input.value) {
            success = false;
            validateErrorText = 'Неправильно заполнено имя!';
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

    clearTimeout(timeout);

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
        statusBlock.textContent = successText;

        formElements.forEach((input) => {
          input.value = '';

          if (input.type === 'checkbox') input.checked = false;
        });

        timeout = setTimeout(() => (statusBlock.textContent = ''), 5000);
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
