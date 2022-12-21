let minOperations = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      count += nums[i] - nums[i + 1] + 1;
      nums[i + 1] = nums[i] + 1;
    }
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
