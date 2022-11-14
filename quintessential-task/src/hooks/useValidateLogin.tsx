export const useValidateEmailLogin = (email: string): string => {
  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return emailRegex.test(email) ? '' : 'email is incorrect';
};

export const useValidatePasswordLogin = (password: string): string => {
  const passwordRegex = /^[ A-Za-z0-9_@./#&+-]{4,}$/;
  return passwordRegex.test(password)
    ? ''
    : 'You cannot use a password less than 4 letters';
};

//email needs to be letters/numbers @ letters/numbers . letters
//password needs to be at least 4 characters
