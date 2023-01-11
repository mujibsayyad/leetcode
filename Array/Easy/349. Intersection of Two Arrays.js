let intersection = function (nums1, nums2) {
  let arr = [];
  let map = new Map();

  for (let val of nums1) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      arr.push(nums2[i]);
    }
  }

  return [...new Set(arr)];
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/intersection-of-two-arrays/
