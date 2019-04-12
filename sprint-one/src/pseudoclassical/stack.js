var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.latestKey = 0;

};


// stackMethods.latestKey = 0;
Stack.prototype.push = function(value) {
  // Add a string to the top of the stack

  // {0: '1st value'}
  // {0: '1st value', 1: '2nd value'}
  // {0: '1st value', 1: '2nd value', 2: '3rd value'}
  this[this['latestKey']] = value;
  this['latestKey']++;

  };

Stack.prototype.pop = function() {
  // Remove and return the string on the top of the stack
  // {0: '1st value', 1: '2nd value', 2: '3rd value'} 
  // {0: '1st value', 1: '2nd value'}
  if(this['latestKey'] > 0){
 
    var returnValue = this[this['latestKey']-1];
    delete this[this['latestKey'] - 1];
    this['latestKey']--;
    return returnValue;
  }
};

Stack.prototype.size = function() {
  // Return the number of items on the stack
  // console.log(stackMethods);
  return this['latestKey'];

};
  




