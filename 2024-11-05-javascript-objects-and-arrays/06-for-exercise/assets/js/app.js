// Exercise 2
// for(let i=-100; i<=100; i+=2) {
//     document.write(`${i}&nbsp;`)
// }

// Exercise 3
// const num1 = +prompt("Please enter a number");
// const num2 = +prompt("Please enter another number");
// let start;
// let end;

// if(num1 > num2){
//     start = num2
//     end = num1
// } else {
//     start = num1
//     end = num2
// }

// for(let i=start; i<=end; i++){
//     document.write(`${i}&nbsp;`)
// }


// Exercise 4
const n = +prompt("Please enter a number");

for(let i=1; i<=n; i++) {
    // document.write(`${i ** 2}&nbsp;`)
    document.write(`The power of : ${i} is : ${i ** 2}<br>`)
}