let shortestToChar = function (s, c) {
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      ans.push(i);
    }
  }

  let index = 0;
  const output = [];

  for (let i = 0; i < s.length; i++) {
    if (Math.abs(i - ans[index]) >= Math.abs(i - ans[index + 1])) index++;
    output.push(
      Math.min(
        Math.abs(i - ans[index]),
        Math.abs(i - ans[index + 1]) || Number.MAX_SAFE_INTEGER
      )
    );
  }
  return output;

  // T.C : O(n)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/shortest-distance-to-a-character/
