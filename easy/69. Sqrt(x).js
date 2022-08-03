//1
let mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

//2
const mySqrtt = (x) => {
  let result,
    num = 0;
  while (num * num <= x) {
    result = num;
    num++;
  }
  return result;
};

// link :- https://leetcode.com/problems/sqrtx/
