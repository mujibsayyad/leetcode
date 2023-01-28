let findLucky = function (arr) {
  let map = new Map();
  let lucky = 0;

  for (let val of arr) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === arr[i]) {
      lucky = Math.max(lucky, arr[i]);
    }
  }

  return lucky ? lucky : -1;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-lucky-integer-in-an-array/
