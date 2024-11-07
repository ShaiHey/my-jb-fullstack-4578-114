let num = +prompt("Please enter a number :");

for(let i = 1; i <= num; i++){
    for(let j = num; j >= 1; j--){
        document.write(j)
    }
    document.write("<br>")
}