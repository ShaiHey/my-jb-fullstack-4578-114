const firstName = "Shai";
const highestGrade = 100;

function showGrade(grade) { // Function is like a let variable
    console.log(`Grade is ${grade}`);
    return true;
}

console.log(showGrade);
console.log(typeof showGrade);

showGrade = 60;

console.log(showGrade);
console.log(typeof showGrade);

showGrade // When you need the reference to the function
showGrade() // When you need to invoke the function, when you need the function actually process