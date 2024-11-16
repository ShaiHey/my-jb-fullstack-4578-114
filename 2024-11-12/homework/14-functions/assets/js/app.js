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

function printSquareAsterisksCount(w, h, count){
    if(typeof count !== "number") return;

    for(let i = 1; i <= count; i++){
        printSquareAsterisks(w, h);
    }
}

function randomNumber() {
    return parseInt(Math.random() * (10 - 1)) + 1;
}

const countUser = +prompt("Please enter a number:");

printSquareAsterisksCount(randomNumber(), randomNumber(), countUser);