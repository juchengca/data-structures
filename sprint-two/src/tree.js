var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = {children: [], addChild: treeMethods.addChild, contains: treeMethods.contains, value: value};
  this.children.push(newChild);
  /*
  var index = this.children.length;
  if (index === 0) {

    //this.children[index] = {children: [], addChild: treeMethods.addChild};
    //this.children[index].value = value;
  } else {
    this.children[index - 1].value = value;
  }
  console.log(this);
  */
};

treeMethods.contains = function(target) {
  var counter = 0;

  var findTarget = function() {
    counter += this.children.length;
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      }
      if (this.children[i].children.length > 0) {
        if (findTarget.call(this.children[i], target) === true) {
          return true;
        }
      }
      counter--;
    }
    if (counter === 0) { //if we're at the first child array
      return false;
    }
  };

  var foundTarget = findTarget.call(this, target);
  return foundTarget;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//tree.children[0].value).to.equal(5);