// 1
let isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  return (n & (n - 1)) === 0;

  // T.C: O(1)
  // S.C: O(1)
};

// 2
let isPowerOfTwoo = function (n) {
  if (n == 0) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;

  // T.C: O(logn)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/power-of-two/
