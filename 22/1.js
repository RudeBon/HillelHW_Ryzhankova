function redirect(element, expected){
    if (element == expected) return true;
};

// let stringToSplit =  "0 1 3 6 8 9 12"; 
let stringToSplit =  "0 2 3 6 7 9 12";  

let arrFromString = stringToSplit.split(' ');
console.log(arrFromString);

const promise = new Promise(function(resolve, reject) {
    console.log(0);
    if (redirect(arrFromString[1], 1)) {
    resolve();  
    }
    reject();
})


promise
    .then(() => {
        console.log(1); 
        if (redirect(arrFromString[2], 3)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    }, () =>{
        console.log(2);
        if (redirect(arrFromString[2], 3)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    })

    .then(() => {
        console.log(3); 
        if (redirect(arrFromString[3], 5)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    }, () =>{
        console.log(4); 
        if (redirect(arrFromString[3], 5)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    })

    .then(() => {
        console.log(5);
        if (redirect(arrFromString[4], 7)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    }, () =>{
        console.log(6); 
        if (redirect(arrFromString[4], 7)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    })

    .then(() => {
        console.log(7);
        if (redirect(arrFromString[5], 9)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    }, () =>{
        console.log(8); 
        if (redirect(arrFromString[5], 9)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    })

    .then(() => {
        console.log(9); 
        if (redirect(arrFromString[6], 11)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    }, () =>{
        console.log(10);
        if (redirect(arrFromString[6], 11)) {
            return Promise.resolve();  
        }
        return Promise.reject();
    })

    .then(() => {
        console.log(11);
        return Promise.resolve();
    }, () =>{
        console.log(12); 
        return Promise.resolve();
    });