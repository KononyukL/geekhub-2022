const isNumber = (arg) => Number(arg) === arg;

// 1
function multiple() {
  let res; //6
  for (let i = 0; i < arguments.length; i++) {
    if (!res && isNumber(arguments[i])) {
      res = arguments[i]
      continue
    }
    if (isNumber(arguments[i])) {
      res *= arguments[i];
    }
  }
  return res;
}

// 2
const reverseString = (arg) => String(arg).split("").reverse().join("");

// 3
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const guessNumber = (num) => {
  if (!isNumber(num)) {
    return new Error("Please provide a valid number");
  }
  if (num < 0 || num > 10) {
    return new Error("Please provide number in range 0 - 10");
  }
  const random = getRandomInt(1, 10);
  if (random === num) {
    return "You Win!";
  }

  return `You are lose, your number is ${num} , the random number is ${random}`;
};

// 4
const getMinMaxSum = (arr) => {
  let self;

  for (const item of arr) {
    if (isNumber(item)) {
      if (self) {
        if (self.min > item) {
          self.min = item;
        }
        if (self.max < item) {
          self.max = item;
        }
        self.sum += item;
      } else {
        self = {
          min: item,
          max: item,
          sum: item,
        };
      }
    }
  }

  return self;
};

// 5
const getWater = (arr) => {
  let maxLeft = arr[0];
  let maxRight = arr.at(-1);

  let left = 1;
  let right = arr.length - 2;
  let waterNum = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      maxLeft = Math.max(maxLeft, arr[left]);
      waterNum += maxLeft - arr[left];
      left += 1;
    } else {
      maxRight = Math.max(maxRight, arr[right]);
      waterNum += maxRight - arr[right];
      right -= 1;
    }
  }

  return waterNum;
};
