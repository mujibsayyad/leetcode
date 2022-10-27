let firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let check = words[i].split('').reverse().join('');

    if (check === words[i]) {
      return words[i];
    }
  }

  return '';
};

// link :- https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
