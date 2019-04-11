var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {};


queueMethods.enqueue = function(value){
//Add a string to the back of the queue

this[this.counter] = value;
this.counter ++;
};

queueMethods.dequeue = function(){
//Remove and return the string at the front of the queue
if(this.counter > 0){
var returnValue = this[0];
delete this[0];

return returnValue; 
}

};
queueMethods.size = function(){
//Return the number of items in the queue

return this.counter;

};


