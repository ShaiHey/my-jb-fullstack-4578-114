"use strict";

(() => {
  const span = document.getElementById("location");
  document.getElementById("displayLocation").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(loc => {
      span.innerHTML = `longitude ${loc.coords.longitude} - latitude ${loc.coords.latitude}`;
    }, error => {
      span.innerHTML = error.message;
    })
  })
})();