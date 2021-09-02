//Problem Statement
//Difficulty: Easy
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

//Example 1:
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

//Example 2:
// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

//I have solved this ans in two approach both of which can be easily implemented in all the language but I have also given an JavaScript specific approach which solves this in one line

const nums = [1, 2, 1];

//First Approach - Conditional Approach Starts
//Explanation
//In this approach we are looping through the array until the i is less length*2;
//We check on condition if the i is length of array if yes we push the i(th) element to the newArray, if not then we push the i - length (th) element to the newArray

function conditionalApproach(inputArray) {
  //Get the length of the array
  const lengthOfArray = inputArray.length;
  //Define new Empty array
  const newArray = [];

  //Loop thorough until i is less than length *2
  for (let i = 0; i < lengthOfArray * 2; i++) {
    //Check if i is less than length
    if (i < lengthOfArray) {
      //if yes push the i(th) element to the array
      newArray.push(inputArray[i]);
    } else {
      //else push the i - length th element to the new array
      newArray.push(inputArray[i - lengthOfArray]);
    }
  }
  //Return newArray as an output
  return newArray;
}

console.log(conditionalApproach(nums));
//Time Complexity: O(n)
//First Approach - Conditional Approach Ends

//Second Approach - Pushing two elements at once Starts
//Explanation
//In this approach we will create an empty array of size length *2 at beginning and then loop through the given array and push i(th) element to both newArray[i] and newArray[i+length]

function pushingTwoElementsApproach(inputArray) {
  //Get the length of array
  const lengthOfArray = inputArray.length;
  //Create an empty array of size length*2
  const newArray = Array(lengthOfArray * 2);
  //Loop through given array
  for (let i = 0; i < lengthOfArray; i++) {
    //Push to the new array at i(th) index and i + length (th) index
    newArray[i] = inputArray[i];
    newArray[i + lengthOfArray] = inputArray[i];
  }
  //Return the newArray
  return newArray;
}

console.log(pushingTwoElementsApproach(nums));
//Time Complexity: O(n)
//Second Approach - Pushing two elements at once ends

//Third Approach - One line JavaScript Specific
//Explanation
//We use spread operator to return the given array twice
function oneLineJSSpecific(inputArray) {
  return [...inputArray, ...inputArray];
}

console.log(oneLineJSSpecific(nums));
//Time Complexity: O(n)
//Third Approach = One line JavaScript Specific
