// Implement a graph class, in pseudoclassical style, with the following properties:
// It is an undirected graph. It does not have to be 'connected'.

// Instantiate a new graph
var Graph = function() {
    
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
// method that takes a new node and adds it to the graph
    var vertice = {'value': null};
    vertice['value'] = node;
    this.node = vertice;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// method that takes any node and returns a boolean reflecting whether it can be found in the graph
    return (this.node) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
    delete this.node;
    for(var key in this){
        delete this[key][node];
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
// method that returns a boolean reflecting whether or not two nodes are connected
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// method that creates a edge (connection) between two nodes if they both are present within the graph
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// method that removes the connection between two nodes
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
// method that traverses through the graph, calling a passed in function once on each node
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


