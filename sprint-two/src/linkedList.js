var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = Node(value);
    var prevNode;

    if(!list.head) { 
    list.head = newNode;
    list.tail = newNode;
    } else {
    prevNode = list.tail;
    list.tail = newNode;
    prevNode.next = list.tail;
    }
  };

  list.removeHead = function() {
    //check if the list is non empty
    //we'd like to point list.head to the head's node.next
    
    var headNextNode = list.head.next;
    var headValue = list.head.value;
    
    if(list.head){
      if(list.head.next === null){
        list.head = null;
        list.tail = null;
      } else {
        list.head = headNextNode;
      }
      return headValue;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    
    

    while(currentNode.next !== null){
      if(currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }  
    }
    if(list.tail.value === target){
      return true;
    }
    // return boolean whether or not the value exists
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var listOne = new LinkedList();
var node = new Node();
var nodeTwo = new Node();
var nodeThree = new Node();
