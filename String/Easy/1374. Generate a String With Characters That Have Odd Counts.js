let generateTheString = function (n) {
  if (n % 2 === 0) {
    return 'a'.repeat(n - 1) + 's';
  }

  return 'a'.repeat(n);
};

// link :- https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
