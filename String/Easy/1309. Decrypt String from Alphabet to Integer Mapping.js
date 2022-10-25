let freqAlphabets = function (s) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      let idx = s[i] + s[i + 1];
      str += alphabets[idx - 1];
      i += 2;
    } else {
      let letter = s[i];
      str += alphabets[letter - 1];
    }
  }
  return str;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
