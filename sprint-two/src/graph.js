

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeList = this.nodes[node];
  for (var i = 0; i < nodeList.length; i++) {
    this.removeEdge(node, nodeList[i]);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      this.nodes[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.nodes[toNode].length; i++) {
    if (this.nodes[toNode][i] === fromNode) {
      this.nodes[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var keys in this.nodes) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


