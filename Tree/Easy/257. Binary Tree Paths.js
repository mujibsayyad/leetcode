let binaryTreePaths = function (root) {
  if (!root) return [];
  let arr = [];

  let dfs = (node, currentPath) => {
    currentPath += node.val;

    if (!node.left && !node.right) {
      arr.push(currentPath);
    }

    if (node.left) {
      dfs(node.left, currentPath + '->');
    }

    if (node.right) {
      dfs(node.right, currentPath + '->');
    }
  };
  dfs(root, '');

  return arr;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/binary-tree-paths/
