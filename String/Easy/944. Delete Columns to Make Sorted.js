let minDeletionSize = function (strs) {
  let count = 0;

  // loop through columns
  for (let c = 0; c < strs[0].length; c++) {
    // loop through rows
    for (let r = 1; r < strs.length; r++) {
      // check if current column is unsorted
      if (strs[r][c] < strs[r - 1][c]) {
        count++;
        break;
      }
    }
  }

  return count;
};

// T.C : O(n^2)
// S.C : O(1)

// link :- https://leetcode.com/problems/delete-columns-to-make-sorted/
