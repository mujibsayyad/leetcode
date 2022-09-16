let minMoves = function (nums) {
  let moves = 0;
  let min = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min) {
      moves = moves + nums[i] - min;
    }
  }

  return moves;

  // T.C: O(n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
