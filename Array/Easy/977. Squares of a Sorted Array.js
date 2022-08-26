let sortedSquares = function (nums) {
  let sqr = [];

  for (let i = 0; i < nums.length; i++) {
    sqr.push(nums[i] * nums[i]);
  }

  return sqr.sort((a, b) => a - b);
};

// link :- https://leetcode.com/problems/squares-of-a-sorted-array/
