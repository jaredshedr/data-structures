var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var index = 0;
  var tempStorage = {};

  Object.values(this.storage).forEach(function (item) {
    tempStorage[index] = item;
    index++;
  });

  this.storage = tempStorage;

  var keyArrays = Object.keys(this.storage);

  if (keyArrays.length === 0) {
    this.storage['0'] = value;
  } else {
    this.storage[keyArrays.length] = value;
  }
};

Queue.prototype.dequeue = function() {

  var temp;

  var arrayOfValues = Object.values(this.storage);
  var arrayOfKeys = Object.keys(this.storage);

  temp = arrayOfValues[0];

  delete this.storage[arrayOfKeys[0]];

  return temp;
};

Queue.prototype.size = function() {
  var keyArray = Object.keys(this.storage);
  return keyArray.length;
};