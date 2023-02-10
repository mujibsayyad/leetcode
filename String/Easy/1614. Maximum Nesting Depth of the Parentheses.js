let maxDepth = function (s) {
  let depth = 0;
  let maxDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      depth++;
    } else if (s[i] == ')') {
      depth--;
    }
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
