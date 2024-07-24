function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// Example Input
let inputArray = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(inputArray);
console.log("New Length: " + newLength); // New Length: 5
console.log(
  "Array after removing duplicates: " + inputArray.slice(0, newLength)
); // [1, 2, 3, 4, 5]

// Test Input
let testInputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
newLength = removeDuplicates(testInputArray);
console.log("New Length: " + newLength); // New Length: 5
console.log(
  "Array after removing duplicates: " + testInputArray.slice(0, newLength)
); // [1, 2, 3, 4, 5]
