"use strict";
// 17. Find the largest digit in a number.
console.log(`----------------- Largest digit in a number -----------------`);
let num = 1274, i = num, largest = 0, temp = 0; //variables
while (i > 0) { //while loop
    temp = i % 10;
    if (temp > largest) {
        largest = temp;
    }
    i = Math.floor(i / 10); //assign number after dividing with 10
}
console.log(`Original Number  : ${num}`); //print original number
console.log(`Largest Digit    : ${largest}`); //print reverse number
console.log(`--------------------------------------------------------------`);
