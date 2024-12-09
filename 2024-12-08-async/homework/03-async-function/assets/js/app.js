"use strict";

(() => {
  const doSomething = () => {
    console.log("Start");
    const now = new Date();
    setTimeout(() => {
      console.log(now);
    }, 3000);
    console.log("End");
  }

  doSomething();
})();