//2.
const stringToUpperCase = (item) => {
  return item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

const arrayToCamelCase = (arr, callback) => {
  return arr
    .map((elem) => {
      return callback(elem);
    })
    .join("");
};

console.log(arrayToCamelCase(["my", "name", "is", "Vasya"], stringToUpperCase));

const multiplyByTen = (elem) => elem * 10;

const multiplyItemsByTen = (arr, callback) => {
  return arr
    .map((item) => {
      return callback(item);
    })
    .join(" , ");
};

console.log(multiplyItemsByTen([10, 20, 30], multiplyByTen));

const userDataToString = (item) => `${item.name} is ${item.age}`;

const usersListDataToString = (arr, callback) => {
  return arr
    .map((elem) => {
      return callback(elem);
    })
    .join(" , ");
};

console.log(
  usersListDataToString(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    userDataToString
  )
);

const stringReverse = (item) => item.split("").reverse().join("");

const arrayItemsRevers = (arr, callback) => {
  return arr
    .map((elem) => {
      return callback(elem);
    })
    .join(" , ");
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
    return this.price - (this.price / 100) * parseInt(this.discount);
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
const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});

// 5.1
const minus = (first = 0) => (second = 0) => first - second;

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
const module = (function () {
  let string = "";

  return {
    setString: function (str) {
      if (typeof str === "number" && !isNaN(str)) {
        string = String(str);
        return;
      }
      string = str || "";
    },
    getString: function () {
      return string;
    },

    getStringLength: function () {
      return string.length;
    },

    getReverseString: function () {
      return string.split("").reverse().join("");
    },
  };
})();

module.setString("abcde");
module.getString(); // 'abcde'
module.getStringLength(); // 5\\

// 5.4
const calculator = (function () {
  let result = 0;

  return {
    setValue: function (num) {
      result = num;
      return this;
    },
    plus: function (num) {
      result += num;
      return this;
    },
    minus: function (num) {
      result -= num;
      return this;
    },
    multiply: function (num) {
      result *= num;
      return this;
    },
    divide: function (num) {
      result /= num;
      return this;
    },
    power: function (num) {
      result = Math.pow(result, num);
      return this;
    },
    getResult: function () {
      return result;
    },
  };
})();

calculator.setValue(10).plus(5).multiply(2).getResult();

// 6.
const sum = (first) => (second) => (third) => first + second + third;

sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
