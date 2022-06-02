// Without converting number to a string.

function reverseDigits(num) {
  let rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num;
}

let isPalindrome = function (x) {
  return x === reverseDigits(x);
};

// -----------------------------------------------

// With converting number to string

let isPalindrome2 = function (x) {
  const z = x.toString();
  const reverse = z.split('').reverse().join('');
  const rVal = parseInt(reverse);
  return x === rVal;
};
