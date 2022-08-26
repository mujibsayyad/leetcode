let merge = function (intervals) {
  if (intervals.length == 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  let start1 = intervals[0][0];
  let end1 = intervals[0][1];
  const results = [];

  for (let i = 0; i < intervals.length; i++) {
    let start2 = intervals[i][0];
    let end2 = intervals[i][1];

    if (end1 >= start2) {
      end1 = Math.max(end1, end2);
    } else {
      results.push([start1, end1]);
      start1 = start2;
      end1 = end2;
    }
  }

  results.push([start1, end1]);

  return results;
};

// link :- https://leetcode.com/problems/merge-intervals/
