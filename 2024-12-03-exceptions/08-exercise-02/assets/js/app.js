const showGrade = event => {
    event.preventDefault();
    const grade = document.getElementById("grade").value;
    try {
        const newGrade = getGradeAfterFactor(grade);
        console.log(`The grade is ${grade} after factor is ${newGrade}`);
    } catch (error) {
        alert(error);
    }
}

const getGradeAfterFactor = grade => {
    if(!grade) throw new Error("Grade is required");
    if(grade < 0) throw new Error("Grade must be a positive number");
    if(grade > 100) throw new Error("Grade can't be more than 100 ");
    return 10 * Math.sqrt(grade);
}