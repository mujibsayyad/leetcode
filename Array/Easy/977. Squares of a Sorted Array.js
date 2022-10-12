// 1
let sortedSquares = function (nums) {
  let arr = [];
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      arr.push(nums[left] ** 2);
      left++;
    } else {
      arr.push(nums[right] ** 2);
      right--;
    }
  }

  return arr.reverse();

  // T.C: O(n)
  // S.C: O(n)
};

// 2
let sortedSquaress = function (nums) {
  let sqr = [];

  for (let i = 0; i < nums.length; i++) {
    sqr.push(nums[i] * nums[i]);
  }

  return sqr.sort((a, b) => a - b);

  // T.C: O(n log n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/squares-of-a-sorted-array/
