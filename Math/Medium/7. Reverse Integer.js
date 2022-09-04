let reverse = function (x) {
  let reverse = x.toString().split('').reverse().join('');

  let ans = x < 0 ? parseInt(reverse) * -1 : parseInt(reverse);

  if (ans > 2 ** 31 - 1 || ans < -(2 ** 31)) return 0;

  return ans;

  // T.C: O(N)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/reverse-integer/
