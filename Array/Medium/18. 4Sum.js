let fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  let arr = [];
  let len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

    //avoid repetitive values
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target)
      continue;

    for (let j = i + 1; j < len - 2; j++) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

      //avoid repetitive values
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue;
      // left and right pointer here
      let left = j + 1;
      let right = len - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);

          //avoid repetitive values
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return arr;

  // T.C : O(n^3)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/4sum/
