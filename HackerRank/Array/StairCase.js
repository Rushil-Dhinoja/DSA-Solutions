//Problem Statement
//Difficulty: Easy
// Staircase detail
// This is a staircase of size n =4:

//    #
//   ##
//  ###
// ####

//Solution Starts

const inputData = 4;

function stairCase(n) {
  const newArray = Array(n).fill(' ');
  for (let i = n - 1; i >= 0; i--) {
    newArray[i] = '#';
    console.log(newArray.join(''));
  }
}

stairCase(inputData);

//Solution Ends
