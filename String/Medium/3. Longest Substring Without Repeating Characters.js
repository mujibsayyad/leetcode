// 1
let lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let map = new Map();
  let count = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const prevSeenChar = map.get(currChar);

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    map.set(currChar, i);

    count = Math.max(count, i - left + 1);
  }

  return count;

  // T.C: O(N)
  // S.C: O(N)
};

// 2
let lengthOfLongestSubstringg = function (s) {
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
