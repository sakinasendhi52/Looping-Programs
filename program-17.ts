// 17. Find the largest digit in a number.

console.log(`----------------- Largest digit in a number -----------------`);

let num:number=1274, i:number=num, largest:number=0, temp:number=0;     //variables

while(i>0){                                         //while loop
    temp=i%10;                                      //store the last digit
    if(temp>largest){                               //check whether greater or not
        largest=temp;                               //true than assign the value
    }
    i=Math.floor(i/10);                             //assign number after dividing with 10
}

console.log(`Original Number  : ${num}`);       //print original number
console.log(`Largest Digit    : ${largest}`);   //print largest digit

console.log(`--------------------------------------------------------------`);