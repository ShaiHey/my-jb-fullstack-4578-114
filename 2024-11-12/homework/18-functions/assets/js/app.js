function printNumbers(end) {
    if(typeof end !== "number") return;

    for(let i = 1; i <= end; i++){
        document.write(`${i} `);
    }
}

function printAsterisks(end) {
    if(typeof end !== "number") return;

    for(let i = 1; i <= end; i++){
        document.write(`* `);
    }
}

function printReverseNumbersAndAsterisksCount(size) {
    if(typeof size !== "number") return;

    for(let i = size; i >= 1; i--){
        printNumbers(i);
        printAsterisks(i);
        document.write("<br>");
    }
}

printReverseNumbersAndAsterisksCount(4);