const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      integer -= obj[s[i]];
    } else {
      integer += obj[s[i]];
    }
  }

  return integer;
};

// link :- https://leetcode.com/problems/roman-to-integer/
