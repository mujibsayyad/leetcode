let pivotInteger = function (n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  for (let i = 1; i <= n; i++) {
    if (total / i === i) {
      return i;
    }
  }

  return -1;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/find-the-pivot-integer/
