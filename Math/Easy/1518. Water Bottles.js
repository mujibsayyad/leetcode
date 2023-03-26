let numWaterBottles = function (numBottles, numExchange) {
  let drankBottles = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    let newDrinks = Math.trunc(emptyBottles / numExchange);
    drankBottles += newDrinks;
    emptyBottles = (emptyBottles % numExchange) + newDrinks;
  }

  return drankBottles;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/water-bottles/
