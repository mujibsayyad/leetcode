let reverseString = function (s) {
  let len = s.length - 1;

  for (let i = 0; i < len; i++) {
    [s[i], s[len]] = [s[len], s[i]];
    len--;
  }

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/reverse-string/
