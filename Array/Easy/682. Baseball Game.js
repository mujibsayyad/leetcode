let calPoints = function (operations) {
  let record = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '+') {
      let last1 = +record[record.length - 1];
      let last2 = +record[record.length - 2];
      record.push(Number(last1 + last2));
    } else if (operations[i] === 'D') {
      let add = 2 * record[record.length - 1];
      record.push(add);
    } else if (operations[i] === 'C') {
      record.pop();
    } else {
      record.push(+operations[i]);
    }
  }

  return record.reduce((acc, v) => acc + Number(v), 0);
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/baseball-game/
