let alternateDigitSum = function (n) {
  let total = 0;
  let string = n.toString();

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      total += Number(string[i]);
    } else {
      total -= Number(string[i]);
    }
  }

  return total;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/alternating-digit-sum/
