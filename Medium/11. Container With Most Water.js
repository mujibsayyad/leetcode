let maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let water = 0;

  while (i < j) {
    // substract 'i' position from 'j' to get width of container
    let width = j - i;
    // check which line has the min height and use that as height
    let heightOfWater = Math.min(height[i], height[j]);
    // then multiple width * height to check area of water and store into a variable
    water = Math.max(water, width * heightOfWater);

    // if height of 'i' is less than 'j' then increament, else decreament j
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return water;

  // T.C : O(n)
  // S.C : O(1)
};

// link :- https://leetcode.com/problems/container-with-most-water/
