let productExceptSelf = function (nums) {
  let productFromLeft = 1;
  let productFromRight = 1;

  let answer = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    answer[i] = productFromLeft;
    productFromLeft *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= productFromRight;
    productFromRight *= nums[i];
  }

  return answer;
};

// link :- https://leetcode.com/problems/product-of-array-except-self/
