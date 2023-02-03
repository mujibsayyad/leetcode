let diStringMatch = function (s) {
  let i = 0;
  let j = s.length;
  let res = [];

  s.split('').forEach((x) => {
    if (x === 'I') {
      res.push(i);
      i++;
    } else {
      res.push(j);
      j--;
    }
  });

  res.push(i);
  return res;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/di-string-match/
