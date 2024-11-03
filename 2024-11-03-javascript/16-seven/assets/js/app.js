let num = +prompt("Please enter a number");

while (num !== 0){
    console.log(num % 7 === 0 ? "Yes" : "No")
    num = +prompt("Please enter a number");
}