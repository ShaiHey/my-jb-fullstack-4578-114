function validate(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const errorMessageSpanFirst = document.getElementById("errorMessageFirst");
    const errorMessageSpanLast = document.getElementById("errorMessageLast");
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    if(!firstName) {
        firstNameInput.style.backgroundColor = "pink"
        errorMessageSpanFirst.innerText = "You don't put first name"
    } else if(!lastName) {
        lastNameInput.style.backgroundColor = "pink"
        errorMessageSpanLast.innerText = "You don't put last name"
    } else {
        alert(`
        First name : ${firstName}
        Last name : ${lastName}
        `)
    }
}