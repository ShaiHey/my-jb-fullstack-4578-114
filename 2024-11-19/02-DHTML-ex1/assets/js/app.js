function addCarToTable(event) {

    event.preventDefault();

    const carsContainer = document.getElementById("carsContainer");
    const carName = document.getElementById("carName");
    const volumeMotor = document.getElementById("volumeMotor");
    const color = document.getElementById("color");
    const urlImage = document.getElementById("url");
    const newLine = `
    <tr style="background-color: ${color.value};">
        <th>${carName.value}</th>
        <td>${volumeMotor.value}</td>
        <td><img src="${urlImage.value}"></td>
    </tr>`

    const arr = {
        carName: carName.value,
        volumeMotor: volumeMotor.value,
        color: color.value,
        urlImage: urlImage.value
    }

    if(localStorage.getItem("cars2")){
        const cars = JSON.parse(localStorage.getItem("cars2"));
        cars.push(arr)
        localStorage.setItem("cars2", JSON.stringify(cars));
    } else {
        const arr2 = [arr]
        localStorage.setItem("cars2", JSON.stringify(arr2));
    }
    

    carsContainer.innerHTML += newLine;

    const carForm = document.getElementById("carForm");
    carForm.reset();
    carName.focus();
}

function loadCarsToTable() {
    if(localStorage.getItem("cars2")){
        const cars = JSON.parse(localStorage.getItem("cars2"));
        const carsContainer = document.getElementById("carsContainer");
        for(const car of cars) {
            const newLine = `
                <tr style="background-color: ${car.color};">
                    <th>${car.carName}</th>
                    <td>${car.volumeMotor}</td>
                    <td><img src="${car.urlImage}"></td>
                </tr>`
            carsContainer.innerHTML += newLine;
        }
    }
}

loadCarsToTable()