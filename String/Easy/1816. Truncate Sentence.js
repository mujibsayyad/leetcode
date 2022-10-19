let truncateSentence = function (s, k) {
  let arr = [];
  s = s.split(' ');

  for (let i = 0; i < k; i++) {
    arr.push(s[i]);
  }

  return arr.join(' ');

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/truncate-sentence/
