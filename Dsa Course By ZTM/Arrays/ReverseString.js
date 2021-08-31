//Problem Statement
//Difficulty: Easy
//Create Function that reverses a string:

//Example 1
//Input = 'Hi my name is Rushil'
//Output = 'lihsur si eman ym iH'

//Solution

//Explanation
//Here in JavaScript we treat strings as an array and so we can loop over the string.
//We start the loop from the last element and one by add it to the new string, i.e the last character in string will be the first character in the reverseString;

function reverseString(string) {
  // Create an empty string
  let reverseString = "";
  // Determine the length of the String
  const lengthOfString = string.length;
  //Loop thorough every element of the string from last to first
  for (let i = lengthOfString - 1; i >= 0; i--) {
    //Add the element to the new string
    reverseString += string[i];
  }
  // Return the String
  return reverseString;
}

console.log(reverseString("Hi my name is rushil"));

//Solution Ends
