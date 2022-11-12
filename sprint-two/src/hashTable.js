

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this.retrieve(k) !== undefined) {
    var bucket = this.retrieve(index);
    var item = [k, v];
    bucket.push(item);
    this._storage.set(index, bucket);
  } else {
    var bucket = [];
    var item = [k, v];
    bucket.push(item);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(index);
  console.log(values);
  for (var i = 0; i < values.length; i++) {
    if (k === values[i][0]) {
      return values[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


