let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();

  for (let val of s) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if (map.get(t[i]) > 1) {
        map.set(t[i], map.get(t[i]) - 1);
      } else {
        map.delete(t[i]);
      }
    } else {
      return false;
    }
  }

  return true;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/valid-anagram/
