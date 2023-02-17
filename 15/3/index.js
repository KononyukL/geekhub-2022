//2.
var stringToUpperCase = function (item) {
    return item.replace(/(^\w{1})|(\s+\w{1})/g, function (letter) { return letter.toUpperCase(); });
};
var arrayToCamelCase = function (arr, callback) {
    return arr
        .map(function (elem) {
        return callback(elem);
    })
        .join("");
};
console.log(arrayToCamelCase(["my", "name", "is", "Vasya"], stringToUpperCase));
var multiplyByTen = function (elem) { return elem * 10; };
var multiplyItemsByTen = function (arr, callback) {
    return arr
        .map(function (item) {
        return callback(item);
    })
        .join(" , ");
};
console.log(multiplyItemsByTen([10, 20, 30], multiplyByTen));
var userDataToString = function (item) { return "".concat(item.name, " is ").concat(item.age); };
var usersListDataToString = function (arr, callback) {
    return arr
        .map(function (elem) {
        return callback(elem);
    })
        .join(" , ");
};
console.log(usersListDataToString([
    { age: 45, name: "Jhon" },
    { age: 20, name: "Aaron" },
], userDataToString));
var stringReverse = function (item) { return item.split("").reverse().join(""); };
var arrayItemsRevers = function (arr, callback) {
    return arr
        .map(function (elem) {
        return callback(elem);
    })
        .join(" , ");
};
console.log(arrayItemsRevers(["abc", "123"], stringReverse));
var rectangle = {
    width: 7,
    height: 5,
    getSquare: function () {
        return this.width * this.height;
    }
};
//3.2.
var price = {
    price: 10,
    discount: "15%",
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price / 100) * parseInt(this.discount);
    }
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
var numerator = {
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
    }
};
numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3
var element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
var getElementHeight = element.getHeight.bind(element);
getElementHeight();
var convertToObject = function (num) { return ({
    value: num,
    isOdd: Boolean(num % 2)
}); };
// 5.1
var minus = function (first) {
    if (first === void 0) { first = 0; }
    return function (second) {
        if (second === void 0) { second = 0; }
        return first - second;
    };
};
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
// 5.2
function multiplyMaker(num) {
    var result = num;
    return function (multiplyNun) {
        result *= multiplyNun;
        return result;
    };
}
var multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
var module = (function () {
    var string = "";
    return {
        setString: function (str) {
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
        }
    };
})();
module.setString("abcde");
module.getString(); // 'abcde'
module.getStringLength(); // 5\\
var calculator = (function () {
    var result = 0;
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
        }
    };
})();
calculator.setValue(10).plus(5).multiply(2).getResult();
// 6.
var sum = function (first) { return function (second) { return function (third) { return first + second + third; }; }; };
sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
