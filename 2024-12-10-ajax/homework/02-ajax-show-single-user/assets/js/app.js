"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateUserTable = ({name, username, email, phone, address, company}) => {
    const newHTML = `
        <p>${name}</p>
        <p>${username}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${address.city}</p>
        <p>${address.street}</p>
        <p>${address.zipcode}</p>
        <p>${company.name}</p>
      `
    return newHTML;
  }

  const renderUserTable = newHTML => document.getElementById("userContainer").innerHTML = newHTML;

  document.getElementById("displayUser").addEventListener("click", async () => {
    try {
      // Get ID
      const userId = document.getElementById("userId").value;

      // Get data
      const users = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`);

      // Generate HTML
      const usersHTML = generateUserTable(users);

      // Render HTML
      renderUserTable(usersHTML);
    } catch (error) {
      console.warn(error);
    }
  })
})();