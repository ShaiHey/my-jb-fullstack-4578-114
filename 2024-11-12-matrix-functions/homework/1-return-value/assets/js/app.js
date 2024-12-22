function getAverage(numbers) {
    let sum = 0;
    for(const num of numbers){
        sum+=num;
    }
    return sum / numbers.length;
}

const array1 = [20, 30, 50];
const array2 = [50, 90, 49];
const array3 = [44, 53, 64];

document.write(`Average is : ${getAverage(array1)}, numbers is : ${array1}<br>`);
document.write(`Average is : ${getAverage(array2)}, numbers is : ${array2}<br>`);
document.write(`Average is : ${getAverage(array3)}, numbers is : ${array3}<br>`);