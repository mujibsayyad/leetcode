let countWords = function (words1, words2) {
  let count = 0;
  let map = new Map();
  let map2 = new Map();

  for (let val of words1) {
    map.set(val, map.get(val) + 1 || 1);
  }
  for (let val of words2) {
    map2.set(val, map2.get(val) + 1 || 1);
  }

  for (let i = 0; i < words2.length; i++) {
    if (map2.get(words2[i]) === 1 && map.get(words2[i]) === 1) {
      count++;
    }
  }

  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/count-common-words-with-one-occurrence/
