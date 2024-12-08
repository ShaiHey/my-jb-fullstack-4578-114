"use strict";

(() => {
  const user = {
    id: 12,
    name: "Israel Israeli"
  }

  const showUser = () => {
    console.log("Function started");

    // NOT ALL callback are async !
    const grades = [80, 90, 95];
    const gradesWithFactor = grades.map(grade => grade + 2);
    console.log(gradesWithFactor);

    setTimeout(() => {
      console.log(user);
    }, 3000);

    console.log("Function finished");
  }

  document.getElementById("showUser").addEventListener("click", () => {
    console.log("Event started");
    showUser();
    console.log("Event finished");
  });

  const getUser = callback => {
    console.log("Function started");
    setTimeout(() => {
      callback(user);
    }, 3000);
    console.log("Function finished");
  }

  document.getElementById("getUser").addEventListener("click", () => {
    console.log("Event started");
    getUser(user => console.log(user));
    console.log("Event finished");
  });
})();