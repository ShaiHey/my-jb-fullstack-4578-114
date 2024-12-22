function isPrime(n) {
  if(typeof n !== "number" || isNaN(n)) return;
  for(let i = 2; i < n; i++){
      if(n % i === 0){
          return false;
      }
  }
  return true;
}

function getIsPrimeArray(arr) {
  for(const num of arr){
    if(!isPrime(num)){
      return false;
    }
  }

  return true;
}

const array = [1, 30, 1];
console.log(`${array} have is prime ? ${getIsPrimeArray(array)}`);

const array2 = [1, 1, 1];
console.log(`${array2} have is prime ? ${getIsPrimeArray(array2)}`);