//Отримати число pi з Math і округлити його до 2 знаків після крапки
let result = Math.PI.toFixed(2);
console.log(result);

//Перевірити результат обчислення 0.6 + 0.7 – як привести до нормального вигляду (1.3)?
const sum = (num1, num2) => {
    let res = num1 + num2;
    return Math.ceil(res * 100) / 100;
};
console.log(sum(0.6, 0.7));

//Отримати число з рядка ‘100$’
const num = parseInt("100$");
console.log(num);

// Є стрінга const str = “some test string”, потрібно:
//Отримати першу й останню букви стрінги.
const str = "some test string";
const firstLastLetters = str[0] + str.slice(-1);
console.log(firstLastLetters);

//Зробити першу й останню букву великими
const uppercaseFirstLastLetters =
    str[0].toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
console.log(uppercaseFirstLastLetters);

//Знайти позицію другого пробілу
const positionSecondSpace = str.indexOf(" ", str.indexOf(" ") + 1);
console.log(positionSecondSpace);

//Отримати нову стрінгу без останніх 6 символів
const newStr = str.slice(0, -6);
console.log(newStr);

//В першому підʼїзді квартири 1 -20, в другому 21 - 40, в третьому 41-60. Створити функцію, в яку можна передати номер квартири і при виклику якої буде повертатись номер підʼїзда.
const getEntranceNumber = (num) => {
    if (num >= 1 && num <= 20) {
        return "№1";
    }
    if (num >= 21 && num <= 40) {
        return "№2";
    }
    if (num >= 41 && num <= 60) {
        return "№3";
    }
    return "Такого підʼїзду немає";
};

console.log(getEntranceNumber(2));
