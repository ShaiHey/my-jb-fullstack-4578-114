let evenCount = 0;
let oddCount = 0;

for(let i = 1; i <= 10; i++){
    const num = +prompt("Please enter a number :");
    if(num % 2 === 0){
        evenCount++
    } else {
        oddCount++
    }
}

document.write(`Even numbers : ${evenCount}<br>Odd numbers : ${oddCount}`);