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
};

// Recursive
var isPalindromee = function (s) {
  s = s
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, '');

  console.log(s);

  return isPalindromeRecursion(s, 0, s.length - 1);
};

const isPalindromeRecursion = (s, left, right) => {
  if (left >= right) return true;

  if (s[left] !== s[right]) return false;

  return isPalindromeRecursion(s, left + 1, right - 1);
};

// T.C: O(N)
// S.C: O(N)

// link :- https://leetcode.com/problems/valid-palindrome/
