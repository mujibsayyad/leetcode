let mostWordsFound = function (sentences) {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    max = Math.max(max, sentences[i].split(' ').length);
  }

  return max;

  // T.C: O(n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
