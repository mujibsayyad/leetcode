//1
let searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else if (!nums.includes(target)) {
    nums.push(target);
  }

  nums.sort((a, b) => a - b);

  return nums.indexOf(target);

  // T.C - O(n)
};

// link :- https://leetcode.com/problems/search-insert-position/
