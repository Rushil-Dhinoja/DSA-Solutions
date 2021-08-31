// Problem Statement
//Difficulty Easy
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Example 1
// Input: nums = [1,2,3,1]
// Output: true

//Example 2
//Input: nums = [1,2,3,4]
// Output: false

//Example 3
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//Luckily for this question the Solution I came with was also the best solution

const testData = [1, 2, 3, 1];

//My Solution Starts

//Note: This Solution is only applicable for JavaScript Friendly developers if want to see a classic looping version you can go below;

//Explanation
//Here the we are Using Set which is a kind of in built Hash Table in JavaScript
//In Set it can only contain Unique Values so when we create a new set with the numbers given the duplicates are removed by automatically;
//In the end we compare the size of Input Array and our Hash Table if it is same that means there are no duplicates and if they are different that means there are duplicates present;

function containsDuplicate(numbers) {
  // Create a new Set with Input Array
  const dataSet = new Set(numbers);
  //Check if the size is same
  if (numbers.length === dataSet.size) {
    //If true return false
    return false;
  }
  //If false return true
  return true;
}

console.log(containsDuplicate(testData));

//RunTime: 68ms
//Memory 45.2MB
//Time Complexity: O(1)
//My Solution Ends

//Looping Version Starts

//This Version is also implemented in JavaScript but can be easily implemented in any other Language of your choice

//Explanation
//In this approach instead of using any inbuilt Hash Tables such as Set or Map we are using classic Object which has alternatives in all the languages.
//The Object(Hash Table) in JavaScript also doesn't allow duplicate keys.
//We loop over the given array and check if the Objects has the current element and if not then we add that to the Object(Hash Table)
//Now, whenever the element is repeated the condition return true and we can return our answer, if at the end of the loop noting is returned we by default return false

function classicContainsDuplicate(numbers) {
  //Create an HashTable
  dataHash = {};
  //Get the size of the input array
  const lengthOfInput = numbers.length;
  //Loop over the complete array
  for (let index = 0; index < lengthOfInput; index++) {
    //Check if element is already present in the HashTable
    if (dataHash[numbers[index]]) {
      //If condition matches return true
      return true;
    }
    //If condition return false add the element to Hash Table
    dataHash[numbers[index]] = true;
  }
  //By default return false
  return false;
}

//RunTime: N/A
//Memory N/A
//Time Complexity: O(n)

console.log(classicContainsDuplicate(testData));

//Looping Version Ends
