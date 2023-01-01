let uniqueOccurrences = function (arr) {
  let map = new Map();

  for (let val of arr) {
    map.set(val, map.get(val) + 1 || 1);
  }

  let valuesOfMap = Array.from(map.values());
  let checkDuplicates = new Set(valuesOfMap);

  return valuesOfMap.length === checkDuplicates.size;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/unique-number-of-occurrences/
