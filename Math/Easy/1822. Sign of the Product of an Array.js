let arraySign = function (nums) {
  let ans = 1;

  for (i of nums) {
    if (i === 0) {
      return 0;
    }
    if (i < 0) {
      ans = -ans;
    }
  }

  return ans;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/sign-of-the-product-of-an-array/
