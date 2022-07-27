// T.C = O(n), S.C = O(1)
let majorityElement = function (nums) {
  let element = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === element) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      element = nums[i];
      count = 1;
    }
  }
  return element;
};

// T.C = O(n), S.C = O(n)
var majorityElementt = function (nums) {
  let m = new Map();
  let halfLen = Math.floor(nums.length / 2);

  for (let num of nums) {
    m.set(num, m.get(num) + 1 || 1);
    console.log(m);
    if (m.get(num) > halfLen) return num;
  }
  return false;
};

// link:- https://leetcode.com/problems/majority-element/
