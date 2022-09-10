let largestRectangleArea = function (heights) {
  let lessFromLeft = [];
  let lessFromRight = [];

  // Initializing last element equal to length, cause that's last element and so no smaller element to the right side;
  lessFromRight[heights.length - 1] = heights.length;

  // Same like above, no smaller element to the left side for first element so we initializing it with -1;
  lessFromLeft[0] = -1;

  // starting loop from 1 cause we already he ans for first element (means: 0 index);
  for (let i = 1; i < heights.length; i++) {
    // for checking
    let p = i - 1;

    // if this condition true
    while (p >= 0 && heights[p] >= heights[i]) {
      // 1: It will look into <lessFromLeft Array whats value for p>,
      p = lessFromLeft[p];
      // 2: E.X - for first iteration p is 0, and its value inside <lessFromLeft> is -1, So now p will be -1>
      // 3: Now after setting the p value, loop will start again with new value which is -1
      // 4: And now above while condition is false cause p is less than 0;
    }
    // value for lessFromLeft[1] will be -1, cause there is no smaller value to left than this;
    lessFromLeft[i] = p;
  }
  // Same logic like above, here we are looping from end;
  for (let i = heights.length - 2; i >= 0; i--) {
    let p = i + 1;
    while (p < heights.length && heights[p] >= heights[i]) {
      p = lessFromRight[p];
    }
    lessFromRight[i] = p;
  }

  let max = 0;
  // Main Function for to check largestRectangleArea
  for (let i = 0; i < heights.length; i++) {
    let curr = heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1);
    max = Math.max(max, curr);
  }

  return max;

  // T.C: O(n)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/largest-rectangle-in-histogram/