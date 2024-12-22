function getCountNumbersAverage(numbers) {
    let sum = 0;
    for(const num of numbers){
        sum+=num;
    }

    let count = 0;

    const average = sum / numbers.length;
    for(const num of numbers){
        if(num >= average){
            count++
        }
    }
    return count
}

const array1 = [20, 30, 50, 34, 44, 46, 60];
const array2 = [50, 90, 49, 39, 90, 34, 43];
const array3 = [44, 53, 64];

document.write(`Counts numbers biggest or equal average is : ${getCountNumbersAverage(array1)}, numbers is : ${array1}<br>`);
document.write(`Counts numbers biggest or equal average is : ${getCountNumbersAverage(array2)}, numbers is : ${array2}<br>`);
document.write(`Counts numbers biggest or equal average is : ${getCountNumbersAverage(array3)}, numbers is : ${array3}<br>`);