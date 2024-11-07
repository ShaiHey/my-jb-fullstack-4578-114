const min = +prompt("Please enter a number :");
const max = +prompt("Please enter a number :");

for(let i = 1; i <= 100; i++){
    const randomN = Math.random() * (max - min) + min;
    document.write(`${i}. ${parseInt(randomN)}<br>`)
}