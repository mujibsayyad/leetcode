let areNumbersAscending = function (s) {
  const numbers = s
    .split(' ')
    .filter((x) => !isNaN(x))
    .map((x) => +x);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      return false;
    }
  }

  return true;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
