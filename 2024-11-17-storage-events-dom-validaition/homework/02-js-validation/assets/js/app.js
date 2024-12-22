function validate(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput.value;

    const message = firstName ? firstName : "You don't put first name";
    firstNameInput.style.backgroundColor = "pink"
    alert(message);
}