function printSquareAsterisks(w, h){
    if(typeof w !== "number" && typeof h !== "number") return;

    for(let i = 1; i <= h; i++){
        for(let j = 1; j <= w; j++){
            document.write("*")
        }
        document.write("<br>")
    }
}

const width = +prompt("Please enter a width :"); // Number of *
const height = +prompt("Please enter a height :"); // Number of line

printSquareAsterisks(width, height);