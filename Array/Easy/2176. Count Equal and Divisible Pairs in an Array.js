let countPairs = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }

  return count;

  // T.C : O(n^2)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
