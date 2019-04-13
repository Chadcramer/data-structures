var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //k is the key which is an string
  //v is the value to be put in the bucket (which is an array)
  this._storage.set(index,v,k);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var func = function(){
    if( arguments[1] === index){
        arguments[2].splice(arguments[1],1, undefined);
    }
  };
  this._storage.each(func);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


