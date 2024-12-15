"use strict";

(() => {
  const grades =  [99, 78, 87, 65, 66, 64, 99, 92, 80];
  const grades2 = [64, 65, 66, 78, 80, 87, 92, 99, 99];

  const input = +prompt("Enter a number to check if it is in the array");

  // a function to find an item un an un-sorted array
  // O is O(n)
  const result = grades.find(grade => grade === input);

  console.log(result ? "In the array" : "Not in the array");

  // a function to find an item un an sorted array (only)
  // O is 0(log2n)
  const isGradeInGradesSorted = (grades, search) => {
    let startIndex = 0;
    let finishIndex = grades.length - 1;

    do {
      let currentIndex = Math.floor((finishIndex + startIndex) / 2);
      if(grades[currentIndex] === search) return currentIndex;

      if(grades[currentIndex] > search) {
        finishIndex = currentIndex - 1;
      } else {
        startIndex = currentIndex + 1;
      }
    } while (finishIndex >= startIndex);

    return "Not in the array";
  }

  const result2 = isGradeInGradesSorted(grades2, input);
  console.log(result2);
  
})();