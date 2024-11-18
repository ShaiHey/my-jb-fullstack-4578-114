function save() {
    const city = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const streetNumber = document.getElementById("streetNumber").value;
    const zipCode = document.getElementById("zip").value;

    const address = {
        city: city,
        street: street,
        streetNumber: streetNumber,
        zipCode: zipCode
    }

    localStorage.setItem("address", JSON.stringify(address));
}

function load() {
    const address = JSON.parse(localStorage.getItem('address'));

    document.getElementById("city").value = address.city;
    document.getElementById("street").value = address.street;
    document.getElementById("streetNumber").value = address.streetNumber;
    document.getElementById("zip").value = address.zipCode;
}