export const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export const getData = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(`${res.status} ${res.statusText}`);
    })
    .catch((error) => {
      throw error;
    });
};

export const sendData = (url, data) => {
  return fetch(url, {
    method: data.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data.body ? JSON.stringify(data.body) : '',
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(`${res.status} ${res.statusText}`);
    })
    .catch((error) => {
      throw error;
    });
};

export const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
