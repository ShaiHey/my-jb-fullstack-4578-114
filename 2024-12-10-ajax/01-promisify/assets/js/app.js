"use strict";

(() => {

  const promisify = callback => {
    return new Promise((resolve, reject) => {
      callback(position => resolve(position), error => reject(error));
    })
  }

  const newFunc = promisify(navigator.geolocation.getCurrentPosition.bind(navigator.geolocation));
  newFunc.then(msg => console.log(msg))

  const getCurrentPositionPromise = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  }

  document.getElementById("displayLocation").addEventListener("click", async () => {
    const span = document.getElementById("location");
    try {
      const pos = await getCurrentPositionPromise();
      span.innerHTML = `longitude ${pos.coords.longitude} - latitude ${pos.coords.latitude}`;
    } catch (error) {
      span.innerHTML = error.message;
    }
  })
})();