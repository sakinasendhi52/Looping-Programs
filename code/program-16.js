"use strict";
// 16. Reverse a given number.
console.log(`----------------- Reverse number -----------------`);
let num = 579, rev = 0, i = num; //variables
while (i > 0) { //while loop
    rev = (i % 10) + rev * 10;
    i = Math.floor(i / 10); //assign number after dividing with 10
}
console.log(`Original Number  : ${num}`); //output
console.log(`Reverse Number   : ${rev}`); //output
console.log(`--------------------------------------------------`);
