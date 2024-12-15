"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateHTML = data => {
    const newHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <img src="${data.current.condition.icon}">
        <h3>${data.current.condition.text} - ${data.current.temp_c}°C</h3>
      `
    return newHTML;
  }

  const renderHTML = newHTML => document.getElementById("currentWeather").innerHTML = newHTML;


  document.getElementById("city").addEventListener("change", async () => {
    try {
      // Get city
      const city = document.getElementById("city").value;

      // Get data
      const photos = await getData(`http://api.weatherapi.com/v1/current.json?key=f8a96334ff7e4355959104014241112&q=${city}`);

      // Generate HTML
      const newHTML = generateHTML(photos);

      // Render HTML
      renderHTML(newHTML);
            
    } catch (error) {
      console.warn(error);
    }
  })
})();