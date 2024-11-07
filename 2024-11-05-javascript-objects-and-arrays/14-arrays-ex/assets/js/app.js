const grades = [97, 66, 73 ,88, 89, 100];

// for(let i = 0; i <= grades.length - 1; i++){
//     document.write(`${grades[i]}<br>`);
// }

// for-of loop
for (const item of grades) {
    document.write(`${item}<br>`)
}

// Disadvantage of for-of loop
// for(let i = 0; i <= grades.length - 1; i++){
//     document.write(`${grades[i]}<br>`);
//     grades[i] += 6;
// }

// document.write(`${grades}<br>`);

// for (const item of grades) {
//     document.write(`${item}<br>`)
//     item += 6;
// }

// document.write(`${grades}<br>`);

// let i = 0;

// for (const item of grades) {
//     document.write(`${item}<br>`);
//     grades[i] += 6;
//     i++
// }

// document.write(`${grades}<br>`);