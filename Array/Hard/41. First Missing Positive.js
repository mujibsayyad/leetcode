// 1

let firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1;

    if (i === idx || nums[i] === nums[idx]) continue;

    if (idx >= 0 && idx <= nums.length - 1) {
      //swap
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      // decrement by 1 to recheck, is it sorted by index or not;
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 === nums[i]) continue;
    else return i + 1;
  }

  return nums.length + 1;

  // T.C: O(n)
  // S.C: O(1)
};

// 2

let firstMissingPositivee = function (nums) {
  let map = new Map();

  for (let val of nums) {
    if (val <= 0) continue;
    else {
      map.set(val, map.get(val) + 1 || 1);
    }
  }

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/first-missing-positive/
