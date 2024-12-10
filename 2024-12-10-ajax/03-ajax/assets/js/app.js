"use strict";

(() => {

  // const getUsers = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return await response.json();
  // }

  // document.getElementById("displayUsers").addEventListener("click", async () => {
  //   try {
  //     const users = await getUsers();
  //     console.log(users);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // })

  document.getElementById("displayUsers").addEventListener("click", async () => {
    try {
      // Get data
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      console.log(users);

      // Generate HTML
      const newHTML = users.map(({name, email}) => `<li>Name: ${name}, Email: ${email}</li>`).reduce((acc, current) => `${acc}${current}`, "")

      // Render HTML
      document.getElementById("users").innerHTML = newHTML;
      
    } catch (error) {
      console.warn(error);
    }
  })
})();