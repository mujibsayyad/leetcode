let removeDuplicates = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const cv = s[i];
    const top = stack[stack.length - 1];

    if (cv === top) stack.pop();
    else stack.push(cv);
  }

  return stack.join('');

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
