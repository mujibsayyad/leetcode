let rangeSumBST = function (root, low, high) {
  let total = 0;

  let dfs = (root) => {
    if (!root) return;

    if (root.val >= low && root.val <= high) {
      total += root.val;
    }

    if (low < root.val) dfs(root.left);
    if (high > root.val) dfs(root.right);
  };

  dfs(root);

  return total;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/range-sum-of-bst/
