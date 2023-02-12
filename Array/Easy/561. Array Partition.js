let arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

// T.C : O(n log n)
// S.C : O(log n)

// link :- https://leetcode.com/problems/array-partition/
