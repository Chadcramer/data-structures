var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.latestKey = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size
  
  
  return someInstance;
};

var stackMethods = {};

// stackMethods.latestKey = 0;
stackMethods.push = function(value) {
  // Add a string to the top of the stack

  // {0: '1st value'}
  // {0: '1st value', 1: '2nd value'}
  // {0: '1st value', 1: '2nd value', 2: '3rd value'}
  this[this['latestKey']] = value;
  this['latestKey']++;
//   console.log(this,'this is this');
  };

stackMethods.pop = function() {
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

stackMethods.size = function() {
  // Return the number of items on the stack
  // console.log(stackMethods);
  return this['latestKey'];

};
  









