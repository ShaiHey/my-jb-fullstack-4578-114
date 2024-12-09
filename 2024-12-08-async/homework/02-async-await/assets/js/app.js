"use strict";

(() => {

  const generatePrimeNumberAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = parseInt(Math.random() * (max - min)) + min;
        for(let i = 2; i < randomNumber; i++){
          if(randomNumber % i === 0){
            reject(`${randomNumber} is not prime`);
          }
        }
        resolve(`${randomNumber} is prime`)
      }, 1000);
    });
  }

  document.getElementById("isPrime").addEventListener("click", async () => {
    try {
      const min = +document.getElementById("min").value;
      const max = +document.getElementById("max").value; 
      const result = await generatePrimeNumberAfterDelayAsync(min, max);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
})();