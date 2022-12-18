const form = document.getElementById("form");
const message = document.querySelector(".message");

const setError = (name, message) => {
  const element = document.querySelector(`[name=${name}]`);
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (name) => {
  const element = document.querySelector(`[name=${name}]`);
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validation = (value, name, reg, requiredErr, validateErr) => {
  if (value === "") {
    setError(name, requiredErr);
    return true;
  } else if (!reg.test(value)) {
    setError(name, validateErr);
    return true;
  }

  setSuccess(name);

  return false;
};

const validateForm = (form) => {
  const { firstName, lastName, email, phone, password, confirmPassword } = form;
  let newNumber;

  const firstNameErr = validation(
    firstName,
    "firstName",
    /^[A-Z]{1}[a-z]+$/,
    "First name is required",
    "First letter must be in uppercase, word length must be 2+ letters"
  );

  const lastNameErr = validation(
    lastName,
    "lastName",
    /^[A-Z]{1}[a-z]+$/,
    "Last name is required",
    "First letter must be in uppercase, word length must be 2+ letters"
  );

  const phoneErr = validation(
    phone,
    "phone",
    /^(?:\+3)?8?(0\d{9})$/,
    "Phone is required",
    "Must be a valid phone number"
  );

  if (!phoneErr) {
    newNumber = phone.replace(/^0/, "+380");
  }

  const emailErr = validation(
    email.toLowerCase(),
    "email",
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email is required",
    "Provide a valid email address"
  );

  const passwordErr = validation(
    password,
    "password",
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password is required",
    "Please choose a password that contains both upper- and lower-case letters, has one or more digits, one or more special characters and must be longest 8+ symbols"
  );

  let confirmPasswordErr = validation(
    confirmPassword,
    "confirmPassword",
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Please confirm your password",
    "Please choose a password that contains both upper- and lower-case letters, has one or more digits, one or more special characters and must be longest 8+ symbols"
  );

  if (!confirmPasswordErr && confirmPassword !== password) {
    setError("confirmPassword", "Passwords doesn't match");
    confirmPasswordErr = true;
  }

  if (
    firstNameErr ||
    lastNameErr ||
    phoneErr ||
    emailErr ||
    passwordErr ||
    confirmPasswordErr
  ) {
    return null;
  }

  return { ...form, phone: newNumber };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  let trimmedForm = {};

  for (const key in formProps) {
    trimmedForm[key] = formProps[key].trim();
  }

  const formValues = validateForm(trimmedForm);

  if (formValues) {
    form.classList.remove("show");
    message.classList.add("show");
    console.log(formValues);
  }
});
