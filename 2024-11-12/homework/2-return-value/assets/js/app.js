function getMinNumber(numbers) {
    return Math.min(...numbers);
}

const array1 = [20, 30, 50];
const array2 = [50, 90, 49];
const array3 = [44, 53, 64];

document.write(`Min is : ${getMinNumber(array1)}, numbers is : ${array1}<br>`);
document.write(`Min is : ${getMinNumber(array2)}, numbers is : ${array2}<br>`);
document.write(`Min is : ${getMinNumber(array3)}, numbers is : ${array3}<br>`);