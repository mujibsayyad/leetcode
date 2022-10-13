// 1
let sortPeople = function (names, heights) {
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }

  return arr.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
  // T.C : O(n log n)
  // S.C : O(n)
};

// 2
let sortPeoplee = function (names, heights) {
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    // Exracting max value from array
    let max = Math.max(...heights);

    // Getting index of extracted max value inside heights array
    let idx = heights.indexOf(max);

    // Changing max value to empty string, To avoid get same value in next iteration
    heights[idx] = '';

    arr.push(names[idx]);
  }
  return arr;

  // T.C : O(n^2)
  // S.C : O(n)
};

// link :- https://leetcode.com/problems/sort-the-people/
