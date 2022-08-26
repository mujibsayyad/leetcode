const fib = function (n) {
  if (n === 0 || n === 1) return n;

  let x = 0;
  let y = 1;
  let total = null;

  for (let i = 2; i <= n; i++) {
    total = x + y;
    x = y;
    y = total;
  }

  return total;
};

// Recursive
const fib2 = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1 + fib(n - 2));
};

// link :- https://leetcode.com/problems/fibonacci-number/
