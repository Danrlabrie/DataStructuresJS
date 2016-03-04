//A Queue is a simple FIFO data structure First in First Out. Meaning whatever we put into the queue first comes out first, 
//just like a line at an amusement park (many people would have said bank there, but coding is exciting, no?).

let Queue = function() {  
    this.dataSet = [];
};

Queue.prototype.push = function(value) {  
    this.dataSet.push(value);
    return this;
};

Queue.prototype.pop = function() {  
    return this.dataSet.shift();
};


