const first = +prompt("Please enter first number :");
const num = +prompt("Please enter a number :");
const last = +prompt("Please enter last number :");
let start;
let end;

if(first < last) {
    start = first;
    end = last;
} else {
    start = last;
    end = first;
}

for(let i = start; i <= end; i++){
    if(i % num === 0) document.write(`${i}<br>`);
}