"use strict";

(() => {
  function getUserFromServer(callback) {
    setTimeout(() => {
      const user = { firstName: "Moishe", lastName: "Ufnik" };
      callback(user);
    }, 4000);
  }

  getUserFromServer(console.log)
})();