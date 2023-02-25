let nextGreaterElement = function (nums1, nums2) {
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    let max = -1;
    let idx = nums2.indexOf(nums1[i]);

    if (idx !== -1 && idx < nums2.length - 1) {
      for (let j = idx + 1; j < nums2.length; j++) {
        if (nums2[j] > nums1[i]) {
          max = nums2[j];
          break;
        }
      }
    }
    arr.push(max);
  }

  return arr;
};

// T.C: O(n)
// S.C: O(n^2)

// link :- https://leetcode.com/problems/next-greater-element-i/
