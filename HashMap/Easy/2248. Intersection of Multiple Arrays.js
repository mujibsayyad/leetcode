let intersection = function (nums) {
  let map = new Map();
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      map.set(nums[i][j], map.get(nums[i][j]) + 1 || 1);
    }
  }

  for (let [key, val] of map) {
    if (val === nums.length) {
      arr.push(key);
    }
  }

  return arr.sort((a, b) => a - b);
};

// T.C: O(n)
// S.C: O(n^2)

// link :- https://leetcode.com/problems/intersection-of-multiple-arrays/
