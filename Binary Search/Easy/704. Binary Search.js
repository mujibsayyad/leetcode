const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = ((left + right) / 2) | 0;

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;

  // T.C: O(log n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/binary-search/
