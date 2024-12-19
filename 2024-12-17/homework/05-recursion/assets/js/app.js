"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const result = getFactorial(4);
        console.log(result);
    })

    const getFactorial = n => {
        if(n <= 1) return 1;
        return n * getFactorial(n-1);
    }
})();