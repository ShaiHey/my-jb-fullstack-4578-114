const matrix = [
    [12, 23, 34, 45],
    [56, 67, 78, 89],
    [10, 20, 30, 40]
];
let sum = 0;
let count = 0;
let max = 0;
let min = Infinity;

for(const row of matrix){
    for(const cell of row){
        document.write(`${cell} | `);
        sum += cell;
        max = cell > max ? cell : max;
        min = cell < min ? cell : min;
    }
    document.write("<br>");
    count += row.length;
}

document.write(`Sum of matrix is : ${sum}<br>`);
document.write(`Average of matrix is : ${sum/count}<br>`);
document.write(`Max is : ${max}<br>`);
document.write(`Min is : ${min}<br>`);

for(const row of matrix){
    for(const cell of row){
        document.write(`${cell % 7 === 0 ? cell : "🤐"} | `);
    }
    document.write("<br>");
}