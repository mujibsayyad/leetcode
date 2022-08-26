// 1
let singleNumber = function (nums) {
  if (nums.length === 1) return nums;

  let a = 0;
  let b = 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[a] === nums[b]) {
      a = b + 1;
      b = b + 2;
    } else {
      return nums[a];
    }
  }

  // T.C : O(n)
  // S.C : O(1)
};

// 2
let singleNumberr = function (nums) {
  return nums.reduce((accum, elem) => accum ^ elem, 0);
};

// link :- https://leetcode.com/problems/single-number/
