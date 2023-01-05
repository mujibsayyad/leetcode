let sortByBits = function (arr) {
  const tuples = arr.map((x) => [x, x.toString(2).split('1').length - 1]);

  tuples.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  return tuples.map((x) => x[0]);
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
