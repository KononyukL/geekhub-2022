//1.  isPrime - Returns true or false, indicating whether the given number is prime.

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

isPrime(0);
isPrime(1);
isPrime(17);
isPrime(10000000000000);

//2. factorial - Returns a number that is the factorial of the given number.

const factorial = (num) => {
  if (num < 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

factorial(0);
factorial(1);
factorial(6);

//3.fib - Returns the nth Fibonacci number.

const fib = (num) => (num <= 1 ? num : fib(num - 1) + fib(num - 2));

fib(0);
fib(1);
fib(10);
fib(20);

//4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted.every((elem, i) => elem === arr[i]);
};

isSorted([]);
isSorted([-Infinity, -5, 0, 3, 9]);
isSorted([3, 9, -3, 10]);

//5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).

const reverse = (str) => str.split("").reverse().join("");

reverse("");
reverse("abcdef");

//6.indexOf - Implement the indexOf function for arrays.

const indexOf = (arr, symb) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === symb) {
      return i;
    }
  }
  return -1;
};

indexOf([1, 2, 3], 1);
indexOf([1, 2, 3], 4);

//7.isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

const isPalindrome = (str) => {
  const newString = str.split(" ").join("").toLowerCase();
  return newString === reverse(newString);
};

isPalindrome("");
isPalindrome("abcdcba");
isPalindrome("abcd");
isPalindrome("A man a plan a canal Panama");

//8.missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
const missing = (arr = []) => {
  let num;
  arr.forEach((_, i) => {
    if (!arr.includes(i + 1)) {
      num = i + 1;
    }
  });
  return num;
};

missing([]);
missing([1, 4, 3]);
missing([2, 3, 4]);
missing([5, 1, 4, 2]);
missing([1, 2, 3, 4]);

//9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
  const arr = [];

  for (let el of str) {
    if (el === "{") {
      arr.push(el);
    } else if (el === "}") {
      if (arr.at(-1) === "{") {
        arr.pop();
      } else {
        arr.push(".");
      }
    }
  }

  return !arr.length;
}

isBalanced("}{");
isBalanced("{{}");
isBalanced("{}{}");
isBalanced("foo { bar { baz } boo }");
isBalanced("foo { bar { baz }");
isBalanced("foo { bar } }");

const spiralMatrix = function (R, C, r0, c0) {
  let rPosition = r0;
  let cPosition = c0;
  const total = R * C;
  const results = [];

  results.push([rPosition, cPosition]);

  const walk = (steps, rStep, cStep) => {
    for (let i = 0; i < steps; i++) {
      rPosition += rStep;
      cPosition += cStep;
      if (rPosition >= 0 && cPosition >= 0 && rPosition < R && cPosition < C) {
        results.push([rPosition, cPosition]);
      }
    }
  };

  let distance = 1;
  let rDirection = 0;
  let cDirection = 1;

  while (results.length < total) {
    walk(distance, rDirection, cDirection);
    let saveDirection = rDirection;
    rDirection = cDirection;
    cDirection = saveDirection;
    walk(distance, rDirection, cDirection);
    saveDirection = -1 * rDirection;
    rDirection = -1 * cDirection;
    cDirection = saveDirection;
    distance++;
  }

  return results;
};

spiralMatrix();
