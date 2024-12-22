"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const text = "abcba"
        console.log(getReversed(text) === text);
    })

    const getReversed = str => {
        if (str.length === 0) return "";
        return str[str.length - 1] + getReversed(str.slice(0, str.length - 1));
    }
})();