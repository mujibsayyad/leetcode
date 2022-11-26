// 1
let canBeTypedWords = function (text, brokenLetters) {
  let split = text.split(' ');
  let splitBL = brokenLetters.split('');
  let count = new Set();

  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < splitBL.length; j++) {
      if (split[i].includes(splitBL[j])) {
        count.add(i);
      }
    }
  }
  return split.length - count.size;
};

// 2
let canBeTypedWordss = function (text, brokenLetters) {
  const words = text.split(' ').filter((word) => {
    const letters = brokenLetters.split('');

    return letters.every((l) => !word.includes(l));
  });

  return words.length;
};

// T.C : O(n^2)
// S.C : O(n)

// link :- https://leetcode.com/problems/maximum-number-of-words-you-can-type/
