const students = [
    {
        name: "Yoav",
        grade: 80,
        age: 22
    },
    {
        name: "Beery",
        grade: 96,
        age: 18
    },
    {
        name: "Shai",
        grade: 100,
        age: 18
    },
];

const biggestGrade = students.reduce((lastGrade, currentStudent) => currentStudent.grade > lastGrade ? currentStudent.grade : lastGrade, 0);
console.log(biggestGrade);