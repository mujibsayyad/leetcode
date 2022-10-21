let countConsistentStrings = function (allowed, words) {
  let map = new Map();
  let ans = words.length;

  for (let i of allowed) {
    map.set(i, 1);
  }

  for (let i of words) {
    let flag = 0;

    for (let j of i) {
      if (!map.has(j)) {
        flag = 1;
        ans -= 1;
      }
      if (flag) break;
    }
  }
  return ans;
};

// link :- https://leetcode.com/problems/count-the-number-of-consistent-strings/
