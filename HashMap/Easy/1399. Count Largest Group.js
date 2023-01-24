let countLargestGroup = function (n) {
  let map = new Map();

  for (let i = 1; i <= n; i++) {
    let sum = getSumOfDigits(i);

    if (!map.has(sum)) {
      map.set(sum, [i]);
    } else {
      map.get(sum).push(i);
    }
  }

  let max = 0;
  let count = 0;

  for (let group of map.values()) {
    if (group.length > max) {
      max = group.length;
      count = 1;
    } else if (group.length === max) {
      count++;
    }
  }

  return count;
};

function getSumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// T.C: O(n^2)
// S.C: O(n)

// link :- https://leetcode.com/problems/count-largest-group/
