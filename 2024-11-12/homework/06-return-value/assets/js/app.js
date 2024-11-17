function getMinIndex(arr) {
  let minIndex = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[minIndex]) {
        minIndex = i;
    }
  }
  return minIndex;
}

const array1 = [5, 3, 7, 2, 4];
console.log(getMinIndex(array1));

const array2 = [1, 1, 1, 1];
console.log(getMinIndex(array2));

const array3 = [10, 20, 30, 5, 40];
console.log(findMinIndex(array3));