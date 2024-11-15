function printArray(arr) {
    for(const item of arr){
        document.write(`${item}, `);
    }
}

function getRandomNumber() {
    return parseInt(Math.random() * 100);
}

printArray([60, 4, 90]);

const randomArray = [];

for(let i = 1; i <= 5; i++){
    randomArray.push(getRandomNumber());
}

printArray(randomArray);