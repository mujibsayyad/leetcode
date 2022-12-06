let uniqueMorseRepresentations = function (words) {
  let morseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  let map = new Map();

  for (let i = 0; i < words.length; i++) {
    let temp = '';

    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j].charCodeAt() - 97;
      temp += morseCode[char];
    }
    map.set(temp, map.get(temp) + 1 || 1);
  }

  return map.size;

  // T.C : O(n^2)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/unique-morse-code-words/
