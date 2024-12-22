function printSquareAsterisks(n) {
    if(typeof n !== "number") return;
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            document.write("*")
        }
        document.write("<br>")
    }
}

let num = +prompt("Please enter a number :");

printSquareAsterisks(num);