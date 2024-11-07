let num = +prompt("Please enter a number :");
let i = num;
let j = num;

while (i > 0) {
    while (j >= 1) {
        if(j % 2 === 0){
            console.log(j);
            j-=2;
        } else {
            j--;
        }
    }
    num = +prompt("Please enter a number :");
    i = num;
    j = num;
}