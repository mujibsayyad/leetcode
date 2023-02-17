let minTimeToType = function (word) {
  let currentPos = 'a';
  let seconds = 0;

  for (let i = 0; i < word.length; i++) {
    const diff = Math.abs(word.charCodeAt(i) - currentPos.charCodeAt(0));
    seconds += Math.min(diff, 26 - diff);

    currentPos = word[i];
    seconds++;
  }

  return seconds;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/delete-columns-to-make-sorted/
