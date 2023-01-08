let smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) return i;
  }

  return -1;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/smallest-index-with-equal-value/
