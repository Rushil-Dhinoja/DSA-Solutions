//Problem Statement
//Difficulty: Easy
// Staircase detail
// This is a staircase of size n =4:

//    #
//   ##
//  ###
// ####

//Solution Starts
//Explanation
//Note: In this solution some methods are used which are JavaScript Specific
//In this we will first of declare an empty array of size same as N;
//After that we will loop until i = 0 and in the beginning i will be n-1;
//We will replace the i (th) element with the '#' symbol and use the join() method to console log a string;

const inputData = 4;

function stairCase(n) {
  //Create an empty array of size n and fill it with blank space
  const newArray = Array(n).fill(" ");
  //Loop until i = 0;
  for (let i = n - 1; i >= 0; i--) {
    //Replace the i (th) element of array with '#'
    newArray[i] = "#";
    //Log the string array using join() function
    console.log(newArray.join(""));
  }
}

stairCase(inputData);

//Time Complexity: O(n)
//Solution Ends
