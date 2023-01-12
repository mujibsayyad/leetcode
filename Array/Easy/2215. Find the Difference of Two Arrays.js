let findDifference = function (nums1, nums2) {
  let arr = [];
  let arr2 = [];
  let map = new Map();
  let map2 = new Map();

  for (let val of nums1) {
    map.set(val, map.get(val) + 1 || 1);
  }
  for (let val of nums2) {
    map2.set(val, map2.get(val) + 1 || 1);
  }

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    if (nums2[i] !== undefined && !map.has(nums2[i])) {
      arr2.push(nums2[i]);
    }
    if (nums1[i] !== undefined && !map2.has(nums1[i])) {
      arr.push(nums1[i]);
    }
  }

  return [[...new Set(arr)], [...new Set(arr2)]];
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-the-difference-of-two-arrays/
