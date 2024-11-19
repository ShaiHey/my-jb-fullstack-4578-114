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