"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateHTML = ({data}) => {
    const newHTML = data
      .map(({first_name, last_name, email, avatar}) => `
          <tr>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td><img src="${avatar}"></td>
          </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderHTML = newHTML => document.getElementById("usersContainer").innerHTML = newHTML;


  document.getElementById("displayUsers").addEventListener("click", async () => {
    try {
      // Get data
      const photos = await getData("https://reqres.in/api/users");

      // Generate HTML
      const newHTML = generateHTML(photos);

      // Render HTML
      renderHTML(newHTML);
            
    } catch (error) {
      console.warn(error);
    }
  })
})();