//------------------------Practice 1st task------------------------
console.log('______Practice 1st______');

var obj = { 
    result: 0,
    keyName: 'result',
    doFunction: function(func, a, b) { 
        this[this.keyName] = func(a, b); 
        return this; 
    },
    clear: function(keyName) { 
        this[this.keyName] = 0; 
        return this; 
    },
    copy: function(buffer) {
        this[buffer] = this[this.keyName]; 
        return this;
    },
    target: function(property) { 
        this.keyName = property; 
        return this; 
    }
};
  
function sum(a, b) { 
    return a + b; 
};
function mul(a, b) { 
    return a * b; 
};

obj.doFunction(sum, 1, 2).target('redirectedRez').doFunction(mul, 4, 2).copy('copiedRez');
console.log('result', obj.result);
console.log('target', obj.redirectedRez);
console.log('copy', obj.copiedRez);

//------------------------Practice 2nd task------------------------
console.log('______Practice 2nd______');

function stringChanger(string){
    var result = string.split('_').map(((str) => {
            return this.upperFirst(str);
        })).join('');
    result = result[0].toLowerCase() + result.substr(1);
      
    return result;
};
  
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};
  
console.log(stringChanger('var_text_hello'));  
  
//------------------------Practice 3rd task------------------------
console.log('______Practice 3rd______');

function inArray(str, arr){
    return arr.some(x => x.indexOf(str) + 1);
};
  
console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));

//------------------------Lection 1st task------------------------
console.log('______Lection 1st______');

function customArray(){
    this.customPush=function(elem){
        this[this.length++] = elem;
        return this;
    };
    this.customJoin=function(str){
        if (!str){
            str = '';
        }
        var result = '';
        for (i=0;i<(this.length - 1);i++){
            result = result + this[i] + str;
        } 
        result = result + this.length;
        return result;
    };
    this.customReverse=function(){
        var temp = [];
        for (i=0;i<this.length;i++){
            temp.unshift(this[i]);            
        };
        this.splice(0, this.length);
        for (i=0;i<temp.length;i++){
            this.push(temp[i]);            
        };
        return this;
    }
}

customArray.prototype=Array.prototype;

var list = new customArray;

list.push(1, 2, 3);
console.log(list);
// list.costomPush(4);  // ---- is not a function error
console.log('custom join', list.customJoin('+'));
console.log('custom reverse', list.customReverse());
console.log(list);

//------------------------Lection 2nd task------------------------
console.log('______Lection 2nd______');

var objL2 = {
    x:10, 
    y: 20,
    renderObject : renderObject,
};

function renderObject() {    
    var paramsArr = Object.keys(this);
    for (param in paramsArr){
        if (paramsArr[param] !== 'renderObject'){
            document.write(this[paramsArr[param]]);
            console.log(this[paramsArr[param]]);
        }               
    }
};

objL2.renderObject();

//------------------------Lection 3rd task------------------------
console.log('______Lection 3rd______');

var objL3 = { 
    m1: function m1() { 
        console.log('m1');
        return this; 
    },
    m2: function m2() { 
        console.log('m2');
        return this; 
    },
    m3: function() {
        console.log('m3');
        return this; 
    },
};

objL3.m1().m2().m3();
objL3.m2().m1().m3();
objL3.m2().m1().m3().m1().m1();

//------------------------Lection 4-5 task------------------------
console.log('______Lection 4-5______');

var data = {
    addRecord: function(){
        for (i=0;i<(arguments.length - 1); i++){
            obj = arguments[i];            
            for (key in obj){
                if (this[key]){
                    if (flag){
                        this[key] = obj[key];
                    }
                } else {
                    this[key] = obj[key];
                }
            }
        }        
    },
    p: 600,
    str: 'hello',
    y: -50
};

var flag = 1;

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, flag);
console.log(data.x, 'data.x'); // 50
console.log(data.y, 'data.y'); // 20
console.log(data.z, 'data.z'); // 30
console.log(data.p, 'data.p'); // 600
console.log(data.str, 'data.str'); // 'hello'