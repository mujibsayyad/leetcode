let findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] > 9 && nums[i] < 100) ||
      (nums[i] > 999 && nums[i] < 10000) ||
      nums[i] === 100000
    )
      count++;
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
