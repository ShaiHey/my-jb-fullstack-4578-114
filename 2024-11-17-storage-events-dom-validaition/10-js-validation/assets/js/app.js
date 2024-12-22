function validate(event) {
    // Tells the browser, that i
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const ageInput = document.getElementById("age");

    const email = emailInput.value;
    const password = passwordInput.value;
    const age = ageInput.value;

    if(!email) {
        document.getElementById('emailErrorMessage').innerHTML = "You must enter an email";
    }

    if(password.length < 8) {
        document.getElementById('passwordErrorMessage').innerHTML = "Passwords must be at least 8 characters long";
    }

    if(age < 13) {
        document.getElementById('ageErrorMessage').innerHTML = "Kids are not allowed. Grow up and come back";
    }
}