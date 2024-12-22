function printMessageManyTimes(str, long) {
    if(typeof long !== "number") return;

    for(let i=1; i <= long; i++){
        document.write(`${str}<br>`);
    }
}

printMessageManyTimes("Full Stack", 2);

const text = prompt("Please enter a message:");
const count = +prompt("Please enter a count:");

printMessageManyTimes(text, count);