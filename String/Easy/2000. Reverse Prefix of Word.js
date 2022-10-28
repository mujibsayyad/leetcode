let reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;
  let idx = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      idx = i;
      break;
    } else {
      idx++;
    }
  }

  let newStr = word
    .slice(0, idx + 1)
    .split('')
    .reverse()
    .join('');

  let wordS = word.slice(idx + 1);
  return newStr + wordS;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/reverse-prefix-of-word/
