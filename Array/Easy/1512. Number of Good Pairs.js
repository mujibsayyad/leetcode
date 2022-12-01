// 1
let numIdenticalPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }

  return count;

  // T.C : O(n^2)
  // S.C : O(1)
};

// 2
let numIdenticalPairss = function (nums) {
  const map = {};
  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }
  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/number-of-good-pairs/
