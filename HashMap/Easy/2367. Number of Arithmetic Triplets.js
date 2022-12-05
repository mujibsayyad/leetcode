let arithmeticTriplets = function (nums, diff) {
  let count = 0;
  let map = new Map();

  for (let val of nums) {
    map.set(val, 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] + diff) && map.has(nums[i] + diff * 2)) {
      count++;
    }
  }

  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/number-of-arithmetic-triplets/
