let maxDepth = function (root) {
  let maxDepth = 0;

  function traverse(root, depth) {
    if (!root) {
      maxDepth = Math.max(depth, maxDepth);
      return;
    }
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  }
  traverse(root, 0);

  return maxDepth;

  // Time Complexity: O(n)
  // Space Complexity: O(n), in the worst case; in case of a skewed tree
};

// link :- https://leetcode.com/problems/maximum-depth-of-binary-tree/
