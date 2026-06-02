// 7. Print all numbers divisible by 5 between 1 and 50.

console.log(`------------- Numbers divisible by 5 between 1 and 50 -------------`);

let i:number=1;                   //variable
while(i<=50){                     //while loop
    if(i%5==0){                   //condition to check divisibility by 5
        console.log(i);           //print number if divisible by 5
    }
    i++;                          //variable increment
}

console.log(`------------------------------------------------------------------`);