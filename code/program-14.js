"use strict";
// 14. Find the factorial of a number.
console.log(`--------------------- Factorial of 5 ---------------------`);
let num = 5, factorial = 1; //variable
for (let i = 1; i <= num; i++) { //for loop
    factorial = factorial * i; //calculate factorial
}
console.log(`The Factorial of ${num} is ${factorial}.`); //output
console.log(`----------------------------------------------------------`);
