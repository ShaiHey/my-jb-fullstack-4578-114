"use strict";

(() => {

    document.getElementById("btn1").addEventListener("click", () => {
        printEmoji(10);
    })

    const printEmoji = n => {
        if(n <= 0) return;
        document.write(`😁`);
        printEmoji(n - 1);
    }
})();