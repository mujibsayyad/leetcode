let maxProduct = function (nums) {
  let [first, second] = [0, 0];

  for (const number of nums) {
    if (number > first) {
      [first, second] = [number, first];
    } else if (number > second) {
      second = number;
    }
  }

  return (first - 1) * (second - 1);
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/reverse-linked-list/
