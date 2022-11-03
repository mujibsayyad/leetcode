// 1
let smallerNumbersThanCurrent = function (nums) {
  const sorted = nums.slice().sort((i, j) => i - j);

  const map = new Map();

  for (let i = 0; i < sorted.length; i++) {
    map.has(sorted[i]) ? 0 : map.set(sorted[i], i);
    console.log(map);
  }

  return nums.map((num) => map.get(num));

  // T.C: O(n log n)
  // S.C: O(n)
};

// 2
let smallerNumbersThanCurrentt = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
  }

  return arr;

  // T.C: O(n^2)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
