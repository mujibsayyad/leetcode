const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

let intToRoman = function (num) {
  let string = '';

  for (let i = 0; num; i++) {
    while (num >= val[i]) {
      string = string + rom[i];

      num = num - val[i];
    }
  }

  return string;
};

// T.C: O(n)
// S.C: O(n)

// link :- https://leetcode.com/problems/integer-to-roman/
