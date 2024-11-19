function addCarToTable(event) {

    event.preventDefault();

    const table = document.getElementById("myTable");
    const carName = document.getElementById("carName").value;
    const volumeMotor = document.getElementById("volumeMotor").value;
    const color = document.getElementById("color").value;
    const urlImage = document.getElementById("url").value;
    const newLine = `<tr id="${carName}">
                <th>${carName}</th>
                <td>${volumeMotor}</td>
                <td><img src="${urlImage}"></td>
            </tr>`
    

    table.innerHTML += newLine;

    const lineTable = document.getElementById(carName);
    lineTable.style.backgroundColor = color
}