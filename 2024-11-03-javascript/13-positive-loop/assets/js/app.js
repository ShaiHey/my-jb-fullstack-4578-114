// let i = 1;

// while (i !== 0) {
//     let num = +prompt("Please enter a number");
//     if(num !== 0){
//         let message = num > 0 ? "Positive" : "Negative";
//         console.log(message);
//     }
//     i = num;
// }


let num = +prompt("Please enter a number");

while (num !== 0){
    console.log(num > 0 ? "Positive" : "Negative")
    num = +prompt("Please enter a number");
}