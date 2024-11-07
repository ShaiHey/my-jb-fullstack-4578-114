let allNumbers = [];

for(let i = 1; i <= 10; i++){
    const num = +prompt("Please enter a number :");
    allNumbers.push(num);
}

document.write(`The max number is : ${Math.min(...allNumbers)}<br>List of numbers is : ${allNumbers}`);