let createTargetArray = function (nums, index) {
  const output = [];

  for (let i = 0; i < index.length; i++) {
    output.splice(index[i], 0, nums[i]);
  }

  return output;

  // T.C : O(n^2)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/create-target-array-in-the-given-order/
