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

for(const student of students){
    document.write(`<h3>Properties of ${student.firstName} ${student.lastName}:</h3><br>`);
    for(const property in student){
        document.write(`${property} : ${student[property]}<br>`);
    }
    let sum = 0;
    for (const item of student.lastGrades) {
        sum += item;
    }
    document.write(`Average Grade: ${sum / student.lastGrades.length}`);
    document.write("<hr/>");
}