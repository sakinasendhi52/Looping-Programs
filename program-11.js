"use strict";
// 11. Find the sum of all odd numbers from 1 to 50.
console.log(`---------------- Sum of all odd numbers from 1 to 50 ---------------`);
let i = 1, sum = 0; //variable
while (i <= 50) { //while loop
    if (i % 2 != 0) { //condition for odd number
        sum += i; //add number if number is odd
    }
    i++; //variable increment
}
console.log(`The sum of all odd numbers from 1 to 50 is ${sum}.`); //print output
console.log(`---------------------------------------------------------------------`);
