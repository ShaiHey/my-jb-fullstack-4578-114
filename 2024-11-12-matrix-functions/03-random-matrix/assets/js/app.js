// let's create a random matrix
// of 5*5
const matrix = [];

for(let rowCount = 0; rowCount < 5; rowCount++){
    const row = [];
    for(let colCount = 0; colCount < 5; colCount++){
        const randomNumber = parseInt(Math.random() * (100 - 20)) + 20;
        row.push(randomNumber);
    }
    matrix.push(row);
}

console.log(matrix);

// find the max value of the matrix
let max = 0;

for(const row of matrix){
    for(const cell of row){
        max = cell > max ? cell : max;
    }
}

console.log(`Max value is ${max}`);

// const max = Math.max(...matrix.flat());

// console.log(`Max value is ${max}`);

// find the coordinates of the max value of the matrix
const maxi = {
    row: 0,
    col: 0,
    value: 0
}

for(let row=0; row < matrix.length; row++){
    for(let col=0; col < matrix[row].length; col++){
        if(matrix[row][col] > maxi.value){
            maxi.value = matrix[row][col];
            maxi.row = row;
            maxi.col = col;
        }
    }
}

console.log(`Max value is ${maxi.value}, located at [${maxi.row}][${maxi.col}]`);