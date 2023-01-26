let maxNumberOfBalloons = function (text) {
  const map = new Map();
  const balloon = 'balloon';

  for (let i = 0; i < text.length; i++) {
    if (!map.has(text[i])) {
      map.set(text[i], 1);
    } else {
      map.set(text[i], map.get(text[i]) + 1);
    }
  }

  let count = Infinity;

  for (let i = 0; i < balloon.length; i++) {
    let letter = balloon[i];
    let letterCount = map.get(letter) || 0;
    if (letter === 'l' || letter === 'o') {
      letterCount = Math.floor(letterCount / 2);
    }
    count = Math.min(count, letterCount);
  }

  return count;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/maximum-number-of-balloons/
