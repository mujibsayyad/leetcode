// 1
let containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) return true;

    map.set(nums[i], 1);
  }

  return false;

  // T.C : O(n)
  // S.C : O(n)
};

// 2
let containsDuplicatee = function (nums) {
  return nums.length !== new Set(nums).size;
};

// link :- https://leetcode.com/problems/contains-duplicate/
