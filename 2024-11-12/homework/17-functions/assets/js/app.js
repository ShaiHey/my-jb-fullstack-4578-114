function printReverseAsterisks(start) {
    if(typeof start !== "number") return;

    for(let i = start; i >= 1; i--){
        document.write(`* `);
    }
}

function printReverseAsterisksCount(size) {
    if(typeof size !== "number") return;

    for(let i = size; i >= 1; i--){
        printReverseAsterisks(i);
        document.write("<br>");
    }
}

printReverseAsterisksCount(4);