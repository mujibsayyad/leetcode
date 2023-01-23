let uncommonFromSentences = function (s1, s2) {
  let map = new Map();
  let splitS1 = s1.split(' ');
  let splitS2 = s2.split(' ');

  let concat = splitS1.concat(splitS2);

  for (let val of concat) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let val of concat) {
    if (map.get(val) > 1) {
      map.delete(val);
    }
  }

  return [...map.keys()];
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/uncommon-words-from-two-sentences/
