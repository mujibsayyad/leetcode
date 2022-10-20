const arrayStringsAreEqual = function (word1, word2) {
  let firstArr = word1.join('');
  let secondArr = word2.join('');

  if (firstArr === secondArr) return true;

  return false;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
