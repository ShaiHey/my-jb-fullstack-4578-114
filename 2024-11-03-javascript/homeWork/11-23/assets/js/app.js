let evenCount = 0;
let oddCount = 0;

let num = +prompt("Please enter a number :");
let i = num;

while (i > 0) {
    if(num % 2 === 0){
        evenCount++
    } else {
        oddCount++
    }
    num = +prompt("Please enter a number :");
    i = num;
}

document.write(`Even numbers : ${evenCount}<br>Odd numbers : ${oddCount}`);