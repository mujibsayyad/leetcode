let sumZero = function (n) {
  let res = [];

  if (n % 2 !== 0) {
    res.push(0);
  }

  for (let i = 1; i <= n / 2; i++) {
    res.push(i, -i);
  }

  return res;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
