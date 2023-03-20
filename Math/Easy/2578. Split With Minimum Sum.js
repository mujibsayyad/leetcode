let splitNum = (n) => {
  const str = n.toString();
  const arr = Array.from(str, Number).sort((a, b) => a - b);
  let str1 = '';
  let str2 = '';

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      str1 += arr[i];
    } else {
      str2 += arr[i];
    }
  }

  return parseInt(str1) + parseInt(str2);
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/split-with-minimum-sum/
