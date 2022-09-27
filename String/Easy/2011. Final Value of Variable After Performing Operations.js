let finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    let val = operations[i];

    if (val === 'X++' || val === '++X') {
      x++;
    } else {
      x--;
    }
  }
  return x;

  // T.C: O(n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
