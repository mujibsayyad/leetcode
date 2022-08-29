let maxScore = function (cardPoints, k) {
  let sum = 0,
    maxSum = 0;
  let size = cardPoints.length;

  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }

  maxSum = sum;

  for (let i = 0; i < k; i++) {
    sum += cardPoints[size - 1 - i] - cardPoints[k - 1 - i];

    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
