let subsets = function (nums) {
  let arr = [[]];

  for (let i = 0; i < nums.length; i++) {
    arr.forEach((set) => {
      arr.push(set.slice().concat(nums[i]));
    });
  }

  return arr;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/subsets/
