function writeLineOfAsterisks(n) {
    for(let i = 0; i < n; i++){
        document.write("*");
    }
}

function writeSquareAsterisks(m) {
    for(let row = 0; row < m; row++){
        writeLineOfAsterisks(m);
        document.write("<br>");
    }
}

writeLineOfAsterisks(5);
document.write("<hr>");
writeLineOfAsterisks(8);
document.write("<hr>");

writeSquareAsterisks(5);
document.write("<hr>");
writeSquareAsterisks(8);