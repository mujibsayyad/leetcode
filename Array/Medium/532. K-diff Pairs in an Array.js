let findPairs = function (nums, k) {
  let result = 0;
  let map = new Map();

  for (num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }

  for (entry of map) {
    let key = entry[0];
    let value = entry[1];

    if (k > 0 && map.get(key + k)) {
      result++;
    } else if (k == 0 && value > 1) {
      result++;
    }
  }

  return result;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/k-diff-pairs-in-an-array/