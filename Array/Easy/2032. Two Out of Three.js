let twoOutOfThree = function (nums1, nums2, nums3) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let set3 = new Set(nums3);

  let map = new Map();
  let arr = [];

  for (let val of set1) {
    map.set(val, 1);
  }
  for (let val of set2) {
    map.set(val, map.get(val) + 1 || 1);
  }
  for (let val of set3) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let [key, val] of map) {
    if (val > 1) {
      arr.push(key);
    }
  }

  return arr;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/two-out-of-three/
