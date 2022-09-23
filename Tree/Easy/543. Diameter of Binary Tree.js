let diameterOfBinaryTree = function (root) {
  let max = 0;

  function traverse(root) {
    if (!root) return 0;

    let leftHeight = traverse(root.left);
    let rightHeight = traverse(root.right);

    max = Math.max(max, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  traverse(root, 0);

  return max;

  // T.C: O(N)
  // S.C: O(N)
};

// link :- https://leetcode.com/problems/diameter-of-binary-tree/
