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

function allNumbersIsPrime(start: number, end: number) {
    for (let i = start; i < end; i++) {
        if(isPrime(i)) document.write(`${i}<br>`);
    }
}

const num = +prompt("Please enter a start number");
const num2 = +prompt("Please enter a end number");

allNumbersIsPrime(num, num2);