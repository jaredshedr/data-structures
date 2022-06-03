var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // I: A value, any value whatsoever
  // O: None - Side effect alters the value of the LinkedList
  // C: Time complexity needs to be O(1)
  // E: Linked List is empty - assign head with value

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return undefined;
    } else {
      var previousHeadValue = list.head.value;
      list.head = list.head.next;
    }

    return previousHeadValue;
  };

  list.contains = function(target) {
    var containsTarget = false;

    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        containsTarget = true;
      }
      currentNode = currentNode.next;
    }

    return containsTarget;
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


   removeHead: O(1);
   addToTail: O(1);
   contains: O(n);

 */
