let sortArrayByParityII = function (nums) {
  let len = nums.length;
  let i = 0;
  let j = len - 1;

  while (i < len && j >= 0) {
    if (nums[i] % 2 === 0) i += 2;
    else if (nums[j] % 2 === 1) j -= 2;
    else [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  return nums;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/sort-array-by-parity-ii/
