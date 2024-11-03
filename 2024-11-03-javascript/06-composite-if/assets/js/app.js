// const grade = +prompt(`Please enter a grade : `);

// if(grade >= 0 && grade <= 100) {
//     alert("Correct grade");
// } else {
//     alert("Incorrect grade");
// }

const grade = +prompt(`Please enter a grade : `);

if(grade >= 0 && grade <= 100) {
    if(grade === 100) {
        alert("Perfect");
    } else if(grade >= 60) {
        alert("Pass");
    } else {
        alert("Not pass");
    }
} else {
    alert("Incorrect grade");
}