let validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;

  // T.C: O(N)
  // S.C: O(1)
};

let isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
};

// link :- https://leetcode.com/problems/valid-palindrome-ii/
