export const serialize = (formData) => {
  const formProps = Object.fromEntries(formData);
  let trimmedForm = {};

  for (const key in formProps) {
    trimmedForm[key] = formProps[key].trim();
  }

  return trimmedForm;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const validation = (name, value) => {
  switch (name) {
    case 'firstName':
    case 'lastName':
      return !/^[A-Z]{1}[a-z]+$/.test(value)
        ? 'First letter must be in uppercase, word length must be 2+ letters'
        : '';
    case 'password':
    case 'confirmPassword':
      return !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
        ? 'Please choose a password that contains both upper- and lower-case letters, has one or more digits, one or more special characters and must be longest 8+ symbols'
        : '';
    case 'email':
      return !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
        ? 'Provide a valid email address'
        : '';
    case 'phone':
      return !/^(?:\+3)?8?(0\d{9})$/.test(value) ? 'Must be a valid phone number' : '';

    default:
      return '';
  }
};
