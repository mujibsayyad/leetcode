let findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let x = max;
  let d = 0;

  while (x > 0) {
    if (max % x === 0 && min % x === 0) {
      d = x;
      break;
    }
    x--;
  }

  return d;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/find-greatest-common-divisor-of-array/
