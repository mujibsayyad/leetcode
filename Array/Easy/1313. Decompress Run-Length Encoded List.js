// 1
let decompressRLElist = function (nums) {
  let arr = [];

  for (let i = 1; i < nums.length; i += 2) {
    arr.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return arr;

  // T.C : O(n)
  // S.C : O(n)
};

// 2
let decompressRLElistt = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      arr.push(nums[i + 1]);
    }
  }

  return arr;

  // T.C : O(n^2)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/decompress-run-length-encoded-list/
