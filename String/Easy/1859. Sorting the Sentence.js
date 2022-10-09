var sortSentence = function (s) {
  let arr = [];
  s = s.split(' ');

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lastIdx = char[char.length - 1];

    let newWord = char.slice(0, char.length - 1);
    arr[lastIdx - 1] = newWord;
  }

  return arr.join(' ');
};

// link :- https://leetcode.com/problems/sorting-the-sentence/
