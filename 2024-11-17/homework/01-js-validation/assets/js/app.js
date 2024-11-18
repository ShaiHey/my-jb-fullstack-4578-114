function validate(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput.value;

    const message = firstName ? firstName : "You don't put first name";
    alert(message);
}