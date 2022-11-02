let kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};

// link :- https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
