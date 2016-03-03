// Linked lists consist of nodes which have pointers to at least one of their neighbor nodes.
// Below is an implementation of a doubly linked list.

let Node = function (data) {  
  this.data = data;
  this.next = this.previous = null;
};

let LinkedList = function (node) {

   this.head = this.tail = node || null;

};

LinkedList.prototype.addToHead = function (someNode) {  
    if(this.head) {
        someNode.next = this.head;
        this.head.previous = someNode;
        this.head = someNode;
    }
    else {
        this.head = this.tail = someNode;
    }
};

LinkedList.prototype.addToTail = function (someNode) {  
    if(this.tail) {
        someNode.previous = this.tail;
        this.tail.next = someNode;
        this.tail = someNode;
    }
    else {
        this.head = this.tail = someNode;
    }
};

LinkedList.prototype.find = function (dataItem) {  
    let current =  this.head;
    while(current) {
        if(current === dataItem) {
            return current;
        }
        current = current.next;
    }
    return "could not find that node";
};

LinkedList.prototype.remove = function (dataItem) {  
    let current = this.head;
    while(current) {
        if(current === dataItem && current !== this.head && current !== this.tail) {
            current.previous.next = current.previous.next.next;
            current.next.previous = current.next.previous.previous;
        }
        else if(current === this.head) {
            if(this.head === this.tail) {
                current = current.next = null;
            }
            else {
                this.head = this.head.next;
                this.head.previous = null;
            }
        }
        else if(current === this.tail) {
            if(this.head === this.tail) {
                current = current.previous = null;
            }
            else {
                this.tail = this.tail.previous;
                this.tail.next = null;
            }
        }
        current = current.next;
    }
}