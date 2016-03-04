// The evil twin of the queue, a stack is just a LIFO (Last in First Out) data structure.

//Constructor
let Stack = function () {
  this.dataSet = [];
};


Stack.prototype.addTo = function(data) {
  this.dataSet.push(data);
  return this;
};

Stack.prototype.returnFrom = function() {
  return this.dataSet.pop();
};

// This could also be implemented in the reverse direction with shift / unshift.