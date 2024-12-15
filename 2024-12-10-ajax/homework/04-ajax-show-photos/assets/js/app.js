"use strict";

(() => {

  const getData = async url => {
    // const response = await fetch(url);
    // return await response.json();
    return fetch(url).then(response => response.json());
  }

  const generateStatsTable = images => {
    const result = images.reduce((acc, {albumId}) => {
      let existingObjectIndex = acc.findIndex(album => album.albumId === albumId);
      if(existingObjectIndex === -1) {
        acc.push({
          albumId,
          count: 0
        })
        existingObjectIndex = acc.findIndex(album => album.albumId === albumId);
      }
      acc[existingObjectIndex].count++
      return acc;
    }, []).map(({albumId, count}) => `
          <tr>
            <td>${albumId}</td>
            <td>${count}</td>
          </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '');

    return result;
  }

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