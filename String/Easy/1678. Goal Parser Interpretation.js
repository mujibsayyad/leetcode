// 1st Solution
let interpret = function (command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
};

//Extracted Version of above solution
let interpret1 = function (command) {
  command = command.replaceAll('()', 'o');
  command = command.replaceAll('(al)', 'al');

  return command;
};

// 2nd Solution
let interprett = function (command) {
  return command.split('()').join('o').split('(al)').join('al');
};

// 3rd Solution Without using in-built method
let interprettt = function (command) {
  let string = '';

  for (let i = 0; i < command.length; i++) {
    if (command[i] === '(' && command[i + 1] === ')') {
      string += 'o';
    } else if (command[i] === '(' && command[i + 1] !== ')') {
      string += 'al';
    } else if (command[i] === ')' || command[i] === 'a' || command[i] === 'l') {
      continue;
    } else {
      string += command[i];
    }
  }

  return string;
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/goal-parser-interpretation/
