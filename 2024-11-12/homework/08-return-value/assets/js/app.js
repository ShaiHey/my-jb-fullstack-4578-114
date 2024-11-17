function getAverageInMatrix(arr) {
  let sum = 0;
  let count = 0;
  for(const row of arr){
      for(const cell of row){
          sum += cell;
      }
      count += row.length;
  }

  return sum/count
}

const array1 = [
  [10, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 110, 120]
];

console.log(getAverageInMatrix(array1));

const array2 = [
  [12, 23, 34, 45],
  [56, 67, 78, 89],
  [10, 20, 30, 40]
];

console.log(getAverageInMatrix(array2));

const array3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

console.log(getAverageInMatrix(array3));