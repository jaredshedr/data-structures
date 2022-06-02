var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

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

  someInstance.dequeue = function() {

    var temp;

    var arrayOfValues = Object.values(storage);
    var arrayOfKeys = Object.keys(storage);

    temp = arrayOfValues[0];

    delete storage[arrayOfKeys[0]];

    return temp;
  };

  someInstance.size = function() {
    var counter = 0;
    Object.keys(storage).forEach(function (item) {
      counter++;
    });
    return counter;
  };

  return someInstance;
};

