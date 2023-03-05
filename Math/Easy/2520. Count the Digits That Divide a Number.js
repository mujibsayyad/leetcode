let countDigits = function (num) {
  let count = 0;
  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    if (num % numString[i] === 0) {
      count++;
    }
  }

  return count;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/count-the-digits-that-divide-a-number/
