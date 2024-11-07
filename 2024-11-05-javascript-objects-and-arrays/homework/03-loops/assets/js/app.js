let num = +prompt("Please enter a number :");
let i = num;

while (i > 0) {
    for(let j = 2; j <= num; j+=2){
        console.log(j);
    }
    num = +prompt("Please enter a number :");
    i = num
}