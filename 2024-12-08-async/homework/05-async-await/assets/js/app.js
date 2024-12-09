"use strict";

(() => {

  const getArrayFromServerAsync = size => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = Math.floor(Math.random() * 100);
        const arrayFromServer = [];
        if(n % 2 === 0) {
          for(let i = 1; i <= size; i++){
            arrayFromServer.push(Math.floor(Math.random() * 100))
          }
          resolve(arrayFromServer);
        } else {
          reject(`Unable to retrieve array from server`)
        }
      }, 1000);
    });
  }

  document.getElementById("getArrayFromServer").addEventListener("click", async () => {
    try {
      const result = await getArrayFromServerAsync(5);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
})();