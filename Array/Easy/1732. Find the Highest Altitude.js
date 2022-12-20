let largestAltitude = function (gain) {
  let highest = 0;
  let total = 0;

  for (let i = 0; i < gain.length; i++) {
    total += gain[i];
    highest = Math.max(highest, total);
  }

  return highest;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/find-the-highest-altitude/
