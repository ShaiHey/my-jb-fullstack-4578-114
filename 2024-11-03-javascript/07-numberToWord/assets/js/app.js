// const num = +prompt(`Please enter a number : `);
// const textNum = ["One", "Two", "Three", "Four", "Five"];

// if(num <= 5 && num !== 0) {
//     alert(textNum[num-1])
// } else {
//     alert("Incorrect grade");
// }

const num = +prompt(`Please enter a number : `);

switch(num){
    case 1: 
        alert("One") 
        break;
    case 2: 
        alert("Two")
        break;
    case 3: 
        alert("Three")
        break;
    case 4: 
        alert("Four")
        break;
    case 5: 
        alert("Five")
        break;
    default:
        alert("Invalid")
}