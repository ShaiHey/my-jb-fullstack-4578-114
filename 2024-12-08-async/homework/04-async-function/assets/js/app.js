"use strict";

(() => {
  const randomNumber = () => Math.floor(Math.random() * 100);
  const doSomething = () => {
    console.log("Start");
    const now = new Date();
    setTimeout(() => {
      console.log(randomNumber());
    }, 3000);
    setTimeout(() => {
      console.log(randomNumber());
    }, 5000);
    setTimeout(() => {
      console.log(randomNumber());
    }, 7000);
    console.log("End");
  }

  doSomething();
})();