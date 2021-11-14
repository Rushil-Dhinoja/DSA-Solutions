//Problem Statement
//Difficulty: Easy
//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Example 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

//Example 3
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const nums = [3, 1, 2, 10, 1];

//Solution Starts
//Explanation
//In here first of all we declare a newArray and set the first element of that array same as the first element of the inputArray.
//Then we loop through the inputArray starting from 1 and then setting the newArray[i] = newArray[i-1] + inputArray[i] and then return the newArray
function runningSum(inputArray) {
  //Get the length of the array
  const lengthOfArray = inputArray.length;
  //Define a new array
  const newArray = [];
  //Set the first element of new array as first element of input array
  newArray[0] = inputArray[0];
  //Loop through the array starting from 1
  for (let i = 1; i < lengthOfArray; i++) {
    //Set the i (th) element of new array
    newArray[i] = newArray[i - 1] + inputArray[i];
  }

  //Return newArray
  return newArray;
}

console.log(runningSum(nums));

//Time Complexity: O(n)
//Solution Ends
