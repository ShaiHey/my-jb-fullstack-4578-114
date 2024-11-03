// let i = 1

// while (i !== 0) {
//     let num = +prompt("Please enter a number")
//     const result = num ** 2
//     if(num !== 0){
//         console.log(result)
//     }
//     i = num
// }

let num = +prompt("Please enter a number");

while (num !== 0) {
    console.log(num ** 2);
    num = +prompt("Please enter a number");
}