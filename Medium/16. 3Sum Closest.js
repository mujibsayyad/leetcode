let threeSumClosest = function (nums, target) {
  let result = Infinity;
  nums.sort((a, b) => a - b);
  let j, k;

  for (let i = 0; i < nums.length - 2; i++) {
    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;

  // T.C : O(n^2)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/3sum-closest/
