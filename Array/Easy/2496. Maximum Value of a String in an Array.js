let maximumValue = function (strs) {
  let max = 0;

  for (let i = 0; i < strs.length; i++) {
    const elem = strs[i];
    let len = elem.length;

    if (!isNaN(Number(elem))) {
      len = Number(elem);
    }

    if (max < len) {
      max = len;
    }
  }

  return max;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
