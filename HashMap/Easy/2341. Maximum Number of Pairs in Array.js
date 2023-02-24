let numberOfPairs = function (nums) {
  let count = 0;
  let map = new Map();

  for (let val of nums) {
    if (map.has(val)) {
      map.delete(val);
      count++;
    } else {
      map.set(val, 1);
    }
  }

  return [count, map.size];
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/maximum-number-of-pairs-in-array/
