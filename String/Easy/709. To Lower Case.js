let toLowerCase = function (s) {
  let ans = '';
  for (let c of s) {
    let n = c.charCodeAt();
    ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : c;
  }
  return ans;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/to-lower-case/
