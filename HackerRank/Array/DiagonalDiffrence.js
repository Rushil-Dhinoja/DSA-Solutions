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
const inputData = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function getDiagonalDifference(inputArray) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let i = 0;
  let j = inputArray.length - 1;

  for (let index = 0; index < inputArray.length; index++) {
    firstDiagonalSum += inputArray[index][i];
    secondDiagonalSum += inputArray[index][j];
    i++;
    j--;
  }

  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

console.log(getDiagonalDifference(inputData));

//Solution Ends
