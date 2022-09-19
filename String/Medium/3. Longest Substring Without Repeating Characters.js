// 1
let lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let count = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let tempCount = 0;

    for (let j = i; j < s.length; j++) {
      if (!map.has(s[j])) {
        map.set(s[j], 1);

        tempCount++;
        count = Math.max(count, tempCount);
      } else {
        map.clear();
        break;
      }
    }
  }
  return count;

  // T.C: O(N^2)
  // S.C: O(N)
};

// link :- https://leetcode.com/problems/longest-substring-without-repeating-characters/
