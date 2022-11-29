let greatestLetter = function (s) {
  let map = new Set(s);
  let max = '';

  for (const element of map) {
    let wUpperCase = element.toUpperCase();
    if (
      map.has(element.toLowerCase()) &&
      map.has(wUpperCase) &&
      wUpperCase > max
    ) {
      max = wUpperCase;
    }
  }

  return max;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
