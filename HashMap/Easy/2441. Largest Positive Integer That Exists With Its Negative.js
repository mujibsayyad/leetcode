let findMaxK = function (nums) {
  let arr = [];
  let map = new Map();

  for (let val of nums) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let val of nums) {
    if ((map.has(val) && map.has(-val))) {
      arr.push(val);
    }
  }

  if (arr.length < 1) return -1;
  return Math.max(...arr);
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
