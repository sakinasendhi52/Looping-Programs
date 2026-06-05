// 10. Find the sum of all even numbers from 1 to 50.

console.log(`---------------- Sum of all even numbers from 1 to 50 ---------------`);

let i:number=1, sum:number=0;                    //variable
while(i<=50){                                    //while loop
    if(i%2==0){                                  //condition for even number
        sum+=i;                                  //add number if number is even
    }
    i++;                                         //variable increment
}

console.log(`The sum of all even numbers from 1 to 50 is ${sum}.`);        //print output

console.log(`---------------------------------------------------------------------`);