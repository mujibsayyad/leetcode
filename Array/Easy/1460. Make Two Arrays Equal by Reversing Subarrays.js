let canBeEqual = function (target, arr) {
  let map = new Map();

  for (let val of target) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < target.length; i++) {
    if (!map.has(arr[i])) {
      return false;
    } else if (map.get(arr[i]) > 1) {
      map.set(arr[i], map.get(arr[i]) - 1);
    } else {
      map.delete(arr[i]);
    }
  }

  return true;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
