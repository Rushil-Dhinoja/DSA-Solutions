//Problem Statement
//Difficulty: Easy
//Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

//Example 1
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]

//Example 2
// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

//My Solution Starts
//Explanation
//Here we have to create new array where each element in the array is index of current value; i.e. newArray[0] = inputArray[inputArray[i]] = inputArray[5] = 4
//So to achieve this we have to loop through every element in the array and Push the newElement to the new array i.e newArray[i] = inputArray[inputArray[i]]

const testData = [5, 0, 1, 2, 3, 4];

function arrayFromPermutations(inputArray) {
  //Create an empty array
  let newArray = [];
  //Determine the length of input array
  const lengthOfArray = inputArray.length;
  //Loop thorough the inputArray
  for (let index = 0; index < lengthOfArray; index++) {
    //Push the element to new array.
    newArray[index] = inputArray[inputArray[index]];
  }
  //return the new array
  return newArray;
}

console.log(arrayFromPermutations(testData));

//Time Complexity: O(n)
//My Solution Ends
