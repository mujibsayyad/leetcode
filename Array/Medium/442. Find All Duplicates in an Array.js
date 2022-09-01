let findDuplicates = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) {
      arr.push(Math.abs(nums[i]));
    } else {
      nums[idx] = -nums[idx];
    }
  }

  return arr;
};

// T.C : O(n)
// S.C : O(1)

//   link :- https://leetcode.com/problems/find-all-duplicates-in-an-array/