let totalMoney = function (n) {
  let m = Math.floor(n / 7);
  let res = 0;

  for (let i = 1; i <= m; i++) {
    res += 7 * (i + 3);
  }

  for (let i = 7 * m; i < n; i++) {
    res += ++m;
  }

  return res;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/calculate-money-in-leetcode-bank/
