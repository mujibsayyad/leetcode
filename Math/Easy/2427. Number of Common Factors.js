let commonFactors = function (a, b) {
  let count = 0;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/number-of-common-factors/
