let targetIndices = function (nums, target) {
  let arr = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr.push(i);
    }
  }

  return arr;
};

// T.C: O(n logn n)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-target-indices-after-sorting-array/
