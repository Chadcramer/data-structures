var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  //children is an array;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
  var child = Tree(value);
  this.children.push(child); 

};

treeMethods.contains = function(target) {
  // method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any  descendant node
 
//   var ultimateTruth = (this.value === target)|| this.children[i]; 


  if(this.value === target){
    return true;

  } else {

    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].contains(target)){
          return true;
      }    
    }
  }
  return false;
 };

var tree = Tree(0);



/*
 * Complexity: What is the time complexity of the above functions?
 */


//  var root = Tree(0);

//  root.addChild(1);
//  root.addChild(2);

//  root.children[0] //child1 object
//  root.children[1] //child2 object
//  root.children[0].addChild(3);




 //root
//  {value: 0, children:[{value:1, children: [{value:3, children: null}]}, {value:2, children: null}]}