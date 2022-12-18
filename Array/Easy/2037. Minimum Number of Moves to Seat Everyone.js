let minMovesToSeat = function (seats, students) {
  let seatsSort = seats.sort((a, b) => a - b);
  let studentsSort = students.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < seats.length; i++) {
    total += Math.abs(seatsSort[i] - studentsSort[i]);
  }

  return total;
};

// T.C: O(n log n)
// S.C: O(1)

// link :- https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
