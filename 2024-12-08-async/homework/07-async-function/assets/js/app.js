"use strict";

(() => {
  document.getElementById("changeColor").addEventListener("click", () => {
    document.body.style.backgroundColor = "Green";
    setTimeout(() => {
      alert("Done");
    }, 0);
  })
})();