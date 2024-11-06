const start = +prompt("Please enter a number :");
const end = +prompt("Please enter another number :");

for(let i = end; i >= start; i--){
    document.write(`${i}<br>`);
}