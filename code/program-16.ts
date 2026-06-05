// 16. Reverse a given number.

console.log(`----------------- Reverse number -----------------`);

let num:number=579, rev:number=0, i:number=num;     //variables

while(i>0){                                         //while loop
    rev=(i%10)+rev*10                               //calculate reverse number
    i=Math.floor(i/10);                             //assign number after dividing with 10
}

console.log(`Original Number  : ${num}`);   //print original number
console.log(`Reverse Number   : ${rev}`);   //print reverse number

console.log(`--------------------------------------------------`);