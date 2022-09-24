// 1
let groupAnagrams = function (strs) {
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    let string = strs[i];

    let sortString = string.split('').sort().join('');

    obj[sortString]
      ? obj[sortString].push(string)
      : (obj[sortString] = [string]);
  }

  return Object.values(obj);

  // T.C: O(n*nlog(n))
  // S.C: O(N)
};

// 2
let groupAnagramss = function (strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let string = strs[i];

    let sortString = string.split('').sort().join('');

    if (map.has(sortString))
      map.set(sortString, [...map.get(sortString), string]);
    else map.set(sortString, [string]);
  }

  return Array.from(map.values());

  // T.C: O(n*nlog(n))
  // S.C: O(N)
};

// 3
let groupAnagramsss = function (strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let count = new Array(26).fill(0);
    let string = strs[i];

    for (let j = 0; j < string.length; j++) {
      let char = string[j];
      count[char.charCodeAt() - 97]++;
    }

    let key = count.join('#');

    if (map.has(key)) map.set(key, [...map.get(key), string]);
    else map.set(key, [string]);
  }

  return Array.from(map.values());

  // T.C: O(n^2)
  // S.C: O(n)
};

// link :- https://leetcode.com/problems/group-anagrams/
