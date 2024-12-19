"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        printNto1(10);
    })

    const printNto1 = n => {
        if(n <= 0) return;
        document.write(`${n} `);
        printNto1(n - 1);
    }
})();