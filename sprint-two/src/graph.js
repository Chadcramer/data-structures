// Implement a graph class, in pseudoclassical style, with the following properties:
// It is an undirected graph. It does not have to be 'connected'.

// Instantiate a new graph
var Graph = function() {
    
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(input) {
// method that takes a new node and adds it to the graph
    this[input] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(input) {
// method that takes any node and returns a boolean reflecting whether it can be found in the graph
    return (this.hasOwnProperty(input));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(input) {
// method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
    delete this[input];
   
    for(var key in this){
        if(this.key){
        this[key].splice(this.key.indexOf(input), 1);
        }
    }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
// method that returns a boolean reflecting whether or not two nodes are connected
 if(this[fromNode] && this[toNode]){

     if (this[fromNode].includes(toNode) && this[toNode].includes(fromNode)){
         return true;
     }
 }
 return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// method that creates a edge (connection) between two nodes if they both are present within the graph
  fromNode = Number(fromNode);
  toNode = Number(toNode);
    
  if(this[fromNode] && this[toNode]){
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// method that removes the connection between two nodes
  if(this[fromNode]){
    this[fromNode].splice(this[fromNode].indexOf(toNode),1);
  } 
  if(this[toNode]){
    this[toNode].splice(this[toNode].indexOf(fromNode),1); 
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
// method that traverses through the graph, calling a passed in function once on each node

    for(var key in this){
        cb(key);
    }

};
