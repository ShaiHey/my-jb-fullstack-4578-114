function showSmiley(number) {
    switch (number) {
        case 1:
            document.write(":-)<br>");
            break;
        case 2:
            document.write(":-(<br>");
            break;
        case 3:
            document.write(":-/<br>");
            break;
        case 4:
            document.write(";-)<br>");
            break;
        case 5:
            document.write(";-(<br>");
            break;
        default:
            document.write("Invalid, please enter a number between 1 and 5.");
    }
}

function randomNumber() {
   return Math.floor(Math.random() * 5) + 1;
}

showSmiley(4);

const numberUser = +prompt("Please enter a number between 1 and 5:");
showSmiley(numberUser);

showSmiley(randomNumber());

function showAllSmileys() {
    for (let i = 1; i <= 5; i++) {
        showSmiley(i);
    }
}

function show100RandomSmileys() {
    for (let i = 0; i < 100; i++) {
        showSmiley(randomNumber());
    }
}

showAllSmileys();

show100RandomSmileys();