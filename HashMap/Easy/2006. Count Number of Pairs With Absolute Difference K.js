// 1
let countKDifference = function (nums, k) {
  let map = new Map();
  let count = 0;

  for (let val of nums) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] - k)) {
      count += map.get(nums[i] - k);
    }
  }
  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// 2
let countKDifferencee = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) === k) {
        count++;
      }
    }
  }

  return count;

  // T.C : O(n^2)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
