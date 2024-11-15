const multiplicationBoard = [];
let sum = 0;

for(let i = 1; i <= 10; i++) {
    multiplicationBoard[i - 1] = [];
    for (let j = 1; j <= 10; j++) {
      multiplicationBoard[i - 1][j - 1] = i * j;
    }
}

for(const row of multiplicationBoard){
    for(const cell of row){
        document.write(`${cell} | `);
        sum+=cell;
    }
    document.write("<br>");
}

document.write(`The sum is ${sum}`);
console.log(sum);