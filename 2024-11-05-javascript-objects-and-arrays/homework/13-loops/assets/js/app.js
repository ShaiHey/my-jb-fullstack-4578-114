const width = +prompt("Please enter a number :"); // Number of *
const height = +prompt("Please enter a number :"); // Number of line

for(let i = 1; i <= height; i++){
    for(let j = 1; j <= width; j++){
        const isFirstOrLastRow = i === 1 || i === height
        const isFirstOrLastCol = j === 1 || j === width
        const message = isFirstOrLastRow || isFirstOrLastCol ? "*" : "&nbsp;&nbsp;"
        document.write(message)
    }
    document.write("<br>")
}