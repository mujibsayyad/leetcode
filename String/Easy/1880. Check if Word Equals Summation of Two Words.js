let isSumEqual = function (firstWord, secondWord, targetWord) {
  let first = '',
    second = '',
    target = '';

  let max = Math.max(firstWord.length, secondWord.length, targetWord.length);

  for (let i = 0; i < max; i++) {
    if (firstWord[i]) {
      first += firstWord[i].charCodeAt() - 97;
    }

    if (secondWord[i]) {
      second += secondWord[i].charCodeAt() - 97;
    }
  }

  for (let i = 0; i < targetWord.length; i++) {
    target += targetWord[i].charCodeAt() - 97;
  }

  let total = Number(first) + Number(second);

  return total === Number(target) ? true : false;

  // T.C: O(n)
  // S.C: O(1)
};

// link :- https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
