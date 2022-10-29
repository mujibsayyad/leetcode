let isSymmetric = function (root) {
  if (!root) return true;

  return dfs(root.left, root.right);
};

function dfs(left, right) {
  if (left === null || right === null) {
    return left === right;
  }

  if (left.val !== right.val) {
    return false;
  }

  return dfs(left.left, right.right) && dfs(left.right, right.left);
}

// link :- https://leetcode.com/problems/symmetric-tree/
