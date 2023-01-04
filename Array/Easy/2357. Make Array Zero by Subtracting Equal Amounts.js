let minimumOperations = function (nums) {
  let filterZero = nums.filter((val) => val !== 0);

  return new Set([...filterZero]).size;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
