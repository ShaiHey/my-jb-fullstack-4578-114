let num = +prompt("Please enter a number :");
let i = num;

while (i > 0) {
    for(let j = num; j >= 1; j--){
        console.log(j);
    }
    num = +prompt("Please enter a number :");
    i = num
}