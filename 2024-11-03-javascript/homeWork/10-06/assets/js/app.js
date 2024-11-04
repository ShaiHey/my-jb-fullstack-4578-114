const grade = +prompt("Please enter a grade:");
let message;

if(grade <= 59){
    message = "Fail"
} else if(grade <= 69){
    message = "Enough"
} else if(grade <= 79){
    message = "Almost good"
} else if(grade <= 89){
    message = "Good"
} else if(grade <= 99){
    message = "Very good"
} else if(grade === 100){
    message = "Perfect"
}

document.write(message)