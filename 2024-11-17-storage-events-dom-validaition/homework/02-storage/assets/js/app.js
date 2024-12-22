function save() {
    const city = document.getElementById("city");
    const street = document.getElementById("street");
    const streetNumber = document.getElementById("streetNumber");
    const zipCode = document.getElementById("zip");

    if(!city.value) {
        document.getElementById("errorCity").innerText = "City required";
        city.style.backgroundColor = "red";
    } else if(!street.value) {
        document.getElementById("errorStreet").innerText = "Street required";
        street.style.backgroundColor = "red";
    } else if(!streetNumber.value) {
        document.getElementById("errorStreetNumber").innerText = "Street number required";
        streetNumber.style.backgroundColor = "red";
    } else if(!zipCode.value) {
        document.getElementById("errorZip").innerText = "Zip code required";
        zipCode.style.backgroundColor = "red";
    } else {
        const address = {
            city: city.value,
            street: street.value,
            streetNumber: streetNumber.value,
            zipCode: zipCode.value
        }
    
        localStorage.setItem("address", JSON.stringify(address));
    }
}

function load() {
    const address = JSON.parse(localStorage.getItem('address'));

    document.getElementById("city").value = address.city;
    document.getElementById("street").value = address.street;
    document.getElementById("streetNumber").value = address.streetNumber;
    document.getElementById("zip").value = address.zipCode;
}