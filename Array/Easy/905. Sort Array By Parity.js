let sortArrayByParity = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num % 2) {
      output.push(num);
    } else {
      output.unshift(num);
    }
  }

  return output;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sort-array-by-parity/
