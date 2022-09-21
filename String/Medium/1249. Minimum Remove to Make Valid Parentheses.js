let minRemoveToMakeValid = function (s) {
  let res = s.split('');
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    const currIdx = stack.pop();
    res[currIdx] = '';
  }

  return res.join('');

  // T.C: O(N)
  // S.C: O(N)
};

// link :- https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
