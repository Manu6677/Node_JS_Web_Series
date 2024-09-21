const https = require('https');
const fs = require('fs');

var a  = 109815272;
var b = 2839;

fs.readFileSync("./file.txt", "utf8");
console.log("Read the Sync FILE");

https.get('https://dummyjson.com/products/1', (res)=>{
    console.log('fetched Data Successfully');
})

setTimeout(()=>{
    console.log("This is SetTimeout after 5 Secs");
}, 5000);

fs.readFile('./file.txt', 'utf8', (err, res)=>{
    console.log('File Data : ', res);
})

function multiplyNumbers(a, b){
    const result = a * b;
   return result;
}

const c = multiplyNumbers(a, b);
console.log('Multiply Result', c);