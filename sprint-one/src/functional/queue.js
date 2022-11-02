var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var numKeys = Object.keys(storage).length;
    storage[numKeys] = value;
    return storage;
  };

  someInstance.dequeue = function() {
    // save value of item at front of queue
    //console.log(storage);
    var front = storage['0'];
    var numKeys = Object.keys(storage).length;
    // use for loop from 0 to numKeys
    for (var i = 0; i < numKeys; i++) {
      // set storage[i-1] = storage i
      storage[i - 1] = storage[i];
    }
    // delete storage[-1] & storage[numkeys - 1]
    delete storage[-1];
    delete storage[numKeys - 1];
    //console.log(storage);
    return front;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
