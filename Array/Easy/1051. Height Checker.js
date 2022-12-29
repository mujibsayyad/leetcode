let heightChecker = function (heights) {
  let heightsCopy = [...heights];
  let sortHeights = heights.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heightsCopy[i] !== sortHeights[i]) count++;
  }

  return count;
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/height-checker/
