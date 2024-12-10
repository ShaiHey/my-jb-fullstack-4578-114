"use strict";

(() => {

  const getData = async url => {
    // const response = await fetch(url);
    // return await response.json();
    return fetch(url).then(response => response.json());
  }

  const generateHTML = users => {
    const newHTML = users
      .map(({name, email}) => `<li>Name: ${name}, Email: ${email}</li>`)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderHTML = newHTML => document.getElementById("users").innerHTML = newHTML;


  document.getElementById("displayUsers").addEventListener("click", async () => {
    try {
      // Get data
      const users = await getData("https://jsonplaceholder.typicode.com/users");

      // Generate HTML
      const newHTML = generateHTML(users);

      // Render HTML
      renderHTML(newHTML);
            
    } catch (error) {
      console.warn(error);
    }
  })
})();