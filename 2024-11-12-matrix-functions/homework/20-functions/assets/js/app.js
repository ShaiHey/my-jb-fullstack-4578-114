function printShape(num) {
    for(let row = 1; row <= num; row++){
        printBlanks(num, row);
        printColLeft(row);
        printColRight(row);
        document.write("<br>");
    }
}

function printBlanks(num, row) {
    for(let blanksLeft = 1; blanksLeft <= num - row; blanksLeft++){
        document.write("&nbsp;&nbsp;")
    }
}

function printColLeft(row) {
    for(let colLeft = 1; colLeft <= row; colLeft++){
        document.write(colLeft);
    }
}

function printColRight(row) {
    for(let colRight = row - 1; colRight >= 1; colRight--){
        document.write(colRight);
    }
}

const number = +prompt("Please enter a number :");

printShape(number);