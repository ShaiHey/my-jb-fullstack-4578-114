const num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    if(i % 3 === 0) document.write(`${i}<br>`);
}