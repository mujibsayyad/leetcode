// 1
let myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 !== 0) return x * myPow(x, n - 1);

  return myPow(x * x, n / 2);

  // T.C: O(log n)
  // S.C: O(log n)
};

// 2
let myPoww = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return pow(x, n);

  function pow(x, n) {
    if (n == 0) {
      return 1.0;
    }
    const half = pow(x, parseInt(n / 2));
    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }
  // T.C: O(log n)
  // S.C: O(log n)
};

// 3
let myPowww = function (x, n) {
  return x ** n;
};

// link :- https://leetcode.com/problems/powx-n/
