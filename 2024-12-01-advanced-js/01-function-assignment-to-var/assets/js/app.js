const name = "Shai";
const grade = 100;

function showGrade(grade) {
    console.log(`Grade is ${grade}`);
    return true;
}

console.log(name);
console.log(grade);
console.log(showGrade(60));
console.log(showGrade);

console.log(typeof name);
console.log(typeof grade);
console.log(typeof showGrade(60));
console.log(typeof showGrade);

let someVariable;

someVariable = name;
someVariable = grade;
someVariable = showGrade(20);
someVariable = showGrade;

console.log(someVariable);
console.log(someVariable(60));