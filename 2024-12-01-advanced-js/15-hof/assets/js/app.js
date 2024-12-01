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

// 1. Find item

// Loop version
// for(const student of students) {
//     if(student.grade === 100) {
//         console.log(student);
//         break;
//     }
// }

// HOF version
const student = students.find(student => student.grade === 100);
console.log(student);

// 2. Filter item

// Loop version
// const studentWith90Plus = [];
// for(const student of students) {
//     if(student.grade > 90 && student.name.startsWith("B")) {
//         studentWith90Plus.push(student);
//     }
// }
// console.log(studentWith90Plus);

// HOF version
const filteredStudents = students.filter(student => student.grade > 90 && student.name.startsWith("B"))
console.log(filteredStudents);

// 3. findIndex item

// Loop version
// for(let i=0; i < students.length; i++) {
//     if(students[i].age === 22) {
//         console.log(i);
//         break;
//     }
// }

// HOF version
const index = students.findIndex(student => student.age === 22);
console.log(index);

// 4. some logic per item

// Loop version
for(const student of students) {
    console.log(student);
}

// HOF version
students.forEach((student, i, arr) => console.log(student)); // apparently, forEach invokes the callback with 3 params: current, currentIndex, originalArray

// 5. Map item (convert array)

// Loop version
const newArray = [];
for(const student of students) {
    newArray.push(`
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        </tr>
    `)
}

document.getElementById("students").innerHTML = newArray.join("");

// HOF version
const anotherNewArray = students.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        </tr>
    `)

document.getElementById("students2").innerHTML = anotherNewArray.join("");

// How to give each student 3 bonus points
// if i want to return an object from an array func, I need to wrap the {} with ()
const studentsAfterBonus = students.map(student => ({
    name: student.name,
    age: student.age,
    grade: student.grade + 3
}))

console.log(studentsAfterBonus);

// 6. extract a single value out of an array

// Loop version
let sum = 0;
let avg = 0;
for(const student of students) {
    sum += student.grade;
}

avg = sum / students.length;
console.log(avg);

// HOF version
const avgGrade = students.reduce((cumulativeValue, currentStudent) => cumulativeValue + currentStudent.grade, 0) / students.length;
console.log(avgGrade);