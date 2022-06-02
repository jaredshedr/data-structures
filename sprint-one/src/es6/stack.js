class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push (value) {
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
  }

  pop () {
    var keyArray = Object.keys(this.storage);
    var temp = this.storage[keyArray[keyArray.length - 1]];
    delete this.storage[keyArray.length - 1];
    return temp;
  }

  size () {
    var keyArray = Object.keys(this.storage);
    return keyArray.length;
  }

}