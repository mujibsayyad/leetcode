let subarraySum = function (nums, k) {
  let count = 0;
  let prefixSum = 0;

  let map = new Map();
  map.set(prefixSum, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }

  return count;

  // T.C: O(N)
  // S.C: O(N)
};

// link :- https://leetcode.com/problems/subarray-sum-equals-k/
