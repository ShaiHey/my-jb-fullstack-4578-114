"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        console.log(printMaxNumberOfArray(numbers));
    })

    let max = 0;
    const printMaxNumberOfArray = (arr) => {
        if (arr.length === 0) return max;
        if (arr[0] > max) max = arr[0]
        return printMaxNumberOfArray(arr.slice(1));
    }
})();