"use strict";

(() => {
  document.getElementById("delay").addEventListener("click", () => {
    setTimeout(() => {
      console.log("1 Second passed");
    }, 1000);
    for(let i=0; i < 10000; i++){
      console.log("Loading...");
    }
  })

  document.getElementById("delay2").addEventListener("click", () => {
    console.log("Clicked");
  })
})();