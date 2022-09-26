// 1
let defangIPaddr = function (address) {
  let string = '';

  for (let i = 0; i < address.length; i++) {
    if (address[i] !== '.') {
      string = string + address[i];
    } else {
      string = string + '[.]';
    }
  }

  return string;
};

// 2
let defangIPaddrr = function (address) {
  return address.replaceAll('.', '[.]');
};

// 3
let defangIPaddrrr = function (address) {
  return address.split('.').join('[.]');
};

// 4
let defangIPaddrrrr = function (address) {
  return address.replace(/\./g, '[.]');
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/defanging-an-ip-address/
