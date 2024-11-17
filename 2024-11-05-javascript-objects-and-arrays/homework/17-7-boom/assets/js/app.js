let num = +prompt("Please enter a number :");

while(num !== 0) {
    for(let i = 1; i <= num; i++){
        let iString = i.toString();
        if(i % 7 === 0 || iString.includes("7")){
            console.log("Boom !");
        } else {
            console.log(`${i}`)
        }
    }
    num = +prompt("Please enter a number :");
}