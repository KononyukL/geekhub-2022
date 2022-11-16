const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-list-city");

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


input.addEventListener("input", debounced);
