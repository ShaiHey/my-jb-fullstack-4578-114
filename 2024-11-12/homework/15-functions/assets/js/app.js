function printSquareAsterisks(width, height) {
    if(typeof width !== "number" && typeof height !== "number") return;

    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            const isFirstOrLastRow = i === 1 || i === height;
            const isFirstOrLastCol = j === 1 || j === width;
            const message = isFirstOrLastRow || isFirstOrLastCol ? "*" : "&nbsp;&nbsp;";
            document.write(message)
        }
        document.write("<br>");
    }

    document.write("<hr/>");
}

function randomNumber() {
    return parseInt(Math.random() * (10 - 1)) + 1;
}

printSquareAsterisks(6, 4);

printSquareAsterisks(randomNumber(), randomNumber());

const w = +prompt("Please enter a number :"); // Number of *
const h = +prompt("Please enter a number :"); // Number of line

printSquareAsterisks(w, h);