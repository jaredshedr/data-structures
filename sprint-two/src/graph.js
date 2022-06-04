

// Instantiate a new graph
var Graph = function() {
  this.allNodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.allNodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.allNodes.indexOf(node) > -1) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    var indexOfNode = this.allNodes.indexOf(node);
    this.allNodes.splice(indexOfNode);

    for (var i = 0; i < this.allNodes.length; i++) {
      this.removeEdge(this.allNodes[i], node);
    }

    delete this.edges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = this.edges[fromNode].indexOf(toNode);
  this.edges[fromNode].splice(toNodeIndex);

  var fromNodesIndex = this.edges[toNode].indexOf(fromNode);
  this.edges[toNode].splice(fromNodesIndex);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var i = 0; i < this.allNodes.length; i++) {
    var friendNode = this.allNodes[i];
    cb(friendNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

addNode - O(1)
contains - O(n)
removeNode - O(n)
hasEdge - O(n)
addEdge - O(1)
remomeEdge - O(n)
forEachNode - O(n)


 */



