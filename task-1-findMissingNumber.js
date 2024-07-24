function findMissingNumber(arr) {
  let n = arr.length + 1; // Since one number is missing
  let totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  let arraySum = arr.reduce((acc, num) => acc + num, 0); // Sum of numbers in the array
  let missingNumber = totalSum - arraySum; // The missing number
  return missingNumber;
}

// Example Input
let inputArray = [1, 2, 3, 4, 6, 7, 8];
console.log("Missing Number: " + findMissingNumber(inputArray));

// Test Input
let testInputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Missing Number: " + findMissingNumber(testInputArray));
