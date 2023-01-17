let frequencySort = function (nums) {
  let map = new Map();

  for (let val of nums) {
    map.set(val, map.get(val) + 1 || 1);
  }

  nums.sort((a, b) => {
    let freqA = map.get(a);
    let freqB = map.get(b);
    if (freqA !== freqB) {
      return freqA - freqB;
    } else {
      return b - a;
    }
  });

  return nums;
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sort-array-by-increasing-frequency/
