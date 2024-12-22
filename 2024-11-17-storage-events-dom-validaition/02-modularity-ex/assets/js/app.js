// functions
function displayBoom() {
    console.log("Boom !");
}

function displayNumber(n) {
    console.log(`${n}`);
}

function isBoom(num) {
    return num % 7 === 0 || num.toString().includes("7");
}

function getInputFromUser() {
    return +prompt('Please enter a number');
}

function userStillWantsToContinue(input) {
    return input !== 0;
}

// main

let input = getInputFromUser();

while(userStillWantsToContinue(input)) {
    for(let i = 1; i <= input; i++){
        if(isBoom(i)) {
            displayBoom();
        } else {
            displayNumber(i);
        }
    }
    input = getInputFromUser();
}