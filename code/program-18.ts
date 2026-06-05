// 18. Find the smallest digit in a number.

console.log(`----------------- Smallest digit in a number -----------------`);

let num:number=9614, i:number=num, smallest:number=num%10, temp:number=0;     //variables

while(i>0){                                          //while loop
    temp=i%10;                                       //store the last digit
    if(temp<smallest){                               //check whether smaller or not
        smallest=temp;                               //true than assign the value
    }
    i=Math.floor(i/10);                              //assign number after dividing with 10
}

console.log(`Original Number  : ${num}`);        //print original number
console.log(`Smallest Digit   : ${smallest}`);   //print smallest digit

console.log(`--------------------------------------------------------------`);