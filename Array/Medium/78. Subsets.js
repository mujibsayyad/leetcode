// 1 Iterative
let subsets = function (nums) {
  let arr = [[]];

  for (let i = 0; i < nums.length; i++) {
    arr.forEach((set) => {
      arr.push(set.slice().concat(nums[i]));
    });
  }

  return arr;

  // T.C: O(n^2)
  // S.C: O(n)
};

// 2 Recursive
let subsetss = function (nums) {
  let result = [];

  function recurse(i, root, arr) {
    if (i === root.length) {
      result.push(arr.slice());
      return;
    }
    recurse(i + 1, root, arr);
    arr.push(root[i]);

    recurse(i + 1, root, arr);
    arr.pop();
  }
  recurse(0, nums, []);
  return result;

  // T.C: O(2^n)
  // S.C: O(2^n)
};

// link :- https://leetcode.com/problems/subsets/
