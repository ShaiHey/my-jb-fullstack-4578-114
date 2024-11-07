let num = +prompt("Please enter a number :");
let i = num;

while (i !== 0) {
    alert(num % 7 === 0 ? "Yes its 0" : `No its : ${num % 7}`)
    num = +prompt("Please enter a number :");
    i = num
}