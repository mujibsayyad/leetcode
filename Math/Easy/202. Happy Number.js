// 1
let isHappy = function (n) {
  if (n < 10) {
    if (n === 1 || n === 7) {
      return true;
    }
    return false;
  }

  let total = 0;

  while (n > 0) {
    let sq = n % 10;

    total += sq ** 2;
    n -= sq;
    n /= 10;
  }

  if (total === 1) {
    return true;
  }

  return isHappy(total);
};

// 2
let isHappyy = function (n) {
  let num = n;
  const calculatedNumbers = new Set();

  while (num !== 1) {
    //convert number to array. ex: 19 -> [1, 9]
    const arr = Array.from(String(num), Number);

    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue ** 2;

    //replace the number by the sum of the squares of its digits
    num = arr.reduce(reducer, 0);

    // check if number previously added to the Set
    if (calculatedNumbers.has(num)) {
      return false;
    }

    //add calculated result to set
    calculatedNumbers.add(num);
  }

  return true;
};

// link :- https://leetcode.com/problems/happy-number/
