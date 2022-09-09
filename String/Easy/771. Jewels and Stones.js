let numJewelsInStones = function (jewels, stones) {
  let map = new Map();
  let count = 0;

  for (let val of stones) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < jewels.length; i++) {
    if (map.has(jewels[i])) {
      count = count + map.get(jewels[i]);
    }
  }

  return count;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/jewels-and-stones/
