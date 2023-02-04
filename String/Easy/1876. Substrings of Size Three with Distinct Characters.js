let countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    let set = new Set();
    set.add(s[i]);
    set.add(s[i + 1]);
    set.add(s[i + 2]);
    if (set.size === 3) {
      count++;
    }
  }

  return count;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
