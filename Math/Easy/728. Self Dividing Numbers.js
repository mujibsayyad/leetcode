let selfDividingNumbers = function (left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }

  return result;
};

let isSelfDividing = function (num) {
  const numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);

    if (digit === 0 || num % digit !== 0) {
      return false;
    }
  }

  return true;
};

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/self-dividing-numbers/
