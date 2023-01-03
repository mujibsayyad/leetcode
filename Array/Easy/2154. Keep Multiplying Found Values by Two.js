let findFinalValue = function (nums, original) {
  let count = original;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      count = original * 2;
      original = count;
    }
  }

  return count;
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/keep-multiplying-found-values-by-two/
