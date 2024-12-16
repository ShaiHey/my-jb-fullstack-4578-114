"use strict";

(() => {

  const getData = async url => {
    // const response = await fetch(url);
    // return await response.json();
    return fetch(url).then(response => response.json());
  }

  const generateStatsTable = images => [...new Set(images.map(image => image.albumId))]
    .map(albumId => ({
      albumId,
      count: images.filter(image => image.albumId === albumId).length
    })
    )
    .map(({albumId, count}) => `
            <tr>
              <td>${albumId}</td>
              <td>${count}</td>
            </tr>
    `)
    .reduce((acc, current) => `${acc}${current}`, '');

  const generateHTML = images => {
    const newHTML = images
      .map(({albumId, id, title, thumbnailUrl}) => `
          <tr>
            <td>${albumId}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td><img src="${thumbnailUrl}"></td>
          </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderHTML = newHTML => document.getElementById("photosContainer").innerHTML = newHTML;
  const renderStatsHTML = newHTML => document.getElementById("photosStats").innerHTML = newHTML;

  document.getElementById("displayPhotos").addEventListener("click", async () => {
    try {
      // Get data
      const photos = await getData("https://jsonplaceholder.typicode.com/photos");
      const onlyTheFirst100 = photos.slice(0, 100);

      // Generate HTML
      const newHTML = generateHTML(onlyTheFirst100);
      const statsHTML = generateStatsTable(onlyTheFirst100);

      // Render HTML
      renderHTML(newHTML);
      renderStatsHTML(statsHTML);
            
    } catch (error) {
      console.warn(error);
    }
  })
})();