import { getData, getCookie } from '../helper';

export const checkCookie = async () => {
  let cookie;

  cookie = getCookie('user');

  if (cookie) {
    cookie = JSON.parse(cookie);

    return getData(`http://localhost:4545/users?login=${cookie.login}&password=${cookie.password}`).then((data) => {
      if (data.length !== 0) {
        return true;
      }
    });
  }

  return false;
};
