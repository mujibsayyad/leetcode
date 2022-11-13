// 1
let removePalindromeSub = function (s) {
  if (!s) return 0;

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return 2;
  }

  return 1;

  // T.C : O(n^2)
  // S.C : O(1)
};

// 2
let removePalindromeSubb = function (s) {
  return s === s.split('').reverse().join('') ? 1 : 2;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/remove-palindromic-subsequences/
