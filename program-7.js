"use strict";
// 7. Print all numbers divisible by 5 between 1 and 50.
console.log(`------------- Numbers divisible by 5 between 1 and 50 -------------`);
let i = 1;
while (i <= 50) {
    if (i % 5 == 0) {
        console.log(i);
    }
    i++;
}
console.log(`------------------------------------------------------------------`);
