const firstName = "Shai";
const highestGrade = 100;

function showGrade(grade) {
    console.log(`Grade is ${grade}`);
    return true;
}

function showName(name) {
    console.log(`Name is ${name}`);
}

function showFunction(someFunction) {
    console.log(`Some Function is ${someFunction}`);
    console.log(`Some Function type is ${typeof someFunction}`);
    someFunction(60);
}

showName(firstName);
showGrade(highestGrade);

showFunction(showGrade);