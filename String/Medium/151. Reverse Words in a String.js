// 1
let reverseWords = function (s) {
  s = s.split(' ');

  let arr = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '') continue;

    arr.push(s[i]);
  }

  return arr.join(' ');
};

// 2
let reverseWordss = function (s) {
  return s
    .split(' ')
    .reverse()
    .filter((w) => w !== '')
    .join(' ');
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/reverse-words-in-a-string/
