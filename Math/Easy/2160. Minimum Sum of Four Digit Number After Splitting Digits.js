let minimumSum = function (num) {
  const temp = num.toString().split('').sort();
  return parseInt(temp[0] + temp[2]) + parseInt(temp[1] + temp[3]);
};

// T.C: O(n log n)
// S.C: O(n)

// link :- https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
