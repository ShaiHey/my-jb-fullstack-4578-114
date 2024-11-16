function printSquareAsterisks(w, h){
    if(typeof w !== "number" && typeof h !== "number") return;

    for(let i = 1; i <= h; i++){
        for(let j = 1; j <= w; j++){
            document.write("*")
        }
        document.write("<br>")
    }

    document.write("<hr/>");
}

function randomNumber() {
    return parseInt(Math.random() * 100);
}

printSquareAsterisks(6, 4);

printSquareAsterisks(randomNumber(), randomNumber());

const width = +prompt("Please enter a width :"); // Number of *
const height = +prompt("Please enter a height :"); // Number of line

printSquareAsterisks(width, height);