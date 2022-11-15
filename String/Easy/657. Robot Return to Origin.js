let judgeCircle = function (moves) {
  let xCoord = 0;
  let yCoord = 0;

  for (let move of moves) {
    if (move === 'R') xCoord++;
    else if (move === 'L') xCoord--;
    else if (move === 'U') yCoord++;
    else if (move === 'D') yCoord--;
  }
  return xCoord === 0 && yCoord === 0;
};

// link :- https://leetcode.com/problems/robot-return-to-origin/
