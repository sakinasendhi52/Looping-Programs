// 15. Count the total digits in a number.

console.log(`----------------- Count the total digits -----------------`);

let num:number=9083,count:number=0, i:number=num;         //variables
while(i>0){                                               //while loop
    i=Math.floor(i/10);                                   //assign number after dividing with 10
    count++;                                              //increment count variable
}

console.log(`The total digits in ${num} is ${count}.`);   //output

console.log(`----------------------------------------------------------`);