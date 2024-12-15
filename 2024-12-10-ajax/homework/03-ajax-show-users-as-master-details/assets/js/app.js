"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateUsersList = users => {
    const newHTML = users
      .map(({id, name}) => `
         <option value="${id}">${name}</option>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
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
  const renderUsersList = newHTML => document.getElementById("usersList").innerHTML += newHTML;

  document.getElementById("usersList").addEventListener("change", async () => {
    try {
      // Get ID
      const userId = document.getElementById("usersList").value;

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

  const loadUsersList = async () => {
    try {
      const users = await getData(`https://jsonplaceholder.typicode.com/users`);

      // Generate HTML
      const usersListHTML = generateUsersList(users);

      // Render HTML
      renderUsersList(usersListHTML);
    } catch (error) {
      
    }
  }

  loadUsersList();
})();