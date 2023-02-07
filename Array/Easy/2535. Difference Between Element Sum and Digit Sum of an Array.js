let differenceOfSum = function (nums) {
  let eSum = 0;
  let dSum = 0;
  let joinNums = nums.join('').split('');

  for (let i = 0; i < Math.max(nums.length, joinNums.length); i++) {
    if (nums[i] !== undefined) eSum += nums[i];
    dSum += Number(joinNums[i]);
  }

  return Math.abs(eSum - dSum);
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
