// 20. Check whether a number is an Armstrong number or not.

console.log(`------------------ Armstrong Number Checker ------------------`);

let num:number=9474, temp:number=0, i:number=num;     //variables
let digits:number = num.toString().length;           //count digits

while(i>0){                                         //while loop
    temp=temp+(i%10)**digits;                       //store number after calculation
    i=Math.floor(i/10);                             //assign number after dividing with 10
}

if(num==temp){                                             //check condition
    console.log(`${num} is an Armstrong Number.`);         //print if it is Armstrong
}
else
{
    console.log(`${num} is not an Armstrong Number.`);     //print if it is not Armstrong
}

console.log(`--------------------------------------------------------------`);