// Iterative

let isPalindrome = function (s) {
  s = s
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, '');

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;

    start++;
    end--;
  }
  return true;

  // T.C: O(N)
  // S.C: O(N)
};

// link :- https://leetcode.com/problems/valid-palindrome/
