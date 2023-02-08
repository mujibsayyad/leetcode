let separateDigits = function (nums) {
  let split = nums.join('');
  let arr = [];

  for (let i = 0; i < split.length; i++) {
    arr.push(Number(split[i]));
  }

  return arr;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/separate-the-digits-in-an-array/
