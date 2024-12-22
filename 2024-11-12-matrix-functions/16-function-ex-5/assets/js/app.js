function getReversed(str) {
    if(typeof str !== "string") return;
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result+=str[i];
    }
    return result;
}

function isPalindrom(str2) {
    return getReversed(str2) === str2;
}

const text = prompt("Please enter a name");
console.log(`${text} reverse is : ${getReversed(text)}`);
console.log(`${text} is palidrom : ${isPalindrom(text)}`);