"use strict";

(() => {
  const user = {
    id: 12,
    name: "Israel Israeli"
  }

  const showUser = () => {
    console.log("Function started");
    console.log(user);
    console.log("Function finished");
  }

  document.getElementById("showUser").addEventListener("click", () => {
    console.log("Event started");
    showUser();
    console.log("Event finished");
  });

  const getUser = () => {
    console.log("Function started");
    const userI = user
    console.log("Function finished");
    return userI;
  }

  document.getElementById("getUser").addEventListener("click", () => {
    console.log("Event started");
    const user = getUser();
    console.log(user);
    console.log("Event finished");
  });
})();