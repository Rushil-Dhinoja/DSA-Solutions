//Problem Statement
//Difficulty: Easy
//Given an array return the first character that is repeated

//Example 1
//Input [2,5,1,2,3,5,1,2,4]
//It should return 2

//Example 2
//Input [2,1,1,2,3,5,1,2,4];
//It should return 1

//Example 3
//Input [2,3,4,5];
//It should return undefined

//Solution Starts
//Explanation
//In here we have an array and have to return the first recurring character.
//Fist of all we will create and empty HashTable and loop through the given array.
//Inside the loop we will check if the current element already exists in the lookup HashTable if yes we will return the current element and if false we will add the current element to the HashTable so that when ever it is repeated we can return;

const input = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(inputArray) {
  //Get the length of the InputArray
  const lengthOfArray = inputArray.length;
  //Create an empty HashTable
  lookupTable = {};
  //Loop through the given array
  for (let i = 0; i < lengthOfArray; i++) {
    // Check if the element exists in the lookup HashTable
    if (lookupTable[inputArray[i]]) {
      //If true return the element
      return inputArray[i];
    }
    //If false add the current element to the lookup table.
    lookupTable[inputArray[i]] = true;
  }

  //If there are no recurring characters then return undefined
  return undefined;
}

console.log(firstRecurringCharacter(input));

//Time Complexity: O(n)
//Solution Ends
