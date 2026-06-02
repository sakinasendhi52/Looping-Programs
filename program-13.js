"use strict";
// 13. Generate multiplication tables from 1 to 10.
console.log(`---------------- Multiplication Table from 1 to 10 ---------------`);
for (let num = 1; num <= 10; num++) {
    console.log(`Multiplication Table for ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log();
}
console.log(`-----------------------------------------------------------`);
