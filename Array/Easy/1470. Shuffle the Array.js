let shuffle = function (nums, n) {
  let a = [];
  let c = n;

  for (let i = 0; i < n; i++) {
    a.push(nums[i], nums[c]);
    c++;
  }
  return a;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/shuffle-the-array/
