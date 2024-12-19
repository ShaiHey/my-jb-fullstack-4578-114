"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const result = printSumNto1(3);
        console.log(result);
    })

    const printSumNto1 = n => {
        if(n <= 0) return 0;
        return n + printSumNto1(n - 1);
    }
})();