"use strict";

(() => {
  const span = document.getElementById("location");
  navigator.geolocation.getCurrentPosition((loc) => {
    console.log(loc)
    span.innerHTML = `longitude ${loc.coords.longitude} - latitude ${loc.coords.latitude}`;
  }, error => {
    console.log(error);
  })
})(); 