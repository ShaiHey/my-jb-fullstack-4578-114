const geolocation = [];

for(let i = 1; i <= 3; i++){
    const latitude = +prompt("Please enter latitude:");
    const longitude = +prompt("Please enter longitude:");
    geolocation.push({
        latitude: latitude,
        longitude: longitude
    });
}

for(const geo of geolocation){
    for(const property in geo){
        document.write(`${property} : ${geo[property]}<br>`);
    }
    document.write("<hr/>");
}