let replaceElements = function (arr) {
  let greatest = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = greatest;

    if (temp > greatest) {
      greatest = temp;
    }
  }

  return arr;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
