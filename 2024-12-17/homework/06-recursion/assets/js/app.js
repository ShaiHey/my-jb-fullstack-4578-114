"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        print1ToN(10)
    })

    const print1ToN = n => {
        if(n <= 0) return;
        print1ToN(n - 1);
        document.write(`${n} `);
    }
})();