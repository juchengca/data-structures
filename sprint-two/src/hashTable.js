

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //console.log('entered insert');
  if (k === 'val2') {
    //debugger
  }
  var index = getIndexBelowMaxForKey(k, this._limit);

  // If the key already has a value then either overwrite or add
  if (this._storage.get(index) !== undefined) {
    var bucket = this._storage.get(index);
    var flag = false;
    for (var i = 0; i < bucket.length; i++) {
      // if new key and old key match, overwrite
      if (k === bucket[i][0]) {
        bucket[i][1] = v;
        this._storage.set(index, bucket);
        flag = true;
      }
    }
    // if flag is false then key was not found; add new key value pair to array
    if (flag === false) {
      var item = [k, v];
      bucket.push(item);
      this._storage.set(index, bucket);
      return;
    }
    // if key is not found, create new array and insert to storage
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
  if (values === undefined) {
    return undefined;
  }
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


/*
var v1 = 'val1';
var v2 = 'val2';
var oldHashFunction = window.getIndexBelowMaxForKey;
window.getIndexBelowMaxForKey = function() { return 0; };
hashTable.insert(v1, v1);
hashTable.insert(v2, v2);
expect(hashTable.retrieve(v1)).to.equal(v1);
expect(hashTable.retrieve(v2)).to.equal(v2);
window.getIndexBelowMaxForKey = oldHashFunction;

*/