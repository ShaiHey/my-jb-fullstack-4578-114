const grade = +prompt(`Please enter a grade : `);
let message;

// if(grade >= 60){
//     message = "Pass"
// } else {
//     message = "Fail"
// }

// alert(message)

// Ternary operator - ternary means שלושה, and this the only operator 
// That works on 3 operands
// The format is:
// Condition ? result for true : result for false
message = grade >= 60 ? 'Pass' : 'Fail'

// Can use as many ternary operators at once, please don't
// message = grade >= 60 ? 'Pass' : (grade > 0 ? 'Fail' : 'Invalid')

alert(message)