// 1
var countPrefixess = function (words, s) {
  let map = new Map();
  let string = '';
  let count = 0;

  for (let val of s) {
    string += val;
    map.set(string, 1);
  }

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) count++;
  }

  return count;

  // T.C: O(n)
  // S.C: O(n)
};

// 2
let countPrefixes = function (words, s) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) count++;
  }

  return count;

  // T.C: O(n^2)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/count-prefixes-of-a-given-string/
