"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const extractSuffixFromEmail = email => email.substring(email.lastIndexOf("."));

  const generateStatsTable = users => {
    const totalUsers = users.length;
    const sumLongitude = users.reduce((acc, {address}) => acc + +(address.geo.lng), 0);
    const sumLatitude = users.reduce((acc, {address}) => acc + +(address.geo.lat), 0);

    const userEmail = users
      .map(user => extractSuffixFromEmail(user.email))
      .reduce((acc, suffix) => {
        if(acc[suffix]) {
          acc[suffix]++;
        } else {
          acc[suffix] = 1;
        }

        return acc;
      }, [])

    console.log(userEmail);

    let HTML = `
        <tr>
          <td>Total Users :</td>
          <td>${totalUsers}</td>
        </tr>

        <tr>
          <td>Latitude average :</td>
          <td>${sumLatitude/totalUsers}</td>
        </tr>

        <tr>
          <td>Longitude average :</td>
          <td>${sumLongitude/totalUsers}</td>
        </tr>
    `

    for (const email in userEmail) {
      HTML += `
        <tr>
          <td>Total ${email} Email :</td>
          <td>${userEmail[email]}</td>
        </tr>
      `;
    }

    return HTML;
  }

  const generateUsersTable = users => {
    const newHTML = users
      .map(({name, username, email, phone, company, address}) => `
        <tr>
          <td>${name}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td>${address.city}</td>
          <td>${address.street}</td>
          <td>${address.zipcode}</td>
          <td>${company.name}</td>
        </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderUsersTable = newHTML => document.getElementById("usersContainer").innerHTML = newHTML;
  const renderStatsTable = newHTML => document.getElementById("usersStats").innerHTML = newHTML;

  document.getElementById("displayUsers").addEventListener("click", async () => {
    try {
      // Get data
      const users = await getData("https://jsonplaceholder.typicode.com/users");

      // Generate HTML
      const usersHTML = generateUsersTable(users);
      const statsHTML = generateStatsTable(users);

      // Render HTML
      renderUsersTable(usersHTML);
      renderStatsTable(statsHTML);
    } catch (error) {
      console.warn(error);
    }
  })
})();