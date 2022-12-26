let busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
