let width = +prompt("Please enter a number :"); // Number of *
let height = +prompt("Please enter a number :"); // Number of line

for(let i = 1; i <= height; i++){
    for(let j = 1; j <= width; j++){
        if(i === 1 || i === height){
            document.write("*")
        } else {
            if(j === 1 || j === width){
                document.write("*");
            } else {
                document.write("&nbsp;");
            }
        }
    }
    document.write("<br>")
}