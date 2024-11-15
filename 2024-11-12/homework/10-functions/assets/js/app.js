function printAverageArray(arr) {
    let sum = 0;
    for(const item of arr){
        sum+=item;
    }

    document.write(`The average is ${sum / arr.length}, the numbers are ${arr}<br>`);
}

function getRandomNumber() {
    return parseInt(Math.random() * 100);
}

printAverageArray([60, 4, 90]);

const randomArray = [];

for(let i = 1; i <= 5; i++){
    randomArray.push(getRandomNumber());
}

printAverageArray(randomArray);