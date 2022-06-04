var BinarySearchTree = function(value) {
  var newSearchTree = Object.create(binarySearchTreeMethods);
  newSearchTree.value = value;
  newSearchTree.left;
  newSearchTree.right;

  return newSearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(insertionValue) {
  var insertionValueIsGreaterThanTreeValue = insertionValue > this.value ? true : false;

  if (insertionValueIsGreaterThanTreeValue) {
    if (this.right === undefined) {
      var newNode = BinarySearchTree(insertionValue);
      this.right = newNode;
    } else {
      this.right.insert(insertionValue);
    }
  } else {
    if (this.left === undefined) {
      var newNode = BinarySearchTree(insertionValue);
      this.left = newNode;
    } else {
      this.left.insert(insertionValue);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  }

  if (this.value > value) {
    if (this.left !== undefined) {
      return this.left.contains(value);
    }
  } else {
    if (this.right !== undefined) {
      return this.right.contains(value);
    }
  }

  return false;
};

binarySearchTreeMethods.depthFirstLog = function(callbackFunction) {
  var currentValue = this.value;
  callbackFunction(currentValue);

  if (this.left !== undefined) {
    this.left.depthFirstLog(callbackFunction);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(callbackFunction);
  }

};

/*
* Complexity: What is the time complexity of the above functions?

insert: O(log(n))
contains: O(log(n))
depthFirstLog: O(n)
*/
