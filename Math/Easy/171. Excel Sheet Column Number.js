let titleToNumber = function (columnTitle) {
  let total = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    total = total * 26 + columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }

  return total;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/excel-sheet-column-number/
