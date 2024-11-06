const first = +prompt("Please enter first number :");
const num = +prompt("Please enter a number :");
const last = +prompt("Please enter last number :");

for(let i = first; i <= last; i++){
    if(i % num === 0) document.write(`${i}<br>`);
}