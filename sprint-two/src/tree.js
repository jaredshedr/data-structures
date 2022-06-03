var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {

  var valueFound = false;

  if (this.value === target) {
    return true;
  }

  if (this.children !== undefined) {
    for (var i = 0; i < this.children.length; i ++) {
      valueFound = this.children[i].contains(target);
      if (valueFound) {
        break;
      }
    }
  }

  return valueFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild run time - O(1)

// contains run time - O(n)