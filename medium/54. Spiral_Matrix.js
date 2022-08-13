let spiralOrder = function (matrix) {
  let top = 0,
    left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let size = matrix.length * matrix[0].length;
  let arr = [];

  while (arr.length < size) {
    for (let i = left; i <= right && arr.length < size; i++) {
      arr.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && arr.length < size; i++) {
      arr.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && arr.length < size; i--) {
      arr.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && arr.length < size; i--) {
      arr.push(matrix[i][left]);
    }
    left++;
  }

  return arr;

  //   T.C : O(n)
  //   S.C : O(n)
};

// link :- https://leetcode.com/problems/spiral-matrix/
