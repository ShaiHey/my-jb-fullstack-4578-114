const num1 = +prompt("Please enter a number :");
const num2 = +prompt("Please enter another number :");
let start;
let end;

if(num1 < num2){
    start = num1;
    end = num2;
} else {
    start = num2;
    end = num1;
}

for(let i = end; i >= start; i--){
    document.write(`${i}<br>`);
}