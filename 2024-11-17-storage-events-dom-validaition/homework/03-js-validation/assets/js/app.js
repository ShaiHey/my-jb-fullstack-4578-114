function validate(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const errorMessageSpan = document.getElementById("errorMessage")
    const firstName = firstNameInput.value;

    if(!firstName) {
        firstNameInput.style.backgroundColor = "pink"
        errorMessageSpan.innerText = "You don't put first name"
    } else {
        alert(firstName);
    }
}