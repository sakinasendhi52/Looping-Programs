"use strict";
// 15. Count the total digits in a number.
console.log(`----------------- Count the total digits -----------------`);
let num = 9083, count = 0, i = num; //variable
while (i > 0) {
    i = Math.floor(i / 10);
    count++;
}
console.log(`The total digits in ${num} is ${count}.`); //output
console.log(`----------------------------------------------------------`);
