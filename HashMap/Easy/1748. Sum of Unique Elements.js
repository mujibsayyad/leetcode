let sumOfUnique = function (nums) {
  let map = new Map();
  let count = 0;

  for (let val of nums) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) {
      count += nums[i];
    }
  }

  return count;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/sum-of-unique-elements/
