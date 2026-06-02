// 13. Generate multiplication tables from 1 to 10.

console.log(`---------------- Multiplication Table from 1 to 10 ---------------`);

for(let num=1;num<=10;num++){                               //for outer loop
    console.log(`Multiplication Table for ${num}`);         //heading
    
    for(let i=1; i<=10; i++){                               //for inner loop
        console.log(`${num} x ${i} = ${num*i}`);            //multiplication print
    }

    console.log();                                          //for new line
}

console.log(`-----------------------------------------------------------`);