var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  

  // Implement the methods below
  var latestKey = 0;

  someInstance.enqueue = function(value) {
  // Add a string to the back of the queue
  // {0: '1st value'}
  // {0: '1st value', 1: '2nd value'}
  
  someInstance[latestKey] = value;
  latestKey++;
 
  };

  someInstance.dequeue = function() {
  // Remove and return the string at the front of the queue

    var incrementer =0;
    var returnValue = someInstance['0']; 
    while(incrementer < latestKey){
        someInstance[incrementer] = someInstance[incrementer+1];
        incrementer++;
    }
    delete someInstance[latestKey-1];
    latestKey--;
    return returnValue;
  
  };

  someInstance.size = function() {
  // Return the number of items in the queue
   return latestKey;
  };
  return someInstance;

//test
};

// var test = Queue();
// test.enqueue('1st value');
// console.log(test);
// test.enqueue('2nd value');
// console.log(test);
// test.enqueue('3rd value');
// console.log(test);
// test.dequeue();
// console.log(test);
// test.size();


