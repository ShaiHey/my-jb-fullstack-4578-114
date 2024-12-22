"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        console.log(countDigits(123));
    })


    const countDigits = number => {
        if (number === 0) return 1;
        if (number < 10) return 1;
        return 1 + countDigits(Math.floor(number / 10));
    }
})();