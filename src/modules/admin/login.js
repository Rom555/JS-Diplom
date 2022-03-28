import { getData } from '../helper';

export const login = () => {
  const form = document.querySelector('.main-auth form');
  const textWarnings = form.querySelectorAll('.text-warning');
  const name = form.querySelector('input[type=text]');
  const password = form.querySelector('input[type=password]');

  const clearWarnings = () => {
    textWarnings.forEach((text) => {
      text.style.display = 'none';
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearWarnings();

    getData(`http://localhost:4545/users?login=${name.value}`)
      .then((data) => {
        if (data.length === 0) textWarnings[1].style.display = '';
        else {
          getData(`http://localhost:4545/users?login=${name.value}&password=${password.value}`)
            .then((data) => {
              if (data.length === 0) textWarnings[2].style.display = '';
              else {
                document.cookie = 'user=' + JSON.stringify(data[0]) + ';maxAge=864000';
                window.location.replace('table.html');
              }
            })
            .catch((error) => {
              throw error;
            });
        }
      })
      .then((data) => {
        name.value = '';
        password.value = '';
      })
      .catch((error) => {
        console.log(error.message);
        textWarnings[0].style.display = '';
      });
  });

  clearWarnings();
};
