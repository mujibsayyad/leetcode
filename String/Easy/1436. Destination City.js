let destCity = function (paths) {
  let start = new Map();
  let end = new Map();

  for (let i = 0; i < paths.length; i++) {
    start.set(paths[i][0], 1);
    end.set(paths[i][1], 1);
  }

  for (let i = 0; i < paths.length; i++) {
    if (!start.has(paths[i][1])) return paths[i][1];
  }

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/destination-city/
