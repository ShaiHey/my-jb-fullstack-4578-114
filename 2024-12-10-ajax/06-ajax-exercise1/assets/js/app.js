"use strict";

(() => {

  const getData = async url => {
    // const response = await fetch(url);
    // return await response.json();
    return fetch(url).then(response => response.json());
  }

  const generateHTML = images => {
    const newHTML = images
      .map(({title, thumbnailUrl}) => `
          <tr>
            <td>${title}</td>
            <td><img src="${thumbnailUrl}"></td>
          </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderHTML = newHTML => document.getElementById("photosContainer").innerHTML = newHTML;


  document.getElementById("displayPhotos").addEventListener("click", async () => {
    try {
      // Get data
      const photos = await getData("https://jsonplaceholder.typicode.com/photos");

      // Generate HTML
      const newHTML = generateHTML(photos);

      // Render HTML
      renderHTML(newHTML);
            
    } catch (error) {
      console.warn(error);
    }
  })
})();