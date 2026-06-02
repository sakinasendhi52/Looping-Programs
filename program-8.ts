// 8. Print all numbers divisible by 3 and 5 between 1 and 100.

console.log(`---------- Numbers divisible by 3 and 5 between 1 and 100 ----------`);

let i:number=1;                    //variable
while(i<=100){                     //while loop
    if(i%3==0 && i%5==0){          //condition to check divisibility with 3 and 5
        console.log(i);            //print number if divisible by both 3 and 5
    }
    i++;                          //variable increment
}

console.log(`---------------------------------------------------------------------`);