let countBalls = function (lowLimit, highLimit) {
  const arr = new Array(46).fill(0);
  let n;

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0;
    n = i;

    while (n) {
      sum = sum + (n % 10);
      n = Math.floor(n / 10);
    }
    arr[sum]++;
  }

  return Math.max(...arr);
};

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
