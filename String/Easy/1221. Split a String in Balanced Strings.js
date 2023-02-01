let balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    balance += s[i] == 'L' ? 1 : -1;
    if (balance == 0) count++;
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/split-a-string-in-balanced-strings/
