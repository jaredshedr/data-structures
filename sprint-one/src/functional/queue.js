var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // refactor has a variable accessible to all below functions - totalCount = 0 then rises when we add something, the enque function incrementing by one and then assigning it to storage with that new variable....

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
    var storageSize = Object.keys(storage);
    return storageSize.length;
  };

  return someInstance;
};

