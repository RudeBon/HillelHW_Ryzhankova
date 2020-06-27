var obj = { 
    result: 0,
    keyName: 'result',
    m1: function(func, a, b) { 
        this[this.keyName] = func(a, b); 
        return this; 
    },
    m2: function(keyName) { 
        this[this.keyName] = 0; 
        return this; 
    },
    m3: function(buffer) {
        this[buffer] = this[this.keyName]; 
        return this;
    },
    target: function(property) { 
        this.keyName = property; 
        return this; 
    }
};