const {calculateMultiply, calculateSum, divideTheNumbers} = require('./calculate');

let a = 10;
let b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
divideTheNumbers(a,b)

/*

 1) Modules: 'Actually In node modules protect its VARIABLES and FUNCTION and METHODS FROM LEAKING that is why they create their own space in each modules'

 2) We can also create a subfolders inside the a folder like we did for calculate folder and import all modules in the index file 
       -> So in the end whole folder who has the sub folder work as the complete module here and use it anywhere.

 3) Standard is a common js modules but there is another way Es modules (import and export new way of writing the code) exist.

 4) Older way work in the Non-strict mode but the new way work in the Strict mode.
 */
