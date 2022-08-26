// 1st Approach
const moveZeroes = function (nums) {
  let idxForNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[idxForNonZero], nums[i]] = [nums[i], nums[idxForNonZero]];
      idxForNonZero++;
    }
  }
  return nums;
};

// 2nd Approach
const moveZeroess = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
      i--;
    }
  }
  return nums;
};

// 3rd Approach
var moveZeroesss = function (nums) {
  let i = 0;

  for (index in nums) {
    if (nums[index] !== 0) {
      nums[i] = nums[index];
      i++;
    }
  }
  nums.fill(0, i, nums.length);
};

// link :- https://leetcode.com/problems/move-zeroes/
