"use strict";

(() => {

  const getNumberOfCandles = dayNumber => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof dayNumber !== "number") return reject("Number is required");
        if(dayNumber < 1) return reject("Day Number must be greater than 0");
        if(dayNumber > 8) return reject("No Isru Hag in Hanukah");
        resolve(dayNumber + 1);
      }, 10);
    });
  }

  document.getElementById("calc").addEventListener("click", () => {
    let sum = 0;

    getNumberOfCandles(1)
      .then(result => {
        return result; // JavaScript will now create a promise that is resolved to that is resolved to the value of result
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(2);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(3);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(4);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(5);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(6);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(7);
      })
      .then(result => {
        sum+=result;
        return getNumberOfCandles(8);
      }).then(finalResult => console.log(`Total : ${finalResult+sum}`))
      .catch(console.error);
      
  });
})();