let unequalTriplets = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++)
      if (nums[i] !== nums[j]) {
        for (let k = j + 1; k < nums.length; k++)
          if (nums[i] !== nums[k] && nums[j] !== nums[k]) {
            count++;
          }
      }
  }
  return count;
};

// T.C: O(n^3)
// S.C: O(1)

// link :- https://leetcode.com/problems/number-of-unequal-triplets-in-array/
