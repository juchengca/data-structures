var BinarySearchTree = function(value) {

  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;
  _.extend(newTree, searchMethods);
  return newTree;
};


var searchMethods = {};

searchMethods.insert = function(value) {
  var node = {};
  node.left = null;
  node.right = null;
  node.value = value;
  var searchNode = function(tree) {
    if (tree.value > value) {
      //check left node
      if (tree.left === null) { //if the left node is empty
        tree.left = node;
      } else {
        searchNode(tree.left);
      }
      //check right node
    } else {
      if (tree.right === null) {
        tree.right = node;
      } else {
        searchNode(tree.right);
      }
    }
  };
  searchNode(this);
};

searchMethods.contains = function(value) {
  var found = false;
  var searchNode = function(tree) {
    if (tree.value === value) {
      found = true;
      return;
    } else {
      if (tree.value > value) {
        //check left node
        if (tree.left === null) { //if the left node is empty
          return;
        } else {
          searchNode(tree.left);
        }
        //check right node
      } else {
        if (tree.right === null) {
          return;
        } else {
          searchNode(tree.right);
        }
      }
    }
  };
  searchNode(this);
  return found;
};

searchMethods.depthFirstLog = function(callback) {

  var searchNode = function(tree) {
    callback(tree.value);
    if (tree.left !== null) {
      searchNode(tree.left);
    }
    if (tree.right !== null) {
      searchNode(tree.right);
    }
  };
  searchNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
