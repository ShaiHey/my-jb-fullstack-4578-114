"use strict";

(() => {
    document.getElementById("btn1").addEventListener("click", () => {
        const customer = {
            firstName: "Moishe",
            lastName: "Ufnik",
            address: { city: "Tel Aviv", street: "Hertzel", num: 12 }
        }
        console.log(getValueUser(customer));
    })

    const finalArray = [];
    const getValueUser = obj => {
        for (const prop in obj) {
            if (typeof obj[prop] !== "object") finalArray.push(obj[prop]);
            else getValueUser(obj[prop])
        }

        return finalArray
    }
})();