function printAsterisks(end) {
    if(typeof end !== "number") return;

    for(let i = 1; i <= end; i++){
        document.write(`* `);
    }
}

function printAsterisksFinal(size) {
    if(typeof size !== "number") return;

    for(let i = size; i >= 1; i--){
        printAsterisks(i);
        document.write("<br>");
    }

    for(let i = 1; i <= size; i++){
        printAsterisks(i);
        document.write("<br>");
    }
}

printAsterisksFinal(4);