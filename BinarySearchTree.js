function BinarySearchTree (value) {  
  this.value = value;
  this.magnitude = 1;
}

BinarySearchTree.prototype.insert = function(value) {  
  var direction = value < this.value ? 'left' : 'right';
  if (this[direction]) this[direction].insert(value);
  else this[direction] = new BinarySearchTree(value);
  this.magnitude++;
};

BinarySearchTree.prototype.contains = function(value) {  
  if (value === this.value) return true;
  var direction = value < this.value ? 'left' : 'right';
  if (!this[direction]) return false;
  return this[direction].contains(value);
};

// -note: pre-order/post-order/in-order involves which order you do these in.

// pre = do the action first, left, right  
// post = left,right,action  
// in-order = left,action,right - returns the tree values in sorted order.

BinarySearchTree.prototype.depthFirstForEach = function(iterator) {  
  // can switch pre-order/in-order/post-order by re-ordering these three actions. Cool!
  iterator(this.value);
  if (this.left) this.left.depthFirstForEach(iterator);
  if (this.right) this.right.depthFirstForEach(iterator);
};

BinarySearchTree.prototype.breadthFirstForEach = function(iterator) {  
  var queue = [this], // this is just an array with one element (`this`)
      current; // good practice to declare all vars at the top of the scope
  while (queue.length) { // could also use a for loop, indices, etc.
    current = queue.shift();
    iterator(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};

BinarySearchTree.prototype.size = function() {  
  return this.magnitude;
};