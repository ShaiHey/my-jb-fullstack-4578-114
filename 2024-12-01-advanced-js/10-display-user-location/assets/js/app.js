const showUserLocation = () => {
    const location = navigator.geolocation.getCurrentPosition(myLocation => console.log(`Your location is : ${myLocation.coords.latitude}, ${myLocation.coords.longitude}`));
    console.log("After getting current position");
    console.log(location); // undefined
}

showUserLocation();