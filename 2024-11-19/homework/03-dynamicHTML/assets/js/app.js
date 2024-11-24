const colors = [];

function collectData() {
    const color = document.getElementById("color").value;

    return color;
}

function generateNewHTML(color) {
    const newHTMLine = `
    <tr>
        <td>${color}</td>
        <td class="colors" style="background-color: ${color};"></td>
    </tr>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const colorsContainer = document.getElementById("colorsContainer");
    colorsContainer.innerHTML += newHTML;
}

function clearForm() {
    const formColors = document.getElementById("formColors");
    const color = document.getElementById("color");
    formColors.reset();
    color.focus();
}

function updateColor(color) {
    colors.push(parseInt(color));
    const amountColor = document.getElementById("amountColor");
    amountColor.innerHTML = `Amount color : ${colors.length}`;
}

function addColor(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    updateColor(data);
    clearForm();
}