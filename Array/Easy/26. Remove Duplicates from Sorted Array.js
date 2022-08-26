let removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

// link :- https://leetcode.com/problems/remove-duplicates-from-sorted-array/
