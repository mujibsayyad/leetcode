let distributeCandies = function (candies, num_people) {
  let people = new Array(num_people).fill(0);
  let give = 0;

  while (candies > 0) {
    people[give % num_people] += Math.min(candies, ++give);
    candies -= give;
  }

  return people;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/distribute-candies-to-people/
