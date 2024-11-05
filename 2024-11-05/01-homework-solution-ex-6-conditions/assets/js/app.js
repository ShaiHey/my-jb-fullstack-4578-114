// const grade = +prompt("Please enter a grade:");
// let message;

// if(grade <= 59){
//     message = "Fail"
// } else if(grade <= 69){
//     message = "Enough"
// } else if(grade <= 79){
//     message = "Almost good"
// } else if(grade <= 89){
//     message = "Good"
// } else if(grade <= 99){
//     message = "Very good"
// } else if(grade === 100){
//     message = "Perfect"
// }

// document.write(message)

const grade = +prompt("Please enter a grade:");

switch(true) {
    case grade >= 0 && grade <= 59:
        document.write("Fail");
        break;
    case grade >= 0 && grade <= 69:
        document.write("Enough");
        break;
    case grade >= 0 && grade <= 79:
        document.write("Almost good");
        break;
    case grade >= 0 && grade <= 89:
        document.write("Good");
        break;
    case grade >= 0 && grade <= 99:
        document.write("Very good");
        break;
    case grade === 100:
        document.write("Perfect");
        break;
    default:
        alert("Bad input");
}