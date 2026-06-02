"use strict";
// 19. Check whether a number is a palindrome or not.
console.log(`--------------------- Palindrome Checker ---------------------`);
let num = 76167, rev = 0, i = num; //variables
while (i > 0) { //while loop
    rev = (i % 10) + rev * 10; //calculate reverse number
    i = Math.floor(i / 10); //assign number after dividing with 10
}
if (num == rev) { //condition for palindrome
    console.log(`${num} is a Palindrome.`); //print if it is palindrome
}
else {
    console.log(`${num} is not a Palindrome.`); //print if it is not palindrome
}
console.log(`--------------------------------------------------------------`);
