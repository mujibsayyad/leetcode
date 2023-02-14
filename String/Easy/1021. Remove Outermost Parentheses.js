let removeOuterParentheses = function (s) {
  let result = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      count++;
      if (count > 1) {
        result += '(';
      }
    } else {
      count--;
      if (count > 0) {
        result += ')';
      }
    }
  }
  return result;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/remove-outermost-parentheses/
