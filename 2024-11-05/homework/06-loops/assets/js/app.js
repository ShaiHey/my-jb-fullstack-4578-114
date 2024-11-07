let width = +prompt("Please enter a number :"); // Number of *
let height = +prompt("Please enter a number :"); // Number of line

for(let i = 1; i <= height; i++){
    for(let j = 1; j <= width; j++){
        document.write("*")
    }
    document.write("<br>")
}