let countCharacters = function (words, chars) {
  let map = new Map();
  let sum = 0;

  for (let val of chars) {
    map.set(val, map.get(val) + 1 || 1);
  }

  for (let word of words) {
    let canForm = true;
    let wordCount = new Map([...map]);

    for (let c of word) {
      if (wordCount.get(c)) {
        wordCount.set(c, wordCount.get(c) - 1);
      } else {
        canForm = false;
        break;
      }
    }
    if (canForm) {
      sum += word.length;
    }
  }

  return sum;
};

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
