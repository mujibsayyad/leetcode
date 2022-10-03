let restoreString = function (s, indices) {
  return s
    .split('')
    .reduce((acc, v, i) => {
      acc[indices[i]] = v;

      return acc;
    }, [])
    .join('');
};

// 2
let restoreStringg = function (s, indices) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
  }

  return arr.join('');
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/shuffle-string/
