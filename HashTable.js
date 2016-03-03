// Basic implementation of a simple hash table in vanilla js

var HashTable = function (buckets) {  
    this.numBuckets = buckets;
    this.data = [];
};

// then we have some hashing function - a simple one might be to sum char codes and mod by our numBuckets
// note - this is only going to work for string keys.

HashTable.prototype._hash = function(input) {  
    var hashtotal = 0;
    for(var i=0; i< input.length; i++) {
        hashtotal += input.charCodeAt(i);
    }
    return hashtotal % this.numBuckets;
};

// cool, so now we have our hashing function.
// We then need some sort of setting & getting functions to put things into and get things out of our hashTable.

HashTable.prototype.set = function (inputObj) {  
for(var k in inputObj) {  
    if( typeof k !== 'string'){
      throw new Error('input keys must be of type string'); 
    }
    else {
        var hashedInput = this._hash(k);
        if(this.data.indexOf(hashedInput) === -1) {
            this.data[hashedInput] = new LinkedList();
            this.data[hashedInput].addTo([k,inputObj[k]]);
        }
    }
}
};

HashTable.prototype.get = function (inputKey) {  
    var hashedInput = this._hash(inputKey);
    var bucketLocale = this.data[this.data.indexOf(hashedInput)];
    if(bucketLocale !== -1) return "no value found, try again";
    else {
        var current = bucketLocale.head;
        while(current.next) {
            if (current.data[0] === inputKey) return current.data[1];
        }
    }
};