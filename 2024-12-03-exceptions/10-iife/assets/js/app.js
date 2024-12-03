"use strict";

(() => {
  function print() {
    console.log("Printing....")
  }
  print();

  function alert(msg) {
    console.log(msg);
  }
  alert("This is a message");

  function doPrint() {
    console.log("sfgsdghfggh");
  }

  doPrint();

  const form = document.getElementById("formidable");
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submitting...");
  });

  const btn = document.getElementById("bouton");
  btn.addEventListener("click", event => alert("Bouton clicked"));

})()



// (() => {

// })();