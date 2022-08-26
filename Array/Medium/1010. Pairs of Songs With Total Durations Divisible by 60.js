// 1

let numPairsDivisibleBy60 = function (time) {
  let count = 0;

  let map = new Map();

  time = time.map((val) => val % 60);

  for (let val of time) {
    let left = (60 - val) % 60;

    count += map.get(left) || 0;

    map.set(val, map.get(val) + 1 || 1);
  }

  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// 2

let nnumPairsDivisibleBy60 = function (time) {
  let count = 0;

  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      let sum = time[i] + time[j];
      if (sum % 60 === 0) count++;
    }
  }

  return count;

  // T.C : O(n^2)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
