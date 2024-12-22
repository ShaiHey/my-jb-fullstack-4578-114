"use strict";

(() => {

    document.getElementById("b1").addEventListener("click", () => {
        printNumbers(11);
    })

    document.getElementById("b2").addEventListener("click", () => {
        printEvenNumbers(10);
    })

    document.getElementById("b3").addEventListener("click", () => {
        printNumbersReverse(11);
    })
    
    document.getElementById("b4").addEventListener("click", () => {
       const sum = getSumNTo1(10);
       console.log(sum);
    })

    document.getElementById("b5").addEventListener("click", () => {
       const factorial = getFactorial(10);
       console.log(factorial);
    })

    document.getElementById("b6").addEventListener("click", () => {
       const fibonacci = getFibonacci(7);
       console.log(fibonacci);
    })

    document.getElementById("b7").addEventListener("click", () => {
        const user = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
        }

        getPropertyUser(user);
    })


    const printNumbers = n => {
        if(n <= 0) return;
        document.write(`${n} `);
        printNumbers(n - 1);
    }

    const printEvenNumbers = n => {
        if(n <= 0) return;
        if(n % 2 === 0) document.write(`${n} `);
        printEvenNumbers(n - 1);
    }

    // let i = 1;
    // const printNumbersReverse = n => {
    //     if(n <= 0) return;
    //     document.write(`${i} `);
    //     i++
    //     printNumbersReverse(n - 1);
    // }

    const printNumbersReverse = n => {
        if(n <= 0) return;
        printNumbersReverse(n - 1);
        document.write(`${n} `);
    }

    /*
        3 + getSumNTo1(2)
        3 + 2 + getSumNTo1(1)
        3 + 2 + 1 + getSumNTo1(0)
        3 + 2 + 1 + 0 // final
    */
    
    const getSumNTo1 = n => {
        if(n <= 0) return 0;
        return n + getSumNTo1(n-1);
    }

    const getFactorial = n => {
        if(n <= 1) return 1;
        return n * getFactorial(n-1);
    }

    const getFibonacci = index => {
        if (index <= 2) return 1;
        return getFibonacci(index - 1) + getFibonacci(index - 2);
    }

    const getPropertyUser = obj => {
        for (const prop in obj) {
            if(typeof obj[prop] !== "object") console.log(prop);
            else getPropertyUser(obj[prop])
        }
    }
})();