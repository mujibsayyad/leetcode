let mergeAlternately = function (word1, word2) {
  let str = '';

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i] !== undefined && word2[i] !== undefined) {
      str += word1[i] + word2[i];
    } else if (word1[i] === undefined && word2[i] !== undefined) {
      str += word2[i];
    } else if (word2[i] === undefined && word1[i] !== undefined) {
      str += word1[i];
    }
  }
  return str;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/merge-strings-alternately/
