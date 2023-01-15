let findWords = function (words) {
  const row1 = /^[qwertyuiop]+$/i;
  const row2 = /^[asdfghjkl]+$/i;
  const row3 = /^[zxcvbnm]+$/i;
  const arr = [];

  for (let i = 0; i < words.length; i++) {
    if (row1.test(words[i]) || row2.test(words[i]) || row3.test(words[i])) {
      arr.push(words[i]);
    }
  }

  return arr;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/keyboard-row/
