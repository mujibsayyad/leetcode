let areOccurrencesEqual = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  let count = map.get(s[0]);

  for (let val of s) {
    if (map.get(val) !== count) {
      return false;
    }
  }

  return true;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
