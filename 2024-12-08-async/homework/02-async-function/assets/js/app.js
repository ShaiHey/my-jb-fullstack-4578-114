"use strict";

(() => {
  const doSomething = () => {
    console.log("Start");
    setTimeout(() => {
      console.log(new Date());
    }, 3000);
    console.log("End");
  }

  doSomething();
})();