const num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    let iString = i.toString();
    if(i % 7 === 0 || iString.includes("7")){
        document.write("Boom !<br>");
    } else {
        document.write(`${i}<br>`)
    }
}