function validate(event) {
    event.preventDefault();

    let isValid = true;

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const errorMessageSpanFirst = document.getElementById("errorMessageFirst");
    const errorMessageSpanLast = document.getElementById("errorMessageLast");
    const errorMessageSpanEmail = document.getElementById("errorMessageEmail");
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;

    if(!firstName) {
        firstNameInput.style.backgroundColor = "pink";
        errorMessageSpanFirst.innerText = "First name is required.";
        isValid = false;
    } else if(firstName.length < 2) {
        firstNameInput.style.backgroundColor = "pink";
        errorMessageSpanFirst.innerText = "First name must be at least 2 characters long.";
        isValid = false;
    } else if(firstName.length > 30) {
        firstNameInput.style.backgroundColor = "pink";
        errorMessageSpanFirst.innerText = "First name cannot be longer than 30 characters.";
        isValid = false;
    };
    
    if(!lastName) {
        lastNameInput.style.backgroundColor = "pink";
        errorMessageSpanLast.innerText = "Last name is required.";
        isValid = false;
    } else if(lastName.length < 2) {
        lastNameInput.style.backgroundColor = "pink";
        errorMessageSpanLast.innerText = "Last name must be at least 2 characters long.";
        isValid = false;
    } else if(lastName.length > 30) {
        lastNameInput.style.backgroundColor = "pink";
        errorMessageSpanLast.innerText = "Last name cannot be longer than 30 characters.";
        isValid = false;
    };
    
    if(!email) {
        emailInput.style.backgroundColor = "pink";
        errorMessageSpanEmail.innerText = "Email is required.";
        isValid = false;
    } else if(email.length < 2) {
        emailInput.style.backgroundColor = "pink";
        errorMessageSpanEmail.innerText = "Email must be at least 2 characters long.";
        isValid = false;
    } else if(email.length > 30) {
        emailInput.style.backgroundColor = "pink";
        errorMessageSpanEmail.innerText = "Email cannot be longer than 30 characters.";
        isValid = false;
    };

    
    if(isValid) {
        alert(`
        Full name : ${firstName} ${lastName}
        Email : ${email}
        `)
    }
}