var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var numKeys = Object.keys(storage).length;
    storage[numKeys] = value;
    return storage;
  };

  someInstance.pop = function() {
    var numKeys = Object.keys(storage).length - 1;
    var lastValue = storage[numKeys];
    delete storage[numKeys];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
