const crypto = require('crypto');

console.log('Hellow World');

var a = 2392839291;
var b = 828392;

//Synchrnous code
crypto.pbkdf2Sync("password", "salt", 50, 50000, "sha512");
console.log("First Key");

setTimeout(()=>{
    console.log('Call me right now');
})


crypto.pbkdf2("password", "salt", 50, 50000, "sha512", (err, res)=>{
    console.log("Second Key is generated");
})

 function multiply(a, b){
    let res = a * b;
    return res;  
}

var c = multiply(a, b);
console.log(c);
