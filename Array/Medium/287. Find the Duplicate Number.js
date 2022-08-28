// 1

let findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    if (nums[i] === nums[j]) {
      return nums[i];
    }
  }
};

// 2

let findDuplicatee = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let abs = Math.abs(nums[i]);

    if (nums[abs] < 0) return abs;
    else nums[abs] *= -1;
  }
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/find-the-duplicate-number/
