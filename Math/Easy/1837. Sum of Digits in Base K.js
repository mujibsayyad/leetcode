let sumBase = function (n, k) {
  const r = n.toString(k).split('');
  return r.reduce((acc, cur) => acc + Number(cur), 0);
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sum-of-digits-in-base-k/
