let repeatedNTimes = function (nums) {
  let map = new Map();

  for (let val of nums) {
    if (!map.has(val)) map.set(val, 1);
    else return val;
  }
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
