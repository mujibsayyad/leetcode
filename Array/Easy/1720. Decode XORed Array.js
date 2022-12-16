let decode = function (encoded, first) {
  let arr = [first];
  let xor = first;

  for (let i = 0; i < encoded.length; i++) {
    xor = xor ^ encoded[i];
    arr.push(xor);
  }

  return arr;
};

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/decode-xored-array/
