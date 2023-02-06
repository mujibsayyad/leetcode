let numberOfLines = function (widths, s) {
  let lines = 1;
  let last = 0;
  const base = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - base];
    last += width;
    if (last > 100) {
      lines++;
      last = width;
    }
  }
  return [lines, last];
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/number-of-lines-to-write-string/
