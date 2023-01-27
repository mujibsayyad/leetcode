let smallestRangeI = function (nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  if (max - min <= 2 * k) return 0;
  return max - min - 2 * k;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/smallest-range-i/
