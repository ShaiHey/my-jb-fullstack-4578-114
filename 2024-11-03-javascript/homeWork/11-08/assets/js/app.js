const num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    document.write(`${i}<br>`);
}

document.write("<hr/>");

for(let i = num; i >= 1; i--){
    document.write(`${i}<br>`);
}