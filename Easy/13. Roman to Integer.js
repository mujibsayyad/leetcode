const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      integer -= obj[s[i]];
    } else {
      integer += obj[s[i]];
    }
  }

  return integer;
};

// Fist check given Roman Number
// Ex- ['IV'] is given number i.e ('IV = 4')
// If we extract it in number i.e I = 1, V = 5
// We will consider first letter as 1st number i.e in our case [I],
// second as 2nd number i.e in our case [V],
// third is 3rd number and so on...

// Main Logic -
// if 1st number is less than 2nd number, then substract
// if 2nd number is greater than 1st number, then addition

// FIRST ITERATION
// 1 < 5 (subtract)
// result -> interger = 0 - 1 = -1
// --> Integer is -1 now <--

// SECOND ITERATION
// 5 is single value remaining in 2nd iteration,
// and 5 is not less than 5 so it will be (addition)
// result -> interger = -1 + 5 = 4

// So ans will be 4 for given Roman Number i.e ['IV']

//
// link :- https://leetcode.com/problems/roman-to-integer/
