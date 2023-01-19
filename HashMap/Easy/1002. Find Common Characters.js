let commonChars = function (words) {
  let res = [...words[0]];

  for (let i = 1; i < words.length; i++) {
    res = res.filter((c) => {
      const len = words[i].length;

      words[i] = words[i].replace(c, '');

      return len > words[i].length;
    });
  }

  return res;
};

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/find-common-characters/
