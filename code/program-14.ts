// 14. Find the factorial of a number.

console.log(`--------------------- Factorial of 5 ---------------------`);

let num:number=5, factorial:number=1;                      //variable

for(let i=1; i<=num; i++){                                  //for loop
    factorial=factorial*i;                                  //calculate factorial
}

console.log(`The Factorial of ${num} is ${factorial}.`);   //output

console.log(`----------------------------------------------------------`);