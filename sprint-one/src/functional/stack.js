var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var index = 0;
    var tempStorage = {};

    Object.values(storage).forEach(function (item) {
      tempStorage[index] = item;
      index++;
    });

    storage = tempStorage;

    var keyArrays = Object.keys(storage);

    if (keyArrays.length === 0) {
      storage['0'] = value;
    } else {
      storage[keyArrays.length] = value;
    }
  };

  someInstance.pop = function() {
    var keyArray = Object.keys(storage);
    var temp = storage[keyArray[keyArray.length - 1]];
    delete storage[keyArray.length - 1];
    return temp;
  };

  someInstance.size = function() {
    var keyArray = Object.keys(storage);
    return keyArray.length;
  };

  return someInstance;
};
