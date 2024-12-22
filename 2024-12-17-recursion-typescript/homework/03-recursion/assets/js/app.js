"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        printNto1(40);
    })

    const printNto1 = n => {
        if(n <= 0) return;
        if(n % 7 === 0 || n.toString().endsWith("7")) document.write(`${n} `);
        printNto1(n - 1);
    }
})();