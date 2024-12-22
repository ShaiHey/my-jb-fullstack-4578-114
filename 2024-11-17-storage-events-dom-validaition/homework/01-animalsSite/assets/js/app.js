function validate(event) {
    event.preventDefault();

    let isValid = true;

    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput.value;

    const lastNameInput = document.getElementById("lastName");
    const lastName = lastNameInput.value;

    const messageInput = document.getElementById("message");
    const message = messageInput.value;

    if(!firstName){
        document.getElementById("errorFirstName").innerText = "חסר שם פרטי";
        firstNameInput.style.backgroundColor = "pink";
        isValid = false;
    } else if(!lastName){
        document.getElementById("errorLastName").innerText = "חסר שם משפחה";
        lastNameInput.style.backgroundColor = "pink";
        isValid = false;
    } else if(!message){
        document.getElementById("errorMessage").innerText = "חסר הודעה";
        messageInput.style.backgroundColor = "pink";
        isValid = false;
    }

    if(isValid) {
        event.target.submit();
    }
}