const firstName = prompt("Please enter your first name");
const age = +prompt("Please enter your age");

if(!firstName){
    alert("You didn't enter anything !");
} else {
    alert(`Your first name is ${firstName}`);
}

if(!age){
    alert("You didn't enter valid age !");
} else {
    alert(`Your age is ${age}`);
}