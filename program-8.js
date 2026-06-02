"use strict";
// 8. Print all numbers divisible by 3 and 5 between 1 and 100..
console.log(`---------- Numbers divisible by 3 and 5 between 1 and 100 ----------`);
let i = 1; //variable
while (i <= 100) { //while loop
    if (i % 3 == 0 && i % 5 == 0) { //condition to check divisibility by 3 and 5
        console.log(i); //print number if divisible by 3 and 5
    }
    i++; //variable increment
}
console.log(`---------------------------------------------------------------------`);
