let findSubarrays = function (nums) {
  const map = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] + nums[i + 1])) {
      return true;
    }
    map.add(nums[i] + nums[i + 1]);
  }

  return false;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-subarrays-with-equal-sum/
