const grades = [];

function collectData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const grade = document.getElementById("grade").value;

    return {
        firstName: firstName,
        lastName: lastName,
        grade: grade
    }
}

function generateNewHTML(data) {
    const newHTMLine = `
    <tr>
        <th>${data.firstName}</th>
        <th>${data.lastName}</th>
        <th>${data.grade}</th>
    </tr>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const gradesContainer = document.getElementById("gradesContainer");
    gradesContainer.innerHTML += newHTML;
}

function clearForm() {
    const formGrades = document.getElementById("formGrades");
    const firstName = document.getElementById("firstName");
    formGrades.reset();
    firstName.focus();
}

function updateAverage(data) {
    grades.push(parseInt(data.grade));

    let sum = 0;
    for(const grade of grades) {
        sum += grade
    }

    const gradeAverage = document.getElementById("gradeAverage");

    gradeAverage.innerHTML = `Average is : ${sum/grades.length}`;
}

function addGrades(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    updateAverage(data);
    clearForm();
}