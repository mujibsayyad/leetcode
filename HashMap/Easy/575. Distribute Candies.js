let distributeCandies = function (candyType) {
  let kinds = [...new Set(candyType)];
  console.log(kinds);

  return Math.min(candyType.length / 2, kinds.length);
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/distribute-candies/
