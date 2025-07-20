/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// console.log("Welcome to the bootcamp

// What’s Wrong?
// The error in this example is a syntax error - the ending " and ) are missing
// Correction:
console.log("Welcome to the bootcamp");

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. 
// However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = Number(numbers[i]) * 2;
  console.log(doubled);
}
// What’s Wrong?
// The error here is a runtime error, as it does not execute and crashes at runtime. 
// This is happening because the third item in the array is a string and not a number,
// but the loop tries to perform arithmetic on each item in the array. The fix here 
// would be to make sure that each item of the array is converted to a number before 
// the multiplication occurs using the Number() function. 


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
// This is a logic error - the program still runs but the output is the opposite of 
// what we expect. The error stems from the for loop - rather than saying that it should
// run while i < num, it should be i <= num. 