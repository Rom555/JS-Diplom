export const phoneMask = () => {
  const phoneInputs = document.querySelectorAll('input[name=phone]');

  const mask = (value) => {
    value = value.replace(/\D/g, '');

    value = value.replace(
      /(7)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})(.*)/,
      (str, $1, $2, $3, $4, $5, $6) => {
        str = '+7 (';

        if (!$2) return str;
        str += $2;
        if (!$3) return str;
        str += ') ' + $3;
        if (!$4) return str;
        str += '-' + $4;
        if (!$5) return str;
        str += '-' + $5;

        return str;
      }
    );

    return value;
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = mask(input.value);
    });
    input.addEventListener('focus', () => {
      if (!input.value) {
        input.value = '+7 (';
      }
    });
    input.addEventListener('blur', () => {
      if (input.value === '+7 (') {
        input.value = '';
      }
    });
  });
};
