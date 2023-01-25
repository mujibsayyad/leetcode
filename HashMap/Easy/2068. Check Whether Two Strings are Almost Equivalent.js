let checkAlmostEquivalent = function (word1, word2) {
  let map = new Map();
  let map2 = new Map();

  let fullString = word1.concat(word2);
  let dup = [...new Set(fullString)];

  for (let val of word1) {
    map.set(val, map.get(val) + 1 || 1);
  }
  for (let val of word2) {
    map2.set(val, map2.get(val) + 1 || 1);
  }

  for (let i = 0; i < dup.length; i++) {
    if (map.has(dup[i]) && map2.has(dup[i])) {
      let diff1 = map.get(dup[i]);
      let diff2 = map2.get(dup[i]);

      if (Math.abs(diff1 - diff2) > 3) {
        return false;
      }
    } else if (map.has(dup[i]) && map.get(dup[i]) > 3) return false;
    else if (map2.has(dup[i]) && map2.get(dup[i]) > 3) return false;
  }

  return true;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
