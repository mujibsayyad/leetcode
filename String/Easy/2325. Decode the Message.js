let alphabets = 'abcdefghijklmnopqrstuvwxyz';

let decodeMessage = function (key, message) {
  let decode = '';
  let copyOfKey = key.split(' ').join('');

  let map = new Map();
  let count = 0;

  // adding non-duplicate value to map (coz in que.example they said: It is obtained by taking the          first appearance of each letter)
  for (let letter of copyOfKey) {
    if (!map.has(letter)) {
      map.set(letter, count);
      // count for index of letters. like 0,1,2,3 it will increase for each letter
      // by assigning index number we will get the decoded letter from alphabets
      count++;
    }
  }

  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      decode += ' ';
      continue;
    }

    let keyIdx = map.get(message[i]);

    decode += alphabets[keyIdx];
  }

  return decode;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/decode-the-message/
