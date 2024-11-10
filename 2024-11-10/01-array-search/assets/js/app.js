const numbers = [];
const min = -100
const max = 100
// let isGuess = false;
let count = 0;

for(let i = 1; i <= 100; i++){
    const randomN = parseInt(Math.random() * (max - min) + min);
    numbers.push(randomN)
};

alert(numbers);

const guess = +prompt("Guess a number in the array");

// for (const iterator of numbers) {
//     if(iterator === guess){
//         // isGuess = true
//         count++;
//     }
// }

const indexes = [];

for(let i=0; i < numbers.length; i++){
    if(numbers[i] === guess){
        indexes.push(i)
    }
}

document.write(indexes.length > 0 ? `Found ${guess}, ${indexes.length} times, in indexes : ${indexes}` : "No bingo");