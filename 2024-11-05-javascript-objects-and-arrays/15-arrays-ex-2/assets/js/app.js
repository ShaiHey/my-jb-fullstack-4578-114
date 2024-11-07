const grades = [];
let sum = 0;

for(let i = 1; i <= 12; i++){
    grades.push(parseInt(Math.random() * 101));
}

document.write(`The first grade: ${grades[0]}<br>`);
document.write(`The 5 grade: ${grades[4]}<br>`);

for (const item of grades) {
    document.write(`${item}<br>`);
}

grades[1] -= 4;

document.write("<hr/>");

for (const item of grades) {
    document.write(`${item}<br>`);
}

for (const item of grades) {
    sum += item;
}

document.write(`The average: ${(sum / grades.length).toFixed(2)}<br>`);

let max = 0;
for (const item of grades) {
    max = item > max ? item : max;
}

document.write(`The Max: ${max}<br>`);

// document.write(`The Max: ${Math.max(...grades)}<br>`);