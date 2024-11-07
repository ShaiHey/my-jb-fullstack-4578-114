let num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num - (i - 1); j++){
        document.write("*");
    }
    document.write("<br>");
}