let countAsterisks = function (s) {
  s = s.split('|');
  let count = 0;
  let string = '';

  for (let i = 0; i < s.length; i++) {
    string += s[i];
    i++;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '*') {
      count++;
    }
  }

  return count;

  // T.C : O(n)
  // S.C : O(n)
};

// 2
let countAsteriskss = function (s) {
  let flag = true,
    count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '|') {
      flag = !flag;
    }

    if (flag) {
      if (s[i] == '*') count++;
    }
  }

  return count;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/count-asterisks/
