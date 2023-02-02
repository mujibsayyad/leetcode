let squareIsWhite = function (coordinates) {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
};

// T.C: O(1)
// S.C: O(1)

// link :- https://leetcode.com/problems/determine-color-of-a-chessboard-square/
