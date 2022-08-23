// ITERATIVE SOLUTION

let inorderTraversal = function (root) {
  if (!root) return [];

  let stack = [];
  let data = [];
  let curr = root;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      data.push(curr.val);
      curr = curr.right;
    }
  }
  return data;
};

// RECURSIVE SOLUTION

let inorderTraversall = function (root) {
  if (!root) return [];

  let data = [];

  function DFS(node) {
    if (node.left) DFS(node.left);
    data.push(node.val);
    if (node.right) DFS(node.right);
  }
  DFS(root);

  return data;
};

// link :- https://leetcode.com/problems/binary-tree-inorder-traversal/
