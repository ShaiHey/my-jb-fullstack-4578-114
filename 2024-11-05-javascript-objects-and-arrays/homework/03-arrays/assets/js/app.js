let grades = [];
let notValidGrades = [];

for(let i = 1; i <= 10; i++){
    let grade = +prompt("Please enter a grade :");
    grades.push(grade);
    if(grade >= 0 && grade <= 100){
        console.log(`${grade} valid`);
    } else {
        console.log(`${grade} not valid`);
        notValidGrades.push(grade);
    }
}

if(notValidGrades.length > 0){
    document.write(`List of all invalid grade : ${notValidGrades}`)
} else {
    document.write(`All grades is valid ${grades}`)
}