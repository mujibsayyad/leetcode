let maxProfit = function (prices) {
  let left = 0; // Buying Price
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // console.log(prices[left], prices[i]) log this in browser for better understanding
    if (prices[left] < prices[i]) {
      let profit = prices[i] - prices[left];

      maxProfit = Math.max(profit, maxProfit);
    } else {
      // if buying value [left] (which is index 0 ) is greater than prices[i] (which is index 1) value,
      // then left will be index 1 value, and i will be index 2 in next iteration.
      left = i;
    }
  }
  return maxProfit;
};

// link :- https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
