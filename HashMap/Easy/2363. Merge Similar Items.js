let mergeSimilarItems = function (items1, items2) {
  let map = new Map();

  for (const [value, weight] of items1) {
    if (map.has(value)) {
      map.set(value, map.get(value) + weight);
    } else {
      map.set(value, weight);
    }
  }

  for (const [value, weight] of items2) {
    if (map.has(value)) {
      map.set(value, map.get(value) + weight);
    } else {
      map.set(value, weight);
    }
  }

  const ret = Array.from(map.entries(), ([value, weight]) => [value, weight]);

  ret.sort((a, b) => a[0] - b[0]);

  return ret;
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/merge-similar-items/
