// Without Stack
let calculate = function (s) {
  s += '+';
  let sum = 0,
    lastValue = 0;
  let num = 0,
    sign = '+';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    else if (s[i] >= 0 && s[i] <= 9) {
      num = num * 10 + s.charCodeAt(i) - 48;
    } else {
      if (sign === '*') lastValue = lastValue * num;
      else if (sign === '/') lastValue = Math.trunc(lastValue / num);
      else if (sign === '+' || sign === '-') {
        sum = sum + lastValue;
        lastValue = (sign === '+' ? 1 : -1) * num;
      }

      num = 0;
      sign = s[i];
    }
  }

  return sum + lastValue;
};

// link :- https://leetcode.com/problems/basic-calculator-ii/
