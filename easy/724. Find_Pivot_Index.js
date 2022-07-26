let pivotIndex = function (nums) {
  let sumOfLeft = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    sumOfLeft += nums[i];
    if (sumOfLeft === sum - sumOfLeft + nums[i]) {
      return i;
    }
  }
  return -1;
};

// link :- https://leetcode.com/problems/find-pivot-index/
