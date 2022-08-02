let lengthOfLastWord = function (s) {
  let array = s.trim().split(' ');
  return array[array.length - 1].length;
};

// link :- https://leetcode.com/problems/length-of-last-word/
