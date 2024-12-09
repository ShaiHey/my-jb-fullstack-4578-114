"use strict";

(() => {

  const generateWorkingDayAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Shabbat"];
        const randomDay = Math.floor(Math.random() * allDays.length);
        if(randomDay <= 4) {
          resolve(`This is a working day : ${allDays[randomDay]}`)
        } else {
          reject(`This is not working day : ${allDays[randomDay]}`)
        }
      }, 1000);
    });
  }

  document.getElementById("generateDay").addEventListener("click", () => {
    generateWorkingDayAfterDelayAsync()
      .then(console.log)
      .catch(console.error);
  });
})();