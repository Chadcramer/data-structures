var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var latestKey = 0;
  // Implement the methods below
  someInstance.push = function(value) {
  // Add a string to the top of the stack

  // {0: '1st value'}
  // {0: '1st value', 1: '2nd value'}
  // {0: '1st value', 1: '2nd value', 2: '3rd value'}
  someInstance[latestKey] = value;
  latestKey++;
  };

  someInstance.pop = function() {
    // Remove and return the string on the top of the stack
    // {0: '1st value', 1: '2nd value', 2: '3rd value'} 
    // {0: '1st value', 1: '2nd value'}
    if(latestKey > 0){
      var returnValue = someInstance[latestKey - 1];
      delete someInstance[latestKey - 1];
      latestKey--;
      return returnValue;
    }
  };

  someInstance.size = function() {
    // Return the number of items on the stack
    return latestKey;
  };

  return someInstance;
};
