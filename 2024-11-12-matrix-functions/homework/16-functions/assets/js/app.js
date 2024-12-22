function printReverseNumbers(start) {
    if(typeof start !== "number") return;

    for(let i = start; i >= 1; i--){
        document.write(`${i} `);
    }
}

function printReverseNumbersCount(size) {
    if(typeof size !== "number") return;

    for(let i = size; i >= 1; i--){
        printReverseNumbers(i);
        document.write("<br>");
    }
}

printReverseNumbers(5);

document.write("<hr/>")

printReverseNumbersCount(5);