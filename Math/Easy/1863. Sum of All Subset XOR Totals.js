let subsetXORSum = function (nums) {
  let total = 0;

  // generate all subsets and calculate XOR total
  function generateSubsets(index, currentXOR) {
    if (index === nums.length) {
      total += currentXOR;
      return;
    }

    // include current element
    generateSubsets(index + 1, currentXOR ^ nums[index]);

    // exclude current element
    generateSubsets(index + 1, currentXOR);
  }

  // start with an empty subset and XOR total of 0
  generateSubsets(0, 0);

  return total;
};

// T.C: O(2 ^ n)
// S.C: O(n)

// link :- https://leetcode.com/problems/sum-of-all-subset-xor-totals/
