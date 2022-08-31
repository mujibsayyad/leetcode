let maxAreaOfIsland = function (grid) {
  if (grid.length == 0) return 0;

  let area = 0;
  let length = grid.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        area = Math.max(area, dfs(i, j, grid));
      }
    }
  }

  return area;
};

let dfs = function (i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  )
    return 0;

  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let count = 1;
  grid[i][j] = 0;

  for (let dir of DIRECTIONS) {
    count += dfs(i + dir[0], j + dir[1], grid);
  }

  return count;
};

// Time Complexity: O(m*n), we possibly visit all nodes
// Space Complexity: O(m*n), call stack can go as deep as the # of nodes

// link :- https://leetcode.com/problems/max-area-of-island/
