"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const numbers = [2, 4, 6, 8]
        console.log(allNumberIsEven(numbers));
    })

    const allNumberIsEven = arr => {
        if (arr.length === 0) return true;
        if(arr[0] % 2 === 0) return allNumberIsEven(arr.slice(1));
        return false;
    }
})();