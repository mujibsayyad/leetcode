// 1
let checkString = function (s) {
  if (s.length === 1) return true;
  let indexOfB = s.indexOf('b');
  if (indexOfB === -1) return true;

  for (let i = indexOfB; i < s.length; i++) {
    if (s[i] === 'a') return false;
  }

  return true;
};

// 2
let checkStringg = function (s) {
  return !s.includes('ba');
};

// 3
let checkStringgg = function (s) {
  // a cannot come after b
  let violation = 'ba';

  return s.indexOf(violation, 0) == -1;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
