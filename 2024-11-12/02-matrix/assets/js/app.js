const matrix = [
    [1, 2, 3],
    [13, 15, 17],
    [40, 60, 80],
    [41, 65, 89],
]

// Print 17
document.write(matrix[1][2]);
document.write("<hr/>");

// Print 60
document.write(matrix[2][1]);
document.write("<hr/>");

// Display entire matrix
// for(const row of matrix){
//     document.write(`${row}<br>`);
// }
for(const row of matrix){
    for(const cell of row){
        document.write(`${cell} | `);
    }
    document.write("<br>");
}

// Calc the sum and average of matrix
let sum = 0;
let count = 0;

for(const row of matrix){
    for(const cell of row){
        sum += cell;
        // count++; // This
    }
    count += row.length; // Or this
}

document.write(`Sum of matrix is : ${sum}<br>`);
document.write(`Average of matrix is : ${sum/count}<br>`);