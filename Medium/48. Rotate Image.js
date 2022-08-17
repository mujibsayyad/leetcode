let rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/rotate-image/
