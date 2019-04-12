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



};

treeMethods.contains = function(target) {
};



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