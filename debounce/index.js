const input = document.querySelector(".input");
const button = document.querySelector(".button");
const ul = document.querySelector(".city");

const debounce = (func, delay = 1000) => {
  let timeoutId;

  return function (...arguments) {
    ul.classList.remove("text");
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...arguments);
    }, delay);
  };
};

const doSomething = () => {
  if (input.value) {
    ul.classList.add("text");
  }
  console.log(input.value);
};

const debounced = debounce(doSomething);

button.addEventListener("click", () => {
  input.classList.remove("removeInput");
});

input.addEventListener("input", debounced);
