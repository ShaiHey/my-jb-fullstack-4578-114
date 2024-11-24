function collectData() {
    const animalType = document.getElementById("animalType").value;
    const animalName = document.getElementById("animalName").value;
    const animalAge = document.getElementById("animalAge").value;
    const animalImage = document.getElementById("animalImage").value;

    return {
        animalType: animalType,
        animalName: animalName,
        animalAge: animalAge,
        animalImage: animalImage
    }
}

function generateNewHTML(data) {
    const newHTMLine = `
    <tr>
        <td>${data.animalType}</td>
        <td>${data.animalName}</td>
        <td>${data.animalAge}</td>
        <td><img src="${data.animalImage}"></td>
    </tr>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const animalsContainer = document.getElementById("animalsContainer");
    animalsContainer.innerHTML += newHTML;
}

function clearForm() {
    const formAnimals = document.getElementById("formAnimals");
    const animalType = document.getElementById("animalType");
    formAnimals.reset();
    animalType.focus();
}

function addToStorage(data) {
    if(localStorage.getItem("animals")){
        const currentAnimals = JSON.parse(localStorage.getItem("animals"));
        currentAnimals.push(data);
        localStorage.setItem("animals", JSON.stringify(currentAnimals))
    } else {
        localStorage.setItem("animals", JSON.stringify([data]))
    }
}

function addAnimal(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    addToStorage(data);
    clearForm();
}

function loadAnimals() {
    if(localStorage.getItem("animals")){
        const animals = JSON.parse(localStorage.getItem("animals"));
        for(const animal of animals) {
            const newHTML = generateNewHTML(animal);
            insertNewHTML(newHTML);
        }
    }
}

loadAnimals();