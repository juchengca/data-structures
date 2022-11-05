var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var keys = Object.keys(list);
    var index = keys.length + 1;
    list[index] = value;
    if (list.tail === null) {
      list.tail = {};
      list.head = {};
      list.tail.value = value;
      list.head.value = value;
    } else {
      list.tail.value = value;
    }
  };

  list.removeHead = function() {
    var keys = Object.keys(list);
    var removedValue = list[keys[0]];
    delete list[keys[0]];
    list.head.value = list[keys[1]];
    return removedValue;
  };

  list.contains = function(target) {
    for (var keys in list) {
      if (list[keys] === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
