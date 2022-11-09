let repeatedCharacter = function (s) {
  let map = new Map();

  for (let val of s) {
    if (map.has(val)) {
      return val;
    } else {
      map.set(val, map.get(val) + 1 || 1);
    }
  }
};

// link :- https://leetcode.com/problems/first-letter-to-appear-twice/
