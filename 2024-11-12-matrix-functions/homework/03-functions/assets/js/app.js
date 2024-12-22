function printMessageTenTimes(str) {
    for(let i=1; i <= 10; i++){
        document.write(`${str}<br>`);
    }
}

printMessageTenTimes("Full Stack");

const text = prompt("Please enter a message:");

printMessageTenTimes(text)