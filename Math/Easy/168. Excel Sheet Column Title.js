let convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber) {
    result = String.fromCharCode(((columnNumber - 1) % 26) + 97) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result.toUpperCase();

  // T.C: O(n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/excel-sheet-column-title/
