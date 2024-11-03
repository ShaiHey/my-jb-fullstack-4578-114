let num = +prompt("Please enter a number");
let sum = 0;
let div = 0;

while (num !== 0){
    sum += num;
    div++;
    num = +prompt("Please enter a number");
}

if(div > 0){
    alert(`Average is : ${sum / div}`);
} else {
    alert(`No data to process`);
}