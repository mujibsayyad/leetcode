let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;

      return digits;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) digits.unshift(1);

  return digits;

  //   T.C : O(n)
  //   S.C : O(1)
};

let plusOnee = function (digits) {
  const fromArray = digits.join(''); // get Digits out of Array

  const toInt = BigInt(fromArray); //Dont use parseInt, use BigInt instead :)

  const addOne = toInt + 1n; // add one!

  const result = Array.from(String(addOne), Number); // return digits to array
  //   const result = Array.from(addOne.toString(), Number); // return digits to array

  return result;
};

// link :- https://leetcode.com/problems/plus-one/
