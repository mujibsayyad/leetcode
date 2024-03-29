let minTimeToVisitAllPoints = function (points) {
  let s = 0;

  for (let i = 1; i < points.length; i++) {
    let [x0, y0] = points[i - 1];
    let [x1, y1] = points[i];
    s += Math.max(Math.abs(x0 - x1), Math.abs(y0 - y1));
  }

  return s;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/minimum-time-visiting-all-points/
