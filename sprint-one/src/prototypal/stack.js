var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
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

stackMethods.pop = function() {
  var keyArray = Object.keys(this.storage);
  var temp = this.storage[keyArray[keyArray.length - 1]];
  delete this.storage[keyArray.length - 1];
  return temp;
};

stackMethods.size = function() {
  var keyArray = Object.keys(this.storage);
  return keyArray.length;
};
