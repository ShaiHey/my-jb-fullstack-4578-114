"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateHTML = ({value}) => value;

  const renderHTML = newHTML => document.getElementById("joke").innerHTML = newHTML;

  const displayChuckNorrisJoke = async () => {
    try {
      // Get data
      const joke = await getData("https://api.chucknorris.io/jokes/random");

      // Generate HTML
      const jokeText = generateHTML(joke);

      // Render HTML
      renderHTML(jokeText);
    } catch (error) {
      console.warn(error);
    }
  }

  document.getElementById("startGame").addEventListener("click", async () => {
    setInterval(displayChuckNorrisJoke, 5000);
  })
})();