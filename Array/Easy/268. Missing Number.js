let missingNumber = function (nums) {
  return nums.reduce((acc, cur, index) => acc + index + 1 - cur, 0);
};

// link :- https://leetcode.com/problems/missing-number/
