let replaceDigits = function (s) {
  let str = 'abcdefghijklmnopqrstuvwxyz';
  let ans = '';

  for (let i = 1; i < s.length; i = i + 2) {
    let charDigit = s.charCodeAt(i - 1) - 97 + +s[i];
    ans += s[i - 1] + str[charDigit];
  }

  if (ans.length < s.length) {
    ans += s[s.length - 1];
  }

  return ans;
};

// link :- https://leetcode.com/problems/replace-all-digits-with-characters/
