

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  var bucketArray = this._storage.get(index);

  if (!bucketArray) {
    bucketArray = [];
    this._storage.set(index, bucketArray);
  }

  var found = false;

  for (let i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      bucketArray[i][1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucketArray.push([k, v]);
    this._count++;
    if (this._count > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucketArray = this._storage.get(index);
  if (!bucketArray) {
    return undefined;
  }

  var resultValue;
  for (let i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      resultValue = bucketArray[i][1];
    }
  }

  return resultValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);

  for (let i = 0; i < bucketArray.length; i++) {
    var tuple = bucketArray[i];
    if (tuple[0] === k) {
      bucketArray.splice(i, 1);
      this._count--;

      if (this._count < this._limit * 0.25) {
        this.resize(this._limit / 2);
      }
    }
  }

};

HashTable.prototype.resize = function (newSize) {
  var oldStorage = this._storage;

  this._limit = newSize;
  this._count = 0;
  this._storage = LimitedArray(this._limit);

  var context = this;

  oldStorage.each(function (item) {
    if (!item) { return; }
    for (let i = 0; i < item.length; i++) {
      context.insert(item[i][0], item[i][1]);
    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions

Insert - O(1)

Retrieve - O(1)

Remove - O(1)
 */


