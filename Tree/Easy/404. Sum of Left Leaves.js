let sumOfLeftLeaves = function (root) {
  return rightHelper(root);
};

function leftHelper(node) {
  if (node == null) return 0;
  if (!node.left && !node.right) return node.val;
  return leftHelper(node.left) + rightHelper(node.right);
}

function rightHelper(node) {
  if (node == null) return 0;
  return leftHelper(node.left) + rightHelper(node.right);
}

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sum-of-left-leaves/
