function redirect(element, expected){
    if (element == expected) return true;
};

let stringToSplit =  "0 1 3 6 8 9 12"; 
// " 0 2 3 6 7 9 12"
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

//     .then(() => {
//         console.log(3); 
//         return Promise.reject();
//     }, () =>{
//         console.log(4);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(5);
//         return Promise.resolve();
//     }, () =>{
//         console.log(6); 
//         return Promise.reject();
//     })

//     .then(() => {
//         console.log(7);
//         return Promise.resolve();
//     }, () =>{
//         console.log(8); 
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(9); 
//         return Promise.reject();
//     }, () =>{
//         console.log(10);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(11);
//         return Promise.resolve();
//     }, () =>{
//         console.log(12); 
//         return Promise.resolve();
//     });


// promise
//     .then(() => {
//         console.log(1);
//         return Promise.resolve();
//     }, () =>{
//         console.log(2);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(3); 
//         return Promise.reject();
//     }, () =>{
//         console.log(4);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(5);
//         return Promise.resolve();
//     }, () =>{
//         console.log(6); 
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(7); 
//         return Promise.resolve();
//     }, () =>{
//         console.log(8);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(9); 
//         return Promise.reject();
//     }, () =>{
//         console.log(10);
//         return Promise.resolve();
//     })

//     .then(() => {
//         console.log(11);
//         return Promise.resolve();
//     }, () =>{
//         console.log(12); 
//         return Promise.resolve();
//     });