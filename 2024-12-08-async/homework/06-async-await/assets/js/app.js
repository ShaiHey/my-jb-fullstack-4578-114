"use strict";

(() => {

  const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min)) + min;

  const getPizzaFromServerAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = getRandomNumber(0, 100);
        if(n % 2 === 0) {
          resolve({
            diameter: getRandomNumber(10, 50),
            price: getRandomNumber(20, 80),
            toppings: getRandomNumber(0, 4),
          });
        } else {
          reject(`Unable to retrieve object pizza from server`)
        }
      }, 1000);
    });
  }

  document.getElementById("getPizza").addEventListener("click", async () => {
    try {
      const result = await getPizzaFromServerAsync();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
})();