/**
 * @param {number} n
 */
let OrderedStream = function (n) {
  this.map = new Map();
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.map.set(idKey, value);
  let chunk = [];

  while (this.map.has(this.ptr)) {
    chunk.push(this.map.get(this.ptr));
    this.ptr++;
  }

  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

// T.C : O(n)
// S.C : O(n)

// link :- https://leetcode.com/problems/design-an-ordered-stream/
