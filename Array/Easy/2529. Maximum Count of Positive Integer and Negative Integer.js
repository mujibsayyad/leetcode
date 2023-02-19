let maximumCount = function (nums) {
  let plus = 0;
  let minus = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) plus++;
    if (nums[i] < 0) minus++;
  }

  return Math.max(plus, minus);
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
