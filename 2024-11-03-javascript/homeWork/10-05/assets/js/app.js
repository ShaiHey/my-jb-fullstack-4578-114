const num = +prompt("Please enter a number:");

if(num < 0){
    document.write("Negative number")
} else if(num === 0){
    document.write("Zero")
} else if(num <= 100){
    document.write("The number is between 1 and 100 (inclusive)")
} else if(num <= 1000){
    document.write("The number is between 101 and 1000 (inclusive)")
} else {
    document.write("The number is greater than 1000")
}