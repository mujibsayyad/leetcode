const vowels = 'aeiouAEIOU';

let halvesAreAlike = function (S) {
  let mid = S.length / 2,
    ans = 0;

  for (let i = 0, j = mid; i < mid; i++, j++)
    ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j));

  return ans === 0;
};

// link :- https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
