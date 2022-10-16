let invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/binary-tree-inorder-traversal/
