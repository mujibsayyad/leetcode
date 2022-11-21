let getMinimumDifference = (root) => {
  let prev = Infinity;
  let min = Infinity;

  const traverse = (root) => {
    if (root.left) traverse(root.left);

    min = Math.min(min, Math.abs(root.val - prev));
    prev = root.val;

    if (root.right) traverse(root.right);
  };

  traverse(root);
  return min;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/minimum-absolute-difference-in-bst/
