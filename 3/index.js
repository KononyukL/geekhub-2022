//2.

// Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)

const stringToUpperCase = (item) => {
  return item[0].toUpperCase() + item.slice(1);
};

const arrayToCamelCase = (arr, callback) => {
  const result = arr.map((elem) => {
    return callback(elem);
  });
  return result.join("");
};

console.log(arrayToCamelCase(["my", "name", "is", "Vasya"], stringToUpperCase));

// Першим аргументом може бути тільки масив будь-яких чисел

const multiplyByTen = (elem) => {
  return elem * 10;
};

const multiplyItemsByTen = (arr, callback) => {
  let result = arr.map((item) => {
    return callback(item);
  });
  return result.join(" , ");
};

console.log(multiplyItemsByTen([10, 20, 30], multiplyByTen));

//Першим аргументом тільки об'єкти такого формату
//func([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], cb);
// 'Jhon is 45, Aaron is 20'

const userDataToString = (item) => {
  return `${item.name} is ${item.age}`;
};

const usersListDataToString = (arr, callback) => {
  const result = arr.map((elem) => {
    return callback(elem);
  });
  return result.join(" , ");
};
console.log(
  usersListDataToString(
    [
      {age: 45, name: "Jhon"},
      {age: 20, name: "Aaron"},
    ],
    userDataToString
  )
);

//Першим аргументом може бути  тільки масив рядків
//func(['abc', '123'], cb) →
// 'cba, 321' // рядки розвертаються

const stringReverse = (item) => {
  return item.split("").reverse().join("");
};

const arrayItemsRevers = (arr, callback) => {
  const result = arr.map((elem) => {
    return callback(elem);
  });
  return result.join(" , ");
};

console.log(arrayItemsRevers(["abc", "123"], stringReverse));

// 3. this
// 3.1.

const rectangle = {
  width: 7,
  height: 5,
  getSquare() {
    return this.width * this.height;
  },
};

//3.2.
const price = {
  price: 10,
  discount: "15%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    const percent = (this.price / 100) * parseInt(this.discount, 10);
    return this.price - percent;
  },
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

//3.3.
const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value += 1;
    return this;
  },
  minusOne: function () {
    this.value -= 1;
    return this;
  },
};
numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3

//3.4.

const element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
const getElementHeight = element.getHeight.bind(element);
getElementHeight();

//4.
const convertToObject = (num) => {
  const obj = {
    value: num,
    isOdd: Boolean(num % 2),
  };
  return obj;
};

// 5. Замикання
// 5.1

const minus = (firsParam = 0) => {
  return (secondParam = 0) => firsParam - secondParam;
};
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

// 5.2

function multiplyMaker(num) {
  let result = num;

  return (multiplyNun) => {
    result *= multiplyNun;
    return result;
  };
}

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

// 5.3.

(function () {
  let string = "";

  function setString(str) {
    if (typeof str === "number" && !isNaN(str)) {
      string = String(str);
      return;
    }
    string = str || "";
  }

  function getString() {
    return string;
  }

  function getStringLength() {
    return string.length;
  }

  function getReverseString() {
    return string.split("").reverse().join("");
  }

  window.module = {setString, getString, getStringLength, getReverseString};
})();

// 5.4

(function () {
  let result = 0;

  function setValue(num) {
    result = num;
    return this;
  }

  function plus(num) {
    result += num;
    return this;
  }

  function minus(num) {
    result -= num;
    return this;
  }

  function multiply(num) {
    result *= num;
    return this;
  }

  function divide(num) {
    result /= num;
    return this;
  }

  function power(num) {
    result = Math.pow(result, num);
    return this;
  }

  function getResult() {
    return result;
  }

  window.module = {setValue, plus, minus, multiply, divide, power, getResult};
})();

// 6.

const sum = (firstNum) => (secondNum) => (thirdNum) =>
  firstNum + secondNum + thirdNum;

sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
