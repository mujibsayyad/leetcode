let kthDistinct = function (arr, k) {
  let map = new Map();
  let result = [];

  for (let val of arr) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let elem of map) {
    if (elem[1] === 1) result.push(elem[0]);
  }

  return result[k - 1] ? result[k - 1] : '';

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/kth-distinct-string-in-an-array/
