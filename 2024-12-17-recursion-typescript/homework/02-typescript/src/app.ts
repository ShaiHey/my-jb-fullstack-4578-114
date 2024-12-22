function isPrime(n: number) {
    if(typeof n !== "number" || isNaN(n)) return;
    if(n === 1) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

const num = +prompt("Please enter a number");
console.log(`${num} is prime ? ${isPrime(num)}`);