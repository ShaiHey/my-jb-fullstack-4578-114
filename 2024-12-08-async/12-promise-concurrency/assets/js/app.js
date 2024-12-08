"use strict";

(async () => {

  const getNumberOfCandles = dayNumber => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof dayNumber !== "number") return reject("Number is required");
        if(dayNumber < 1) return reject("Day Number must be greater than 0");
        if(dayNumber > 8) return reject("No Isru Hag in Hanukah");
        resolve(dayNumber + 1);
      }, 2000);
    });
  }
  
  try {
    // let sum = 0;
    // for(const dayNumber of [1, 2, 3, 4, 5, 6, 7, 8]) {
    //   const result = await getNumberOfCandles(dayNumber);
    //   sum += result;
    // }
    // console.log(sum);
    const promises = [1, 2, 3, 4, 5, 6, 7, 8].map(dayNumber => getNumberOfCandles(dayNumber));
    const results = await Promise.all(promises);
    const candlesInHanukah = results.reduce((acc, current) => acc + current, 0);
    console.log(candlesInHanukah);

  } catch (error) {
    console.log(error)
  }
})();