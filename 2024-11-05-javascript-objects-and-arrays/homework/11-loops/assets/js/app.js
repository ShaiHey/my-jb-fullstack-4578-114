let num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
        document.write(j)
    }
    document.write("<br>")
}

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num - i; j++){
        document.write(j);
    }
    document.write("<br>");
}