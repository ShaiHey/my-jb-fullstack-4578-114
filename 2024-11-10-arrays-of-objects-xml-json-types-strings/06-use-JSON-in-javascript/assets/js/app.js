const students = [
    {
        firstName: "Shai",
        lastName: "Heyman",
        lastGrades: [99, 90, 95],
    },
    {
        firstName: "Osher",
        lastName: "Santana",
        lastGrades: [70, 80, 90],
    },
    {
        firstName: "Shahar",
        lastName: "Solomianik",
        lastGrades: [100, 100, 100],
    }
]

// Turns object into a JSON string
const jsonString = JSON.stringify(students);
document.write(`${jsonString}<hr/>`);

console.log(students);
console.log(jsonString);

// Turns a JSON string into a object
const friends = JSON.parse(jsonString);
console.log(friends);