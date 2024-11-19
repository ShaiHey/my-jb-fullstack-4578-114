function collectData() {
    const carName = document.getElementById("carName").value;
    const engineVolume = document.getElementById("volumeMotor").value;
    const color = document.getElementById("color").value;
    const image = document.getElementById("url").value;

    return {
        carName: carName,
        engineVolume: engineVolume,
        color: color,
        image: image
    }
}

function saveToStorage(data) {
    if(localStorage.getItem("cars")) {
        const arr = JSON.parse(localStorage.getItem("cars"));
        arr.push(data);
        localStorage.setItem("cars", JSON.stringify(arr));
    } else {
        const arr2 = [data];
        localStorage.setItem("cars", JSON.stringify(arr2));
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr style="background-color: ${data.color};">
        <td>${data.carName}</td>
        <td>${data.engineVolume}</td>
        <td><img src="${data.image}"></td>
    </tr>`
    
    return newHTML
}

function renderHTML(newHTML) {
    const carsContainer = document.getElementById("carsContainer");
    carsContainer.innerHTML += newHTML;
}

function clearForm() {
    const carForm = document.getElementById("carForm");
    carForm.reset();

    const carNameInput = document.getElementById("carName");
    carNameInput.focus();
}

function addCarToTable(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    saveToStorage(data)
    renderHTML(newHTML);
    clearForm();
}

function addAllCars() {
    const carsJSON = localStorage.getItem("cars");
    if(carsJSON) {
        const cars = JSON.parse(localStorage.getItem("cars"));
        for(const car of cars){
            const newHTML = generateHTML(car);
            renderHTML(newHTML);
        }
    }
}

addAllCars();