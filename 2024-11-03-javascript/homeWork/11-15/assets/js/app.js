let i = 1;

while (i !== 0) {
    const num = +prompt("Please enter a number :");
    alert(num % 7 === 0 ? "Yes its 0" : `No its : ${num % 7}`)
    i = num
}