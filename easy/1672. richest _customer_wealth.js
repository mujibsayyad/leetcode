let maximumWealth = function (accounts) {
  let acc = accounts.map((value) => value.reduce((acc, curr) => acc + curr, 0));
  return Math.max(...acc);
};

// link :- https://leetcode.com/problems/richest-customer-wealth/
