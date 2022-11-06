let prefixCount = function (words, pref) {
  return words.filter((word) => word.slice(0, pref.length) === pref).length;
};

// link :- https://leetcode.com/problems/counting-words-with-a-given-prefix/
