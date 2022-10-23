let reverseWords = function (s) {
  s = s.split(' ');
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let rev = s[i].split('').reverse().join('');
    arr.push(rev);
  }

  return arr.join(' ');

  // T.C: O(n^2)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/reverse-words-in-a-string-iii/
