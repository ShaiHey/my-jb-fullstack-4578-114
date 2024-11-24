let images = 0;

function collectData() {
    const description = document.getElementById("description").value;
    const url = document.getElementById("url").value;

    return {
        description: description,
        url: url
    }
}

function generateNewHTML(data) {
    const newHTMLine = `
    <tr>
        <td>${data.description}</td>
        <td><img src="${data.url}"></td>
    </tr>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const imagesContainer = document.getElementById("imagesContainer");
    imagesContainer.innerHTML += newHTML;
}

function clearForm() {
    const formImages = document.getElementById("formImages");
    const description = document.getElementById("description");
    formImages.reset();
    description.focus();
}

function updateImage() {
    images++;
    const amountImage = document.getElementById("amountImage");
    amountImage.innerHTML = `Amount images : ${images}`;
}

function addImage(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    updateImage();
    clearForm();
}