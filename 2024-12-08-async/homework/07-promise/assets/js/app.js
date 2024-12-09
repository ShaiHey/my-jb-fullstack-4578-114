"use strict";

(() => {

  const generateStrongPasswordAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const allChars = lowerCase + upperCase + digits;
        const arrayChars = allChars.split("");

        let password = '';
        for (let i = 0; i < 6; i++) {
          password += arrayChars[Math.floor(Math.random() * allChars.length)];
        }

        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);

        if (hasLower && hasUpper && hasDigit) {
          resolve(`Strong password : ${password}`);
        } else {
          reject(`Not strong password : ${password}`);
        }
      }, 1000);
    });
  };

  document.getElementById("generatePassword").addEventListener("click", () => {
    generateStrongPasswordAsync()
      .then(console.log)
      .catch(console.error);
  });
})();