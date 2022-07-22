// T.C: O(N)
// S.C: O(1)

let maxProfit = function (prices) {
  let left = 0; // Buying Price;
  // One thing here, we dont need to add extra edge case for if value is 0 or null;
  // we are returning 0 for if value is 0 or null or no profit in selling;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[left] < prices[i]) {
      let profit = prices[i] - prices[left];
      maxProfit = maxProfit + profit;
      // Here after making profit moving to next value or (index);
      left++;
    } else {
      // if buying price is greater than selling, move buying price to next value or (index);
      left = i;
    }
  }
  return maxProfit;
};

// link:- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
