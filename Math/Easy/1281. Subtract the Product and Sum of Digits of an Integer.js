let subtractProductAndSum = function (n) {
  let multiplyTotal = 1;
  let sumTotal = 0;
  let stringOfN = n.toString();

  for (let i = 0; i < stringOfN.length; i++) {
    const digit = Number(stringOfN[i]);

    multiplyTotal *= digit;
    sumTotal += digit;
  }

  return multiplyTotal - sumTotal;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
