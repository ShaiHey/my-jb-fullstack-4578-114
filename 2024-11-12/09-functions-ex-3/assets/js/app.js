function printMaxNumber(numbers) {
    document.write(`Max of ${numbers} is ${Math.max(...numbers)}<br>`);
}

const grades = [1, 5, 90];
const grades2 = [34, 100, 76, 220, 90, 67];

printMaxNumber(grades);
printMaxNumber(grades2);