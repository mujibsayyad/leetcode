let digitCount = function (num) {
  let map = new Map();

  for (let val of num) {
    let n = Number(val);
    map.set(n, map.get(n) + 1 || 1);
  }

  for (let i = 0; i < num.length; i++) {
    if (map.get(i) === Number(num[i])) {
      continue;
    } else if (!map.get(i) && Number(num[i]) === 0) {
      continue;
    }
    return false;
  }
  return true;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
