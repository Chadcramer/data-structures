class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
  }
  enqueue(value){
    //Add a string to the back of the queue
    
    this[this.counter] = value;
    this.counter ++;
    };
    
    dequeue(){
    //Remove and return the string at the front of the queue
    // {0: '1st value', 1: '2nd value', 2: '3rd value'}
    // {0: '2nd value', 1: '3rd value'}
    if(this.counter > 0){
      var returnValue = this[0];
      var idx = 0;
      while(idx < this.counter){
        this[idx] = this[idx + 1];
        idx++;
        }
      delete this[this.counter];
      this.counter--;
    
      return returnValue; 
    }
    
    };
    size(){
    //Return the number of items in the queue
    
    return this.counter;
    
    };
}
