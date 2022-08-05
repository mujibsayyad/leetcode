//1
let longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) return prefix;
    }
    prefix += strs[0][i];
  }

  return prefix;
};

//2
let longestCommonPrefixx = function (strs) {
  const anyWord = strs[0];

  for (let i = 0; i < anyWord.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (anyWord[i] === strs[j][i]) continue;
      return anyWord.slice(0, i);
    }
  }

  return anyWord;
};

// link :- https://leetcode.com/problems/longest-common-prefix/
