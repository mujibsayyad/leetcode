let countTriples = function (n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const squareRoot = Math.sqrt(i * i + j * j);
      if (Number.isInteger(squareRoot) && squareRoot <= n) count++;
    }
  }

  return count;
};

// T.C: O(n^2)
// S.C: O(1)

// link :- https://leetcode.com/problems/count-square-sum-triples/
