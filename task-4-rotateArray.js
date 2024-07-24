function rotateArray(nums, k) {
  // Function to reverse a portion of the array
  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  // Get the length of the array
  let n = nums.length;
  // Ensure k is within the bounds of the array length
  k = k % n;
  // Reverse the entire array
  reverse(nums, 0, n - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, n - 1);
}

// Example Input
let inputArray = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArray(inputArray, k);
console.log("Rotated Array: " + inputArray); // Rotated Array: [5, 6, 7, 1, 2, 3, 4]

// Test Input
let testInputArray = [3, 8, 9, 2, 5];
k = 2;
rotateArray(testInputArray, k);
console.log("Rotated Array: " + testInputArray); // Rotated Array: [2, 5, 3, 8, 9]
