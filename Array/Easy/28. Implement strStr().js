//1
let strStr = function (haystack, needle) {
  let left = 0;
  let right = needle.length;

  while (left < haystack.length) {
    let str = haystack.slice(left, right);
    if (str === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
};

//2
let strStrr = function (haystack, needle) {
  if (needle.length == 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let k = i,
      j = 0;
    while (haystack[k] == needle[j] && j < needle.length) {
      k++, j++;
    }
    if (j == needle.length) return i;
  }
  return -1;
};

// link :- https://leetcode.com/problems/implement-strstr/
