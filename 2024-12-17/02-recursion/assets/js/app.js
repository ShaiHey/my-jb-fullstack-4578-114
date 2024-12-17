"use strict";

(() => {

    document.getElementById("b1").addEventListener("click", () => {
        printStarsRecursion(10);
    })

    const printStars = n => {
        for (let i = 0; i <= n; i++) {
            document.write("* ");
        }
    }

    const printStarsRecursion = n => { // 1. Function signature identical to non-recursive solution
        if(n <= 0) return;            // 2. Exit condition otherwise this is an endless loop
        document.write("* ");        // 3. Do a single portion of the entire recursion work
        printStarsRecursion(n - 1); // 4. Invoke the recursion with the rest of the work
    }
})();