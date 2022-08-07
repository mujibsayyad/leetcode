//1
let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
  // T.C = O(n^2)
  // S.C = O(1)
};

// 2
var removeElementt = function (nums, val) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[c++] = nums[i];
    }
  }
  return c;
  // T.C = O(n)
  // S.C = O(1)
};

// link :- https://leetcode.com/problems/remove-element/
