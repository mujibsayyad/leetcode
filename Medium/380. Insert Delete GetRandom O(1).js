let RandomizedSet = function (arr) {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  this.swap(idx, this.arr.length - 1);
  this.arr.pop();
  this.map.set(this.arr[idx], idx);
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

RandomizedSet.prototype.swap = function (i, j) {
  [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = new RandomizedSet()
 * let param_1 = obj.insert(val)
 * let param_2 = obj.remove(val)
 * let param_3 = obj.getRandom()
 */

// link :- https://leetcode.com/problems/insert-delete-getrandom-o1/submissions/
