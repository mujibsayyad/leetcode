let checkDistances = function (s, distance) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      if (i - map.get(char) - 1 !== distance[s.charCodeAt(i) - 97])
        return false;
    } else {
      map.set(char, i);
    }
  }

  return true;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/check-distances-between-same-letters/
