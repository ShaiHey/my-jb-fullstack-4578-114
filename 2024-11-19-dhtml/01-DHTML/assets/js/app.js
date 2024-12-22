function populate() {
    const animals = ["dog", "cat", "fish"];
    const container  = document.getElementById("container");

    for(const animal of animals) {
        container.innerHTML += `
        <li>
            ${animal}
        </li>
        `
    }
}

function populateImages() {
    const images = [
        "hippo.jpg",
        "tiger.jpg"
    ];

    const container  = document.getElementById("imagesContainer");

    let newHTML = "";
    for(const img of images) {
        newHTML += `<img src="assets/images/${img}"/>`
    }

    container.innerHTML = newHTML;
}

function addFruit() {
    const fruit = prompt("Please enter a fruit");
    const container  = document.getElementById("fruits");

    container.innerHTML += `
        <li>
            ${fruit}
        </li>
        `
}

function addCar() {
    // Collect data
    const car = document.getElementById("car").value;
    const container  = document.getElementById("cars");

    // Generate new HTML from the collected data and render the new html to the DOM
    container.innerHTML += `
        <li>
            ${car}
        </li>
        `
}