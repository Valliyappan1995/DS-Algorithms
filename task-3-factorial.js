function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Example Input
let n = 5;
console.log("Factorial of " + n + ": " + factorial(n)); // Factorial of 5: 120

// Test Input
n = 10;
console.log("Factorial of " + n + ": " + factorial(n)); // Factorial of 10: 3628800
