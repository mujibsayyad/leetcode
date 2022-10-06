let simplifyPath = function (path) {
  let stack = [];

  let newPath = path.split('/').filter((p) => p && p !== '.');

  newPath.map((p) => (p === '..' ? stack.pop() : stack.push(p)));

  return '/' + stack.join('/');

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/simplify-path/
