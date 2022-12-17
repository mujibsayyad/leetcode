let sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let N = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
};

// T.C: O(N)
// S.C: O(1)

// link :- https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
