let findTheDifference = function (s, t) {
  let sum = 0;

  for (let i = 0; i < t.length; i++) {
    if (i < s.length) sum -= s.charCodeAt(i);
    sum += t.charCodeAt(i);
  }

  return String.fromCharCode(sum);
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/find-the-difference/
