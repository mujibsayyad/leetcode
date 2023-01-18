let relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  let arr = [];

  let totalValue = 0;
  let j = 0;
  let totalLength = arr1.length + arr2.length;

  for (let val of arr1) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < totalLength; i++) {
    if (map.has(arr2[j])) {
      let countValue = map.get(arr2[j]);
      totalValue = countValue;

      if (totalValue >= 1) {
        arr.push(arr2[j]);
        map.set(arr2[j], map.get(arr2[j]) - 1);
      } else {
        map.delete(arr2[j]);
        j++;
      }
    }
  }

  j = 0;
  totalValue = 0;
  let remaining = [];

  let total = [...map.values()].reduce((acc, val) => acc + val, 0);
  let keys = [...map.keys()];

  for (let i = 0; i < total; i++) {
    if (map.has(keys[j])) {
      let countValue = map.get(keys[j]);
      totalValue = countValue;

      if (totalValue > 1) {
        remaining.push(keys[j]);
        map.set(keys[j], map.get(keys[j]) - 1);
      } else {
        remaining.push(keys[j]);
        map.delete(keys[j]);
        j++;
      }
    }
  }

  let sort = remaining.sort((a, b) => a - b);
  return arr.concat(sort);
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/relative-sort-array/
