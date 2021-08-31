// Problem Statement
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//Note: This question can also be found as a google interview question at: https://www.youtube.com/watch?v=XKu_SEDAykw

//Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//Example 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Example 3
// Input: nums = [3,3], target = 6
// Output: [0,1]

// My Solution Starts

//Explanation
//I used a approach that will give a Time Complexity of O(N)
//In the solution I am creating an empty Hash Table.
//The has table will store compliment of each element in array with relation to target: i.e arrayOfNums[0] =2 and target=9 then it will store = 9-2 = 7 as key and index 0 as value in map.
//Then I will check if the current value at index exists in the Map if yes I will return the current index and value of the key retrieved from the Map.
// The first Thing I do inside the for loop is I check whether the current value already exists in the Map if true, I return the Two index;
//If false I add the Compliment of current value with relation to the target as key and current index as value inside Map.

const testCaseArray = [2, 11, 4, 7];
const target = 9;

const mySolutionTwoSum = (arrayOfNums, target) => {
  //Create a Hash Table (Ex, Object, Set, Map) I used map as it can store both Key and Value of type any;
  const complimentMap = new Map();

  //Assigning the length to a variable will not perform same operation every time the for loop runs;
  const lengthOfArray = arrayOfNums.length;
  //Traverse through each element of the given array using loop(for, while, do...while) I used for: no particular reason;
  for (let index = 0; index < lengthOfArray; index++) {
    //Check if the current value exists in the Map;
    if (complimentMap.has(arrayOfNums[index])) {
      //If true return the Value at the key current value in the Map and the current index;
      return [complimentMap.get(arrayOfNums[index]), index];
    }
    //If false add the compliment of the current value with relation to target as Key and Current index as value in the Map
    complimentMap.set(target - arrayOfNums[index], index);
    console.table(complimentMap);
  }

  //Edge Case if No Pairs are found;
  return "No pairs found";
};

// console.log(mySolutionTwoSum(testCaseArray, target));

//Runtime : 76ms
//Memory: 41.2MB

// My Solution Ends

//Best Solution found on LeetCode Starts

//Explanation
//Here the logic is reversed than my approach instead of pushing the compliment to Hash Table. The Value itself is pushed as a key and index as a value to the hash table
//Instead of looking for the compliment in the Hash Table. Here it is checked in the condition.
//If Target-currentValue exists in the Hash Table that means it is a matching pair. i.e Target = 9 and currentValue = 7 then lookup should have 2 in it. If this condition matches it returns the current index and value of the key found in hash table.
//Instead of using for loop. Here for...in loop is used and instead of Map here JS Object is used.

const bestSolutionTwoSum = (arrayOfNums, target) => {
  //Declare and empty Hash Table to store values
  lookup = {};
  for (index in arrayOfNums) {
    //Get Current Value [Good for code readability]
    let currentValue = arrayOfNums[index];
    //Check if the compliment exists in the HashTable i.e for the matching pair here [2, 7]; Target - CurrentValue = 9-7 = 2 and if 2 exists as a key in hash table it will be true
    if (lookup[target - currentValue]) {
      //Return current index and value of the lookup[target-currentValue] which is the index of that element
      return [index, lookup[target - currentValue]];
    }
    //If the condition is false then push the currentValue as key and currentIndex as value to the Hash Table
    console.log(currentValue);
  }
};

bestSolutionTwoSum(testCaseArray, target);

//RunTime: 48ms
//Memory: N/A
//Performance Improvement: 45%

//Best Solution found on LeetCode Ends
