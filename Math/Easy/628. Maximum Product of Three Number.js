let maximumProduct = function (nums) {
  let length = nums.length;

  nums.sort((a, b) => a - b);

  let first = nums[0] * nums[1] * nums[length - 1];

  let second = nums[length - 1] * nums[length - 2] * nums[length - 3];

  return Math.max(first, second);

  // T.C: O(nlogn)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/maximum-product-of-three-numbers/
