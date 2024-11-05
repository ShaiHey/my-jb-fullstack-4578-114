// const grade1 = 97;
// const grade2 = 66;
// const grade3 = 73;
// const grade4 = 88;

const grades = [97, 66, 73 ,88];

// The definition of [i]: i is the *offset* of the value in the array

document.write(`${grades}<br>`);
document.write(`${grades[0]}<br>`);

// Update value of a specific item
grades[2]+=6;
document.write(`${grades[2]}<br>`);
document.write(`${grades}<br>`);

// Add a value to the array
grades.push(100);
document.write(`${grades}<br>`);

// Print the array length
document.write(`Length ${grades.length}<br>`);

// Remove a value to the array
grades.splice(3, 1);
document.write(`${grades}<br>`);


grades.splice(2, 2);
document.write(`${grades}<br>`);