"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        console.log(sumEvenNumbers(numbers));
    })

    const sumEvenNumbers = (arr) => {
        if (arr.length === 0) return 0;
        if (arr[0] % 2 === 0) return arr[0] + sumEvenNumbers(arr.slice(1));
        return sumEvenNumbers(arr.slice(1));
    }
})();