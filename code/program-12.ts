// 12. Generate the multiplication table of a given number.

console.log(`---------------- Multiplication Table for 9 ---------------`);

let i:number=1,num:number=9;                       //variable

do{                                                //do while loop
    console.log(`${num} x ${i} = ${num*i}`);       //print multiple
    i++;                                           //increment variable
}
while(i<=10);                                      //condition

console.log(`-----------------------------------------------------------`);