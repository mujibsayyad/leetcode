let numOfStrings = function (patterns, word) {
  let count = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) {
      count++;
    }
  }

  return count;
};

// T.C : O(n^2)
// S.C : O(1)

// link :- https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
