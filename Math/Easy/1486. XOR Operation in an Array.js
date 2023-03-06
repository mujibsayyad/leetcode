let xorOperation = function (n, start) {
  let xor = start;

  for (let i = 1; i < n; i++) {
    let num = start + 2 * i;
    xor = xor ^ num;
  }

  return xor;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/xor-operation-in-an-array/
