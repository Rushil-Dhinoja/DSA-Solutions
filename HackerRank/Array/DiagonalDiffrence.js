//Problem Statement
//Difficulty: Easy
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15
// The left-to-right diagonal = 3 + 5 + 9 = 17
// Their absolute difference is |15 - 17| = 2

//Example 1
// 11 2 4
// 4 5 6
// 10 8 -12
//Output 15

//Solution Starts

//Explanation
//Here first of all we have to understand that given that it is a square matrix the length of the inputData will be equal to the length of array on every index that means if length of inputData = 3 then length of inputData[0] = 3;
//From this we can loop through the inputArray until the length is less than length of inputArray
//Now, first of all we will declare 4 variables two for holding the sum of both the diagonals and two for holding the currentIndex of both the diagonals;
//Index of first diagonal will be 0
//Index of second diagonal will be inputArray.length - 1;
//Then, we will loop through all the elements of inputArray while adding the sum of inputArray[index][i] to sum of first diagonal and inputArray[index][j] to second diagonal;
//when the loop ends we will return the absolute difference of both the diagonals

const inputData = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function getDiagonalDifference(inputArray) {
  //Variable to hold sum of fist diagonal (Left to Right)
  let firstDiagonalSum = 0;
  //Variable to hold sum of fist diagonal (Right to Left)
  let secondDiagonalSum = 0;
  //Variable to keep hold of index of first diagonal
  let i = 0;
  //Variable to keep hold of index of second diagonal
  let j = inputArray.length - 1;

  //Loop thorough the input array.
  for (let index = 0; index < inputArray.length; index++) {
    //Add sum to first diagonal
    firstDiagonalSum += inputArray[index][i];
    //Add sum to second diagonal
    secondDiagonalSum += inputArray[index][j];
    //Increase the index of first diagonal
    i++;
    //Decrease the index of first diagonal
    j--;
  }
  //Return absolute difference
  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

console.log(getDiagonalDifference(inputData));

//Time Complexity: O(n)
//Solution Ends
