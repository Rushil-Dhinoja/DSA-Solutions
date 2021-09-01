//Problem Statement
//Difficulty: Easy
//Create a function that merges two sorted array while maintaining the order

//Example
//Input arrayOne=[0,3,4,31] arrayTwo=[4,6,30]
//Output [0,3,4,4,6,30,31]

//Test Data
const arrayOne = [0, 4, 4, 31];
const arrayTwo = [1, 4, 6, 7, 9, 30];

//Explanation
//Here first of all we check for the edge cases if an one of the array is empty we return the other one;
//Then we define two variables each one pointing to the first element of the each array and then define a variable to maintain index of each array, i.e that index is defined 1 in the beginning because we already defined 0th element as two variables
//Then we loop through it until any one of the variable has value
//Inside the loop we check the condition such that, if the arrayTwoElement is there and then if arrayOneElement is smaller than arrayTwoElement, if condition turns true we push thee current arrayOneElement to the new array and increase the currentIndexArrayOne by 1, if the condition is false then we add the arrayTwoElement to the mergeArray and increase th currentIndexArrayTwo b one;
//In the end return the merged array;

//My solution Starts

function mergeTwoSortedArray(arrayOne, arrayTwo) {
  //Edge Case to check if arrayOne is empty
  if (arrayOne.length === 0) {
    // If yes return arrayTwo
    return arrayTwo;
  }
  //Edge Case to check if arrayTwo is empty
  if (arrayTwo.length === 0) {
    //If yes return arrayTwo
    return arrayOne;
  }

  //Variables for defining currentIndex and current value of first element in both the arrays
  let arrayOneElement = arrayOne[0];
  let currentIndexArrayOne = 1;

  let arrayTwoElement = arrayTwo[0];
  let currentIndexArrayTwo = 1;
  //Declare an empty array
  const mergedArray = [];

  //Loop thorough until both elements are undefined
  while (arrayOneElement || arrayTwoElement) {
    //Check if arrayTwoElement is undefined or not or check if arrayOneElement is less than arrayTwoElement
    if (!arrayTwoElement || arrayOneElement < arrayTwoElement) {
      //If true push the arrayOneElement to the new Array
      mergedArray.push(arrayOneElement);
      //Update the arrayOneElement
      arrayOneElement = arrayOne[currentIndexArrayOne];
      //Increment the currentIndexArrayOne by one
      currentIndexArrayOne++;
    } else {
      //If false, push the arrayTwoElement to the new Array
      mergedArray.push(arrayTwoElement);
      //Update the arrayTwoElement
      arrayTwoElement = arrayTwo[currentIndexArrayTwo];
      //Increment the currentIndexArrayTwo by one
      currentIndexArrayTwo++;
    }
  }
  //In the end return the new array
  return mergedArray;
}

console.log(mergeTwoSortedArray(arrayOne, arrayTwo));

//Runtime: N/A
//Memory: N/A
//Time Complexity: O(n)
//My Solution Ends
