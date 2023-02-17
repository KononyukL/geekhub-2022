//2.
const stringToUpperCase = (item: string): string => {
  return item.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

const arrayToCamelCase = (arr: string[], callback: (item: string) => string): string => {
  return arr
    .map((elem) => {
      return callback(elem);
    })
    .join("");
};

console.log(arrayToCamelCase(["my", "name", "is", "Vasya"], stringToUpperCase));

const multiplyByTen = (elem: number): number => elem * 10;

const multiplyItemsByTen = (arr: number[], callback: (item: number) => number): string => {
  return arr
    .map((item) => {
      return callback(item);
    })
    .join(" , ");
};

console.log(multiplyItemsByTen([10, 20, 30], multiplyByTen));

interface IUserData {
  age: number;
  name: string
}

const userDataToString = (item: IUserData): string => `${item.name} is ${item.age}`;

const usersListDataToString = (arr: IUserData[] , callback: (item: IUserData ) => string): string => {
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

const stringReverse = (item: string): string => item.split("").reverse().join("");

const arrayItemsRevers = (arr: string[], callback: (item: string) => string): string => {
  return arr
    .map((elem) => {
      return callback(elem);
    })
    .join(" , ");
};

console.log(arrayItemsRevers(["abc", "123"], stringReverse));

// 3. this
// 3.1.
interface IRectangle {
  width: number;
  height: number;
  getSquare(): number
}

const rectangle: IRectangle = {
  width: 7,
  height: 5,
  getSquare() {
    return this.width * this.height;
  },
};
interface IPrice {
  price: number;
  discount: string;
  getPrice(): number;
  getPriceWithDiscount(): number
}

//3.2.
const price: IPrice = {
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
interface INumerator {
  value: number;
  double(): this;
  plusOne(): this;
  minusOne(): this
}


const numerator: INumerator = {
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
interface IElement {
  height: number
  getHeight(): number
}
const element: IElement = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
const getElementHeight = element.getHeight.bind(element);
getElementHeight();

//4.
interface IConvertToObjectResult {
  value: number;
  isOdd: boolean,
}
const convertToObject = (num: number): IConvertToObjectResult => ({
  value: num,
  isOdd: Boolean(num % 2),
});

// 5.1
const minus = (first: number = 0) => (second: number = 0): number => first - second;

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

// 5.2
function multiplyMaker(num: number): (multiplyNun: number) => number {
  let result = num;

  return (multiplyNun: number): number => {
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
type TModule = {
  setString: (str: (number | string)) => void;
  getString: () => string;
  getStringLength: () => number;
  getReverseString: () => string
}

const module = (function (): TModule {
  let string: string = "";

  return {
    setString: function (str: number | string) {
      if (typeof str === "number") {
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
interface ICalculator {
  setValue: (num: number) => this;
  plus: (num: number) => this;
  minus: (num: number) => this;
  multiply: (num: number) => this;
  divide: (num: number) => this;
  power: (num: number) => this;
  getResult: () => number
}


const calculator = (function (): ICalculator {
  let result = 0;

  return {
    setValue: function (num: number) {
      result = num;
      return this;
    },
    plus: function (num: number) {
      result += num;
      return this;
    },
    minus: function (num: number) {
      result -= num;
      return this;
    },
    multiply: function (num: number) {
      result *= num;
      return this;
    },
    divide: function (num: number) {
      result /= num;
      return this;
    },
    power: function (num: number) {
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
const sum = (first: number) => (second: number) => (third: number): number => first + second + third;

sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
