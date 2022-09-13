let RandomizedCollection = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.arr.push(val);

  if (!this.map.has(val)) {
    this.map.set(val, new Set());

    let idxSet = this.map.get(val);
    idxSet.add(this.arr.length - 1);
    return true;
  } else {
    let idxSet = this.map.get(val);
    idxSet.add(this.arr.length - 1);
    return false;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  let idx = this.map.get(val);
  let [firstIdx] = idx;

  idx.delete(firstIdx);

  if (idx.size === 0) {
    this.map.delete(val);
  }

  this.arr[firstIdx] = this.arr[this.arr.length - 1];
  idx = this.map.get(this.arr[firstIdx]);

  if (idx) {
    idx.delete(this.arr.length - 1);
    idx.add(firstIdx);
  }

  this.arr.pop();

  return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

RandomizedCollection.prototype.swap = function (i, j) {
  [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
};

// link :- https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
