let divideArray = function (nums) {
  let map = new Map();

  for (let val of nums) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) % 2 !== 0) {
      return false;
    }
  }

  return true;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/divide-array-into-equal-pairs/
