var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var itemFoundInStorage = false;

  for (var currentIndex = 0; currentIndex < this._storage.length; currentIndex++) {
    var currentItem = this._storage[currentIndex];
    if (currentItem === item) {
      itemFoundInStorage = true;
      break;
    }
  }

  return itemFoundInStorage;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    for (var currentIndex = 0; currentIndex < this._storage.length; currentIndex++) {
      var currentItem = this._storage[currentIndex];

      if (currentItem === item) {
        this._storage = this._storage.slice(0, currentIndex).concat(this._storage.slice(currentIndex + 1));
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

add - O(1)

contains - O(n)

remove - O(n)
 */
