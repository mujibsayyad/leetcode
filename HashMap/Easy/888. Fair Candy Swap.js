let fairCandySwap = function (aliceSizes, bobSizes) {
  let aSum = 0;
  let bSum = 0;

  let map1 = new Map(),
    map2 = new Map();

  for (let num of aliceSizes) {
    aSum += num;
    map1.set(num, map1.get(num) + 1 || 1);
  }

  for (let num of bobSizes) {
    bSum += num;
    map2.set(num, map2.get(num) + 1 || 1);
  }

  let average = (aSum + bSum) / 2;

  for (let num of aliceSizes) {
    let diff = average - aSum;
    if (map2.has(num + diff)) return [num, num + diff];
  }
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/fair-candy-swap/
