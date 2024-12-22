function getMaxLength(arr) {
    let lastWord = "";
    for(const item of arr){
        lastWord = item.length > lastWord.length ? item : lastWord;
    }

    return lastWord.length;
}

const array1 = ["Test", "Shai", "Phone"];
const array2 = ["Ran", "Cake", "Function"];
const array3 = ["Pizza", "Matrix", "Water"];

document.write(`Max length is : ${getMaxLength(array1)}<br>`);
document.write(`Max length is : ${getMaxLength(array2)}<br>`);
document.write(`Max length is : ${getMaxLength(array3)}<br>`);