let subarraysDivByK = function (nums, k) {
  let count = 0;
  let prefixSum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum = (prefixSum + nums[i]) % k;

    if (prefixSum < 0) prefixSum += k;

    if (map.has(prefixSum)) count += map.get(prefixSum);

    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }

  return count;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/subarray-sums-divisible-by-k/
