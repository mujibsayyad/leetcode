let countEven = function (num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    let digitSum = 0;
    let n = i;

    while (n > 0) {
      digitSum += n % 10;
      n = Math.floor(n / 10);
    }

    if (digitSum % 2 === 0) {
      count++;
    }
  }

  return count;
};

// T.C: O(n^2)
// S.C: O(1)

// link :- https://leetcode.com/problems/count-integers-with-even-digit-sum/
