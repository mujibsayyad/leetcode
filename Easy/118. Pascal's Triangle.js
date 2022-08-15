let generate = function (numRows) {
  let arr = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    console.log(row);

    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = arr[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    arr[i] = row;
    console.log(arr);
  }

  return arr;
};

// link :- https://leetcode.com/problems/pascals-triangle/
