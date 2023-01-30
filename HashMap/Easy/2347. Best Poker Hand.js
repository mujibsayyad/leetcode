let bestHand = function (ranks, suits) {
  if (suits.every((suit) => suit === suits[0])) return 'Flush';

  let map = new Map();

  for (let val of ranks) {
    map.set(val, map.get(val) + 1 || 1);
  }

  let max = Math.max(...map.values());

  if (max >= 3) return 'Three of a Kind';
  if (max === 2) return 'Pair';
  return 'High Card';
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/best-poker-hand/
