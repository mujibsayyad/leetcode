let checkIfPangram = function (sentence) {
  if (sentence.length < 25) return false;
  let map = new Map();

  for (let val of sentence) {
    map.set(val, map.get(val) + 1 || 1);
  }

  if (map.size < 26) return false;

  return true;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/check-if-the-sentence-is-pangram/
