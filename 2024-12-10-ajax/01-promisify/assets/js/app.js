"use strict";

(() => {

  const promisify = callback => {
    return new Promise((resolve, reject) => {
      callback(resolve, reject);
    })
  }

  promisify(navigator.geolocation.getCurrentPosition);

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