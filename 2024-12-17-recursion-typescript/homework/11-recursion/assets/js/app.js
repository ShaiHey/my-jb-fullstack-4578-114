"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        console.log(sumDigits(123));
    })


    const sumDigits = number => {
        if (number === 0) return 0;
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
})();