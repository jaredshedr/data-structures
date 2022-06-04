

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index) === undefined ? [] : this._storage.get(index);
  bucketArray.push([k, v]);
  this._storage.set(index, bucketArray);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucketArray = this._storage.get(index);

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

  var resultValue;
  for (let i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      bucketArray.splice(i, 1);
    }
  }

  this._storage.set(index, bucketArray);
};



/*
 * Complexity: What is the time complexity of the above functions

Insert - O(1)

Retrieve - O(1)

Remove - O(1)
 */


